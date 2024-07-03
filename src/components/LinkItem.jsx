import React from 'react'
import { ListGroup } from 'react-bootstrap';


const LinkItem = (props) => {
    const { title } = props

    const handleClick = () => {
        console.log('Clicked');
    }

    return (
        <div onClick={handleClick} className="list-item-container" >
            <ListGroup.Item className="custom-list-group-item d-flex justify-content-between align-items-center my-1">
                <div>{title}

                </div>
                <div>
                    <a href="https://www.canva.com/" className="click-here-link">Click Here</a>
                    <i className="fa-solid fa-pen-to-square mx-4 action-icon"></i>
                    <i className="fa-solid fa-trash mx-4 action-icon"></i>
                </div>
            </ListGroup.Item>
        </div>
    )
}

export default LinkItem
