import React from 'react';
import { useSelector ,useDispatch} from "react-redux";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'




function Edit() {
  var {taskEdited}=useSelector(state=>({...state.showEditreducer}));
  var {show}=useSelector(state=>({...state.showEditreducer}));
    var dispatch=useDispatch();
  

    //get the text from the input and sent it with the id of the task to the reducer
    function handleedit(e) {
      e.preventDefault();
      var newText=document.getElementById("form3").value;
      var data={id:taskEdited,text:newText};
     
      dispatch({type:"edittask", payload:data});
      dispatch({type:"hideedit"})
    }


    return (
       


        
  
        <Modal
          show={show}
          onHide={() => dispatch({type:"hideedit"})}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                Changer le titre
                </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column md="4">
                   New title :
                  </Form.Label>
                  <Col md="8">
                    <Form.Control id='form3' type="text" placeholder="movie title" name="title"   />
                  </Col>
                </Form.Group>
                <Button type="submit" onClick ={handleedit} > Update </Button>
              </Form>
          </Modal.Body>
        </Modal>



        
      );}


export default Edit;