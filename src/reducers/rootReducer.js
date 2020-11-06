const initState = {
    contacts: [
        {id: '1', name: 'Sandesh Thapa', email: 'sandesh@gmail.com', phone: '123-123-1234'},
        {id: '2', name: 'John Doe', email: 'jd@gmail.com', phone: '222-123-1234'},
        {id: '3', name: 'Jean Doe', email: 'jean@gmail.com', phone: '333-123-1234'},
        {id: '4', name: 'Ram Sharma', email: 'ramram@gmail.com', phone: '444-123-1234'},
        {id: '5', name: 'Hari Rai', email: 'hr@gmail.com', phone: '555-123-1234'}
    ]
}




const rootReducer = (state = initState, action) => {
    switch(action.type){
        case 'DELETE_CONTACT':
            let newContacts = state.contacts.filter(contact => action.payload !== contact.id)
            return{
                ...state,
                contacts: newContacts
            }
        case 'ADD_CONTACT':
            return{
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        case 'EDIT_CONTACT':
            return{
                ...state,
                contacts: state.contacts.map(contact => {
                    if(contact.id === action.payload.id){
                        return action.payload
                    }else{
                        return contact
                    }
                })
            }
        default:
            return state;
    }
}

export default rootReducer;