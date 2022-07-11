import React from 'react';
import { observer } from 'mobx-react-lite';
import { Burger, Container, createStyles, Group, Header, Text, useMantineTheme } from '@mantine/core';
import DesktopNav from './DesktopNav';
import { WalletInfo } from '../WalletInfo';
import { useStore } from '@/store/index';


const useStyles = createStyles((theme) => ({
  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },

  ContainerStyle : {
    maxWidth : 'none'
  }
}));



export const index = observer(() => {
  const { classes } = useStyles();
  const { user } = useStore();
  const theme = useMantineTheme();

  return (
    <Header height={56}>
      <Container className={classes.ContainerStyle}>
        <div className={classes.inner}>
          {theme.colorScheme === 'dark' && <img src="/images/logo/White-Square-E-75px.png" height={36}/>}
          {theme.colorScheme !== 'dark' && <img src="/images/logo/Black-Square-E-75px.png" height={36}/>}          
          {/* <Text>Elumicate</Text> */}
          <Group spacing={5} className={classes.links}>
            <DesktopNav />
          </Group>
          <Burger opened={user.layout.sidebarOpen.value} onClick={() => user.layout.sidebarOpen.setValue(!user.layout.sidebarOpen.value)} className={classes.burger} size="sm" />
        </div>
      </Container>
      <WalletInfo />
    </Header>
  );
})

export default index;
