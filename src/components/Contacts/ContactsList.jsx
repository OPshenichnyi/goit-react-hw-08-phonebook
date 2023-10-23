import { ListItemPhone, CssList } from "./ContactsList.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteContactAPI, getContactApi } from "components/OperationContacts/operation";
import { useEffect } from "react";
import { selectIsLogined } from "components/authorization/selectorAuth";
import { selectVisibleContacts } from "components/OperationContacts/selectors";




export const ContactsList = () => {
  const dispatch = useDispatch()
  const listContact = useSelector(selectVisibleContacts)
  const isLoading = useSelector(selectIsLogined)
  
  useEffect(() => {
    if (!isLoading) {
      return
    }
    dispatch(getContactApi())
  }, [dispatch, isLoading])


  return (
    <CssList>
      {listContact.map(({ id, name, phone }) => (
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

