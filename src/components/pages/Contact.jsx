import { ContactsForm } from "components/Contacts/ContactsForm"
import { ContactsList } from "components/Contacts/ContactsList"
import { Filter } from "components/Contacts/Filter"
import { selectLoading } from "components/OperationContacts/selectors"
import { useDispatch, useSelector } from "react-redux"
import { SectionContacts, ContainerContacts, ContainerList} from "./Contact.styled"
import { useEffect } from "react"
import { getContactApi } from "components/OperationContacts/operation"
import { selectIsLogined } from "components/authorization/selectorAuth"


export const Contact = () => {
  const dispatch = useDispatch()
  const isLogined = useSelector(selectIsLogined)
  const isLoading = useSelector(selectLoading)


  useEffect(() => {
    if (!isLogined) {
      return
    }
    dispatch(getContactApi())
  }, [dispatch, isLogined])
  
  
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
