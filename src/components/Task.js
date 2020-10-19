import React from "react";
import Button from 'react-bootstrap/Button'

import { useDispatch } from "react-redux";


function Task({ task }) {
  var dispatch = useDispatch();
 
  


 

  return (
    <li className="task d-flex justify-content-between">
    
      <h3 id="example-custom-modal-styling-title" className="description"> {task.description}</h3>
        {/* show Edit form and send the id of the task to edit */}

        <div>
        <Button 
          className="edit btn btn-secondary"
          id="change"
          onClick={() => {
            dispatch({ type: "showedit" });
            dispatch({ type: "idtask", payload: task.id }); 
          }}
        >Edit</Button>


        <input  style={{marginLeft:'20px'}}
          type="checkbox"
          id="status"
          onChange={() =>
            dispatch({ type: "updateCheckBox", payload: task.id })
          }
          checked={task.isDone ? true : false}
        />
        </div>
        
        
    
      



       
      </li>
      
   
  );
}

export default Task;
