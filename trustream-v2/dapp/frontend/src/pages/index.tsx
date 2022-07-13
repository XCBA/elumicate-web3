import React from 'react';
import { createStyles, Container, Text, Button, Grid, Group, Skeleton, useMantineTheme } from '@mantine/core';
import MainLayout from '@/components/Layout';
import { useTranslation } from 'react-i18next';
import { useStore } from '../store';
import { LanguageSwitch } from '@/components/LanguageSwitch';
import STAKEDCLAIMED from "../components/STAKEDCLAIMED";
import BUYELUM from "../components/BUYELUM";
import INFOCONTAINER from '@/components/INFOCONTAINER';
import MyAccount from '@/components/MyAccount';
import LogBook from '@/components/LogBook';

const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
  },

  inner: {
    position: 'relative',
    // paddingTop: 200,
    // paddingBottom: 120,

    // [BREAKPOINT]: {
    //   paddingBottom: 80,
    //   paddingTop: 80
    // }
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2
    }
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18
    }
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl
    }
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1
    }
  },

  githubControl: {
    borderWidth: 2,
    borderColor: theme.colorScheme === 'dark' ? 'transparent' : theme.colors.dark[9],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'transparent',

    '&:hover': {
      backgroundColor: `${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]} !important`
    }
  },

  paddingLeft : {
    paddingLeft : '36px'
  }
}));

const child = <Skeleton height={140} radius="md" animate={false} />;

export default function HeroTitle() {
  const { lang } = useStore();
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const { t } = useTranslation();

  return (
    <MainLayout>
      <div className={classes.wrapper}>
        <Container className={classes.inner}>
          {/* <h1 className={classes.title}>
            {t('a')}
            {' '}
            <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
              {t('next-generation')}
            </Text>
            {' '}
            {t('dapp-dev-framework')}
          </h1>

          <Text className={classes.description} color="dimmed">
            {t('tip')}
          </Text> */}
          <Grid>
            <Grid.Col xs={12}>
              <Grid className={classes.paddingLeft}>
                <Grid.Col xs={7}>
                  <Grid>
                    <Grid.Col xs={6}>{<STAKEDCLAIMED label="STACKED"/>}</Grid.Col>
                    <Grid.Col xs={6}>{<STAKEDCLAIMED label="CLAIMED"/>}</Grid.Col>
                  </Grid>
                </Grid.Col>
                <Grid.Col xs={5}>
                  {<BUYELUM label="BUY ELUM"/>}
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col xs={12}>
              <INFOCONTAINER caption="My Account">
                <MyAccount/>
              </INFOCONTAINER>
            </Grid.Col>
            <Grid.Col xs={12}>
              <INFOCONTAINER caption="Logbook">
                <LogBook/>
              </INFOCONTAINER>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
    </MainLayout>
  );
}
