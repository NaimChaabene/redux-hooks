import React from 'react';

import {useDispatch}from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'



function TaskAdd() {
  var dispatch=useDispatch();
  //get the new task description
  function handlesubmit(event) {
    event.preventDefault();
    var form = document.getElementById("form");
   if (form.value.length>4){
    var newtask=[{
      id: uuidv4(),
      description: form.value,
      isDone: false }]
    dispatch({type:"ADD_TASK", payload:newtask});
    form.value='';
   }   
}

  return (
   
  
    
<div className='ajoutTitle'>
      <h2>Add a new task</h2>
<Form>
                <Form.Group  controlId="formPlaintextEmail" className='d-md-flex '>
                  <Form.Label >
                    title :
                  </Form.Label>
                  <Col  >
                    <Form.Control id='form' type="text" placeholder="task title" name="title"   />
                  </Col>
                </Form.Group>
                <Button type="submit" style={{float:"right"}} onClick ={handlesubmit} > Add </Button>
              </Form>
</div>
)}
export default TaskAdd; 

  
  

