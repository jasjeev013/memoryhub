import React from 'react';
import { Row, Col, InputGroup, FormControl, Button, ListGroup, Badge } from 'react-bootstrap';
import LinkItem from './LinkItem';

const tags = ["MERN", "Next.js", "MongoDB", "Vue", "Prisma", "ThunderClient", "React.js"];
const links = [
    "Node.js Explanation and....",
    "React.Js Explanation with..",
    "Get All Free Icons with JS",
    "Harkirat Project with need to..",
    "Get all Flex Boxes for free with..."
];

const Categories = () => {
    return (
        <div className='my-4'>
            <Row className="mt-4 mx-3">
                {/* Left Column */}
                <Col md={4} className='my-4'>
                    <InputGroup className="mb-3">
                        <FormControl placeholder="Search .." />
                        <Button variant="outline-secondary">Search</Button>
                    </InputGroup>
                    <div className="mt-5 d-flex flex-wrap ">
                        {tags.map((tag, index) => (
                            <Badge key={index} pill bg="danger" className="me-2 mb-2" style={{
                                cursor: 'pointer',
                                fontSize: '14px'
                            }}>
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </Col>

                {/* Divider Line */}
                <div className="d-md-none w-100 my-3" style={{
                    borderBottom: '1px solid #dee2e6'
                }}></div>

                <div className="d-none d-md-block vertical-line mx-3"></div>

                {/* Right Column */}
                <Col>
                    <Row className="mt-4">
                        <Col>
                            <ListGroup>
                                {links.map((link, index) => (
                                    <LinkItem key={index} title={link} />
                                ))}
                            </ListGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Categories;
