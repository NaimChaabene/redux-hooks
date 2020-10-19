import React from "react";
import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button'

function Filter() {
  var dispatch=useDispatch();
  //sent the filter chosen to the reducer
function handlesubmit(e) {
  e.preventDefault();
  if(document.getElementById('done').checked){ dispatch({type:"done"});}
  if(document.getElementById('inprogress').checked){ dispatch({type:"inprogress"});}

}


  return ( 
  <div className="newtask">
    <h2>Filter </h2>  
  <form     >
    <label > Tasks done
    <input type="radio" id='done' name='actions' />
    </label>
    <label > Tasks in progress
    <input type="radio" id='inprogress' name='actions' />
    </label>
    <div>
    <Button className="btn btn-success" onClick={handlesubmit}>filter</Button>
    
    {/* reset form by click on the reset button and hide fomr */}
    <Button  className=" btn btn-danger" style={{float:"right"}} onClick={()=>{dispatch({type:"reset"})
                                      document.getElementById("inprogress").checked=false;
                                      document.getElementById("done").checked=false}
                                     }>
                                     Reset</Button>
    </div>
  </form>

  </div>);
 
}

export default Filter;