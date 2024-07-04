import React from 'react';
import '../App.css'
import {Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaLink, FaPaperPlane } from 'react-icons/fa';

const AddLink = () => {
  return (

    <Row className="mt-5 mx-5">
      <Col md={6}>
        <h1 className="text-danger ">Add New Link</h1>
        <Form className='my-5 mx-3'>
          <Form.Group controlId="formDescription" className="mb-4">
            <Form.Control type="text" placeholder="Give a Description..." />
          </Form.Group>
          <Form.Group controlId="formLink" className="mb-4">
            <InputGroup>
              <InputGroup.Text><FaLink /></InputGroup.Text>
              <Form.Control type="text" placeholder="Add Link" />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="" className="mb-4">
            <Form.Control
              type="text" placeholder="Add Categories" style={{
              paddingBottom:'100px'
              }}/>
          </Form.Group>
          <Button variant="primary" type="submit" className='my-2'>
            Submit Now <FaPaperPlane />
          </Button>
        </Form>
      </Col>
      <Col md={6}>
        <img src="https://design4users.com/wp-content/uploads/2020/02/3d-illustration-workspace.jpg" alt="Illustration" className="img-fluid rounded" />
      </Col>
    </Row>

  );
};

export default AddLink;
