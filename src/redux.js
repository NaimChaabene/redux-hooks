import { createStore , combineReducers} from "redux";




// Reducers
function filterreducer(state={filter:0}, action) {
  switch (action.type) {
    case "done": return {filter:1};  
    case "inprogress": return {filter:2};  
    case "reset": return {filter:0};  
    default : return state;}} 

    function showEditreducer(state={show:false ,taskEdited:''}, action) {
      switch (action.type) {
        case "hideedit": return {...state ,show:false};  
        case "showedit": return {...state ,show:true};  
        case "idtask": return {...state,taskEdited:action.payload};    
        default : return state;}
        ;}

function taskreducer(state={tasks:[]}, {type,payload}) {
  switch (type) {
    case 'ADD_TASK': return { tasks: [...state.tasks,  ...payload] }
    case "edittask":  return {tasks : state.tasks.map(el => el.id === payload.id? {...el , description :payload.text} : el)} 
   case "updateCheckBox" : return {tasks : state.tasks.map(el => el.id === payload ? {...el , isDone : !el.isDone} : el)}
   default : return state;
}}
// combine reducers
const rootreducer=combineReducers({taskreducer,filterreducer,showEditreducer});
//create the store
export const store = createStore(
  rootreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);





