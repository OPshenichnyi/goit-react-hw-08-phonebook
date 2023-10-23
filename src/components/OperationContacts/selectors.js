import { createSelector } from "@reduxjs/toolkit";


export const selectLoading = state => state.contact.isLoading;

export const selectAllContacts = state => state.contact.contacts;

export const selectFilter = state => state.fillter.find

export const selectVisibleContacts = createSelector(
    [selectAllContacts, selectFilter],
    (contacts, filter) => {
        return contacts.filter(contact => contact.name.toLowerCase()
            .includes(filter.toLowerCase()))
    }
)