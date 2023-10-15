import { AutNav } from 'components/AutNav/AutNav';
import { Navigation } from 'components/Navigation/Navigation'
import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react'
import { Header } from './AppBar.styled';

export const AppBar = () => {
    const isLogined = false;
  return (
      <Header>
          <Navigation></Navigation>
          {isLogined ? <UserMenu/>:<AutNav />}
      </Header>
  )
}
