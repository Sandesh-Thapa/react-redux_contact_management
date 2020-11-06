export const deleteContact = (id) => {
    return{
        type: 'DELETE_CONTACT',
        payload: id
    }
}
