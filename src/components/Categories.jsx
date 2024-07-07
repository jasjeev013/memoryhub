import React, { useEffect, useState } from 'react';
import { Row, Col, InputGroup, FormControl, Button, ListGroup, Badge } from 'react-bootstrap';
import LinkItem from './LinkItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags, selectTag, fetchItemsByTag, fetchTagsByTerm } from '../redux/slices/categorySlice';
import { deleteItemById } from '../redux/slices/searchSlice';
import Spinner from './Spinner'

const Categories = () => {
    const dispatch = useDispatch();
    const {categories,statusTags,statusLinks,items,click} = useSelector(state => state.category);


    const [query, setQuery] = useState('');

    useEffect(() => {

        if (query === '') {

            dispatch(fetchTags());
        }

    }, [query, dispatch]);

    const clickTag = async (tag) => {
        if (tag === click) {
            await dispatch(selectTag(''));

        } else {
            await dispatch(selectTag(tag));
            await dispatch(fetchItemsByTag(tag));

        }
    }

    const handleOnChange = async (query) => {
        setQuery(query);
        if (query === '') {
            await dispatch(fetchTags());
        } else {

            await dispatch(fetchTagsByTerm(query));
        }
    }

    const handleDelete = async (id) => {
        await dispatch(deleteItemById(id));
        await dispatch(fetchItemsByTag(click));
    };

    return (
        <div className='my-4'>
            <Row className="mt-4 mx-3">
                {/* Left Column */}
                <Col md={4} className='my-4'>
                    <InputGroup className="mb-3">
                        <FormControl placeholder="Search .." value={query} onChange={(e) => handleOnChange(e.target.value)} />
                        <Button variant="outline-secondary">Search</Button>
                    </InputGroup>
                    <div className="mt-5 d-flex flex-wrap ">
                        {statusTags==='loading' && <Spinner/>}
                        {statusTags!=='loading' && categories.length===0 && <h4 className='text-center'>No Categories To Show</h4>}
                        {statusTags!=='loading' && categories.length!==0 && categories.map((tag, index) => (
                            <Badge key={index} pill bg="danger" onClick={() => clickTag(tag)} className='me-2 mb-2' style={{
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
                                {statusLinks==='loading' && <Spinner/>}
                                {statusLinks!=='loading' && click === '' && items.length===0 && <h4 className='text-center'>Click Tag to Get items</h4>}
                                {statusLinks!=='loading' && click !== '' && items.length===0 && <h4 className='text-center'>No Items To Show</h4>}
                                {statusLinks!=='loading' && click !== '' && items.length!==0 && items.map(item => (
                                    <LinkItem key={item._id} id={item._id} description={item.description} link={item.link} tags={item.tags} handleDelete={handleDelete} navigateTo="/categories" />
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
