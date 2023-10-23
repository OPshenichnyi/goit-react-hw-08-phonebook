// export const selectFilter = state => state.fillter.find

export const selectFilter = state => {
    if (state.fillter.find === 0) {
        return state.fillter.find
    }
    return state.contact.contacts.filter(user => user.name.toLowerCase().includes(state.fillter.find.toLowerCase()))
}