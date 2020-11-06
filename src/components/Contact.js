import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {deleteContact} from '../actions/contactActions'

function Contact(props) {
    const [show, setShow] = useState(false);
    const handleDelete = () => {
        props.deleteContact(props.id);
    }

    return (
        <div className="card container my-3 py-3">
         <h4>
             {props.contact.name} &nbsp; &nbsp;
             <i style={{cursor:'pointer'}} onClick={()=>setShow(!show)} className="fas fa-caret-down" />
             <i style={{cursor:'pointer'}} onClick={handleDelete} className="fas fa-trash-alt text-danger float-right" />
             <Link to={`contact/edit/${props.contact.id}`}>
                <i style={{cursor:'pointer'}} className="fas fa-user-edit text-primary float-right mr-3" />
            </Link>
         </h4>
         {show && <div className="card-body">
                <h5>Email: {props.contact.email}</h5>
                <h5>Phone: {props.contact.phone}</h5>
            </div>}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.id
    return{
        contact: state.contacts.find(contact => contact.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deleteContact: (id) => {dispatch(deleteContact(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
