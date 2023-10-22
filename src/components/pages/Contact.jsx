import { ContactsForm } from "components/Contacts/ContactsForm"
import { ContactsList } from "components/Contacts/ContactsList"
import { Filter } from "components/Contacts/Filter"
import { getContactApi } from "components/OperationContacts/operation"
import { selectLoading } from "components/OperationContacts/selectors"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SectionContacts, ContainerContacts, ContainerList} from "./Contact.styled"


export const Contact = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectLoading)

  useEffect(() => {
    dispatch(getContactApi())
  }, [dispatch])
  return (
      <ContainerContacts>
    <SectionContacts>
        <ContactsForm />
       
      </SectionContacts>
      <ContainerList>
        <Filter />
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactsList />
      </ContainerList>
      </ContainerContacts>
  )
}
