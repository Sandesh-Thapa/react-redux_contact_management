import React, { Component } from 'react'
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

class AddContact extends Component {
    state = {
        id:uuidv4(),
        name:'',
        email:'',
        phone:'',
        errors: {}
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {id, name, email, phone} = this.state;
        
        // Check for Errors
        if(name === ''){
            this.setState({errors: { name: 'Name is required!'}})
            return;
        }
        if(email === ''){
            this.setState({errors: { email: 'Email is required!'}})
            return;
        }
        if(phone === ''){
            this.setState({errors: { phone: 'Phone is required!'}})
            return;
        }

        const newContact = {
            id,
            name,
            email,
            phone,
        }

        this.props.addContact(newContact)
       
        this.setState({
            name:'',
            email:'',
            phone:'',
            errors: {}
        })

        this.props.history.push('/');
    }

    render() {
        const {name,email,phone} = this.state
        return (
            <div className="container card mt-3 bg-light">
                <div className="card-header">Add Contact</div>
                <form className="card-body" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" name="name" onChange={this.handleChange} value={name} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" onChange={this.handleChange} value={email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone No.</label>
                        <input type="text" className="form-control" id="phone" name="phone" onChange={this.handleChange} value={phone} />
                    </div>
                    
                    <button type="submit" className="btn btn-secondary btn-block">Add Contact</button>
                </form>
            </div>    
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addContact : (newContact) => {dispatch({type: 'ADD_CONTACT', payload: newContact})}
    }
}

export default connect(null, mapDispatchToProps)(AddContact)
