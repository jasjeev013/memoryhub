import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';
import LinkItem from './LinkItem';

const Home = () => {
  const links = [
    "Node.js Explanation and Implementation with Working Explained",
    "React.Js Explanation with Full Proof Projects",
    "Get All Free Icons with JS",
    "Harkirat Project with need to be node (Important)",
    "Get all Flex Boxes for free with premium student Id",
    "Next.Js Doing Course (With Prisma and Vanilla.Js)",
    "All Hackathons Help With All the Materials To Save",
  ];

  return (
    <>
      {/* Search and New Link Buttons */}
      <Row className="mt-5 justify-content-center align-items-center">
        <Col md={8} lg={6}>
          <InputGroup className="shadowed-input">
            <FormControl placeholder="Search for something..." className="custom-search-bar" />
            <Button variant="outline-secondary" className="custom-search-button">
              <i className="fa-solid fa-magnifying-glass" />
            </Button>
          </InputGroup>
        </Col>
        <Col xs="auto" className="mt-3 mt-md-0">
          <Button variant="primary" className="custom-new-link-button">
            <Link to="/addLink" style={{ color: 'white', textDecoration: 'none' }}>
              <i className="fa-solid fa-plus"/> New Link
            </Link>
          </Button>
        </Col>
      </Row>

      {/* List of Links */}
      <Row className="mt-4">
        <Col>
          <ListGroup className="my-4">
            {links.map((link, index) => (
              <LinkItem key={index} title={link} />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default Home;
