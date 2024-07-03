import React from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button, ListGroup, Badge } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const tags = ["MERN", "Next.js", "MongoDB", "Vue", "Prisma", "ThunderClient", "React.js"];
const links = [
  "Node.js Explanation and....",
  "React.Js Explanation with..",
  "Get All Free Icons with JS",
  "Harkirat Project with need to..",
  "Get all Flex Boxes for free with..."
];

const LinkItem = ({ title }) => (
  <ListGroup.Item className="d-flex justify-content-between align-items-center">
    <div>{title}</div>
    <div>
      <a href="#!">Click Here</a>
      <FaEdit className="mx-2" style={{ cursor: 'pointer' }} />
      <FaTrashAlt style={{ cursor: 'pointer' }} />
    </div>
  </ListGroup.Item>
);

const Tags = () => {
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
          <InputGroup>
            <FormControl placeholder="Search .." />
            <Button variant="outline-secondary">Search</Button>
          </InputGroup>
          <div className="mt-3">
            {tags.map((tag, index) => (
              <Badge key={index} pill bg="danger" className="me-2 mb-2">
                {tag}
              </Badge>
            ))}
          </div>
        </Col>
        <Col md={6} className="d-flex justify-content-end">
          <Button variant="primary">+ New Link</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <ListGroup>
            {links.map((link, index) => (
              <LinkItem key={index} title={link} />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Tags;
