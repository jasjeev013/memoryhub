import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaLink, FaPaperPlane } from 'react-icons/fa';

const AddLink = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1>WEBSITE NAME</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end">
          <nav>
            <a href="#!" className="mx-2">Home</a>
            <a href="#!" className="mx-2">Categories</a>
            <a href="#!" className="mx-2">About Us</a>
          </nav>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <h2 className="text-danger">Add New Link</h2>
          <Form>
            <Form.Group controlId="formDescription" className="mb-3">
              <Form.Control type="text" placeholder="Give a Description..." />
            </Form.Group>
            <Form.Group controlId="formLink" className="mb-3">
              <InputGroup>
                <InputGroup.Text><FaLink /></InputGroup.Text>
                <Form.Control type="text" placeholder="Add Link" />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="formCategories" className="mb-3">
              <Form.Control type="text" placeholder="Add Categories" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit Now <FaPaperPlane />
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <img src="path_to_image.png" alt="Illustration" className="img-fluid rounded" />
        </Col>
      </Row>
    </Container>
  );
};

export default AddLink;
