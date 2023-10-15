import { HomeLink } from "./Navigation.styled";


export const Navigation = () => {
    const isLogin = false;
    return (
      <nav>
      <HomeLink to="/">
          Home
      </HomeLink>
            {isLogin && (<HomeLink to="contact">Contact</HomeLink>)}
        </nav>
  )
}
