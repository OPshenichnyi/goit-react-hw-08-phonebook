import { useDispatch, useSelector } from "react-redux"
import { UserMenuStyled } from "./UserMenu.styled"
import { logOut } from "components/authorization/operationAuth"
import { selectIsUser } from "components/authorization/selectorAuth"

export const UserMenu = () => {
  const dispatch = useDispatch()
  const {name} = useSelector(selectIsUser)

  return (
    <UserMenuStyled>
      <p>Welcome {name} </p>
      <button type="button" onClick={()=>{dispatch(logOut())}}>Logout</button>
    </UserMenuStyled>
  )
}
