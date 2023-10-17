import { useSelector } from "react-redux";
import { HomeLink } from "./Navigation.styled";
import { selectIsLogined } from "components/authorization/selectorAuth";


export const Navigation = () => {
  const isLogined = useSelector(selectIsLogined)  
  
    return (
      <nav>
      <HomeLink to="/">
          Home
      </HomeLink>
            {isLogined && (<HomeLink to="contact">Contact</HomeLink>)}
        </nav>
  )
}
