import React from 'react';


import './App.css';
// Components
import TaskAdd from './components/TaskAdd';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import Edit from './components/Edit'




const App = () => {
  
  

    
  return (
  
    <div className="main" >
     <div className="header d-md-flex justify-content-around">
     <TaskAdd />
      <Filter />
      </div>
      
      <h1  style={{marginTop:"50px"}}> Todo List :</h1>
      <TaskList />
      <Edit />
    </div>
 
  )
  }

  


export default App;
