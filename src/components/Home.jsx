import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, InputGroup, FormControl, Button, ListGroup, Container } from 'react-bootstrap';
import LinkItem from './LinkItem';
import { fetchItemsByDescription, deleteItemById } from '../redux/slices/searchSlice';
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.search.items);
  
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query === '') {
      dispatch(fetchItemsByDescription(query));
    }
  }, [query, dispatch])
  /*const links = [
    "Node.js Explanation and Implementation with Working Explained",
    "React.Js Explanation with Full Proof Projects",
    "Get All Free Icons with JS",
    "Harkirat Project with need to be node (Important)",
    "Get all Flex Boxes for free with premium student Id",
    "Next.Js Doing Course (With Prisma and Vanilla.Js)",
    "All Hackathons Help With All the Materials To Save",
  ];*/


  const handleOnChange = async (description) => {
    setQuery(description)
    await dispatch(fetchItemsByDescription(description));
  }

  const handleClick = () => {
    dispatch(fetchItemsByDescription(query));
  }

  const handleDelete = async (id) => {
    await dispatch(deleteItemById(id));
    await dispatch(fetchItemsByDescription(query));

  };


  return (
    <Container>
      {/* Search and New Link Buttons */}
      
      <Row className="mt-5 justify-content-center align-items-center">
        <Col md={8} lg={6}>
          <InputGroup className="shadowed-input">
            <FormControl placeholder="Search for something..." className="custom-search-bar" value={query} onChange={(e) => handleOnChange(e.target.value)} />
            <Button variant="outline-secondary" className="custom-search-button" onClick={() => handleClick()}>
              <i className="fa-solid fa-magnifying-glass" />
            </Button>
          </InputGroup>
        </Col>
        <Col xs="auto" className="mt-3 mt-md-0">
          <Button variant="primary" className="custom-new-link-button">
            <Link to="/addLink" style={{ color: 'white', textDecoration: 'none' }}>
              <i className="fa-solid fa-plus" /> New Link
            </Link>
          </Button>
        </Col>
      </Row>

      {/* List of Links */}
      

      <Row className="mt-4">
      
        <Col>
          <ListGroup className="my-4">
            {items.length === 0 && <h5 className='text-center'>Search to Load Something</h5>}
            {items.length !== 0 && items.map(item => (
              <LinkItem key={item._id} id={item._id} description={item.description} link={item.link} tags={item.tags} handleDelete={handleDelete} navigateTo="/" />
            ))}
      
          </ListGroup>
        </Col>
      </Row>
      
    </Container>
  );
};

export default Home;
