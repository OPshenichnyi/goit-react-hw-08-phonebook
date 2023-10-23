import { ListItemPhone, CssList } from "./ContactsList.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteContactAPI, getContactApi } from "components/OperationContacts/operation";
import { selectFilter } from "./selectorFiltr";
import { useEffect } from "react";
import { selectIsLogined } from "components/authorization/selectorAuth";




export const ContactsList = () => {
  const dispatch = useDispatch()
  const listContact = useSelector(selectFilter)
  const isLoading = useSelector(selectIsLogined)
  
  useEffect(() => {
    if (isLoading) {
      dispatch(getContactApi())
    }
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

