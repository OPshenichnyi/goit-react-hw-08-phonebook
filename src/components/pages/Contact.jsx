import { ContactsForm } from "components/Contacts/ContactsForm"
import { ContactsList } from "components/Contacts/ContactsList"
import { Filter } from "components/Contacts/Filter"
import { selectLoading } from "components/OperationContacts/selectors"
import { useSelector } from "react-redux"
import { SectionContacts, ContainerContacts, ContainerList} from "./Contact.styled"


export const Contact = () => {

  const isLoading = useSelector(selectLoading)

  
  
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
