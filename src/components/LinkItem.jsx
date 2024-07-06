import React from 'react';
import { ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LinkItem = ({ id, description, link, handleDelete, tags,navigateTo }) => {





    return (
        <div className="list-item-container" >
            <ListGroup.Item className="custom-list-group-item d-flex justify-content-between align-items-center my-1">

                <div className="title-container">
                    <div className="truncate">{description}</div>
                </div>
                <div>
                    <a href={link} target="_blank" rel="noreferrer" className="click-here-link">Click Here</a>
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="edit-tooltip">Edit</Tooltip>}
                    >
                        <Link to='/updateLink' state={{ id, description, link, tags,navigateTo }} className="fa-solid fa-pen-to-square mx-4 action-icon" style={{
                            color: 'black',
                            textDecoration: 'none'
                        }} ></Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="delete-tooltip">Delete</Tooltip>}
                    >
                        <i className="fa-solid fa-trash mx-4 action-icon" onClick={() => handleDelete(id)}></i>
                    </OverlayTrigger>
                </div>
            </ListGroup.Item>
        </div>
    );
};

export default LinkItem;
