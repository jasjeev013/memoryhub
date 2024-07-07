import React, { useState } from 'react';
import '../App.css'
import { Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaLink, FaPaperPlane } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { updateItemById } from '../redux/slices/searchSlice';
import { fetchItemsByTag } from '../redux/slices/categorySlice';
import { handleShowUpdateToast } from '../redux/slices/toastSlice';

const UpdateLink = () => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category);
    const navigate = useNavigate();
    const location = useLocation();
    const { id, description, link, tags, navigateTo } = location.state;
    const [item, setItem] = useState({
        id: id,
        description: description,
        link: link,
        tags: tags,
    })


    const handleChange = (e) => {
        if (e.target.name === 'tags') {
            setItem({
                ...item,
                tags: e.target.value.split(',')
            })
        } else {
            setItem({
                ...item,
                [e.target.name]: e.target.value
            })
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(updateItemById({ id: item.id, description: item.description, link: item.link, tags: item.tags }));
            await dispatch(fetchItemsByTag(category.click));
            dispatch(handleShowUpdateToast({showUpdate: "true", message: 'Link Updated Successfully'}));
            navigate(navigateTo);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Row className="mt-5 mx-5">

            <Col md={6}>
                <h1 className="text-danger ">Update Link</h1>
                <Form className='my-5 mx-3'>
                    <Form.Group controlId="formDescription" className="mb-4">
                        <Form.Control type="text" placeholder="Give a Description..." name="description" value={item.description} onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Form.Group controlId="formLink" className="mb-4">
                        <InputGroup>
                            <InputGroup.Text><FaLink /></InputGroup.Text>
                            <Form.Control type="text" placeholder="Add Link" name='link' value={item.link} onChange={(e) => handleChange(e)} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="" className="mb-4">
                        <Form.Control
                            type="text" placeholder="Add Categories" style={{
                                paddingBottom: '100px'
                            }}
                            name='tags'
                            value={item.tags}
                            onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='my-2'
                        onClick={(e) => handleSubmit(e)}>
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


export default UpdateLink;
