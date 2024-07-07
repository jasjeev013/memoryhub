import React, { useEffect } from 'react';
import { ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Toast from './Toast';
import { handleShowAddToast, handleShowUpdateToast } from '../redux/slices/toastSlice';
const LinkItem = ({ id, description, link, handleDelete, tags, navigateTo }) => {
    const toast = useSelector(state => state.toast);
    const dispatch = useDispatch();

    useEffect(() => {
        if (toast.showUpdate) {
            setTimeout(() => {
                dispatch(handleShowUpdateToast({ showUpdate: "false", message: '' }))
            }, 10000)
        }
        if(toast.showAdd){
            setTimeout(() => {
                dispatch(handleShowAddToast({ showAdd: "false", message: '' }))
            }, 10000)
        }
    
    },[dispatch,toast.showUpdate,toast.showAdd])
       
    



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
                        <Link to='/updateLink' state={{ id, description, link, tags, navigateTo }} className="fa-solid fa-pen-to-square mx-4 action-icon" style={{
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
            {toast.showUpdate==="true" && <Toast message={toast.message} />}
            {toast.showAdd==="true" && <Toast message={toast.message} />}
        </div>
    );
};

export default LinkItem;
