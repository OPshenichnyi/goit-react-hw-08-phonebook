import { AutNav } from 'components/AutNav/AutNav';
import { Navigation } from 'components/Navigation/Navigation'
import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react'
import { Header } from './AppBar.styled';
import { selectIsLogined } from 'components/authorization/selectorAuth';
import { useSelector } from 'react-redux';


export const AppBar = () => {
    
    const isLogined = useSelector(selectIsLogined)
    
  return (
      <Header>
          <Navigation></Navigation>
          {isLogined ? <UserMenu/>:<AutNav />}
      </Header>
  )
}
