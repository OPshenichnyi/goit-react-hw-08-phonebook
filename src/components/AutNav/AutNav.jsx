import { Link } from "./AuthNav.styled"

export const AutNav = () => {
  return (
      <div>
          <Link to="/register">
              Register
          </Link>
          <Link to="/login">
              Log In
          </Link>
      </div>
  )
}
