import React from 'react';
import { ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';

const LinkItem = ({ title }) => {
    const handleClick = () => {
        console.log('Clicked');
    };

    const handleEdit = () => {
        console.log('Edit clicked');
    };

    const handleDelete = () => {
        console.log('Delete clicked');
    };

    return (
        <div className="list-item-container" onClick={handleClick}>
            <ListGroup.Item className="custom-list-group-item d-flex justify-content-between align-items-center my-1">

                <div className="title-container">
                    <div className="truncate">{title}</div>
                </div>
                <div>
                    <a href="https://www.canva.com/" target="_blank" rel="noreferrer" className="click-here-link">Click Here</a>
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="edit-tooltip">Edit</Tooltip>}
                    >
                        <i className="fa-solid fa-pen-to-square mx-4 action-icon" onClick={handleEdit}></i>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="delete-tooltip">Delete</Tooltip>}
                    >
                        <i className="fa-solid fa-trash mx-4 action-icon" onClick={handleDelete}></i>
                    </OverlayTrigger>
                </div>
            </ListGroup.Item>
        </div>
    );
};

export default LinkItem;
