import { useSelector } from "react-redux"
import { StyleHome } from "./Home.styled"
import { selectIsLogined } from "components/authorization/selectorAuth"

export const Home = () => {
  const isLogined = useSelector(selectIsLogined)
  return (
    
      <StyleHome>
         {!isLogined ? ( <div>
              <h2>Welcome to phone book</h2>
              <p>Please login or register</p>
      </div>): 
        (<div>
          <h2>Welcome to phone book</h2>
        </div>
      )}
    </StyleHome>
  )
}
