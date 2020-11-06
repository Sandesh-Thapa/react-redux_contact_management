import React, { Component } from 'react'
import {connect} from 'react-redux'

class EditContact extends Component {
    state = {
        id:'',
        name: '',
        email: '',
        phone: ''
    }

    componentDidMount() {
        this.setState({
            id: this.props.contact.id,
            name: this.props.contact.name,
            email: this.props.contact.email,
            phone: this.props.contact.phone,
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.name === '' || this.state.email === '' || this.state.phone === ''){
            alert('Fill all the fields !!!')
        }else{
            let newContact = {
                id:this.props.contact.id,
                name:this.state.name,
                email:this.state.email,
                phone:this.state.phone,
            }
            this.props.editContact(newContact)
            this.props.history.push('/');
        }

    }

    render() {
        const {name,email,phone} = this.state
        return (
            <div className="container card mt-3 bg-light">
                <div className="card-header">Edit Contact</div>
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">New Name</label>
                        <input type="text" className="form-control" id="name" name="name" onChange={this.handleChange} value={name}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">New Email</label>
                        <input type="email" className="form-control" id="email" name="email" onChange={this.handleChange} value={email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">New Phone No.</label>
                        <input type="text" className="form-control" id="phone" name="phone" onChange={this.handleChange} value={phone} />
                    </div>
                    
                    <button type="submit" className="btn btn-secondary btn-block">Edit Contact</button>
                </form>
            </div>
                
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    return{
        contact: state.contacts.find(contact => contact.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        editContact : (newContact) => {dispatch({type: 'EDIT_CONTACT', payload: newContact})}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditContact)
