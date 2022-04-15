import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useState } from "react";
const AlertModal=(props)=> {
    
    return (
      <>
        
        <Modal show={props.alertshow} onHide={props.alerthandleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-danger">Alert</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-warning text-center">You only add 10 video at a time... Thank you</Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={props.alerthandleClose}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default AlertModal;
 