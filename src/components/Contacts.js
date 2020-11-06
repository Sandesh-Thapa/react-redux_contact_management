import React from 'react'
import Contact from './Contact'
import {connect} from 'react-redux'

function Contacts(props){
    return(
        <React.Fragment>
            {props.contacts.map(contact => (
                <Contact key={contact.id} id={contact.id} />
            ))}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
}


export default connect(mapStateToProps)(Contacts)
