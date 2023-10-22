import { ListItemPhone, CssList } from "./ContactsList.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteContactAPI } from "components/OperationContacts/operation";
import { selectAllContacts } from "components/OperationContacts/selectors";
import { selectFilter } from "./selectorFiltr";


const listContacts = (listPhone, filter) => {
  if (filter.length === 0) {
    return listPhone
  }
  return listPhone.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()))
}


export const ContactsList = () => {
  const dispatch = useDispatch()
  const filter = useSelector(selectFilter)
  const listPhoneBook = useSelector(selectAllContacts)
  const FiltredList = listContacts(listPhoneBook, filter)


  return (
    <CssList>
      {FiltredList.map(({ id, name, phone }) => (
        <ListItemPhone key={id}>
          <span>{name}:</span>
          <span> {phone}</span>
          <button
            type="button"
            value={id}
            onClick={(e) => dispatch(deleteContactAPI(e.target.value))}
          >Delete</button>
        </ListItemPhone>
      ))}
    </CssList>
  )
}
