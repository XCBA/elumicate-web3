import Layout from "@/components/EntireLayout";
import { createStyles, Container, Text, Button, Grid, Group, Skeleton, useMantineTheme, Anchor } from '@mantine/core';
import STAKEDCLAIMED from "@/components/STAKEDCLAIMED";
import BUYELUM from "@/components/BUYELUM";
import INFOCONTAINER from '@/components/INFOCONTAINER';
import MyAccount from '@/components/MyAccount';
import LogBook from '@/components/LogBook';

export default function () {
  return (
    <Layout>
      <Grid>
        <Grid.Col xs={12}>
          <Grid style={{paddingLeft : '36px'}}>
            <Grid.Col xs={7}>
              <Grid>
                <Grid.Col xs={6}>{<STAKEDCLAIMED label="STACKED" />}</Grid.Col>
                <Grid.Col xs={6}>{<STAKEDCLAIMED label="CLAIMED" />}</Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col xs={5}>
              {<BUYELUM label="BUY ELUM" />}
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col xs={12}>
          <INFOCONTAINER caption="My Account">
            <MyAccount />
          </INFOCONTAINER>
        </Grid.Col>
        <Grid.Col xs={12}>
          <INFOCONTAINER caption="Logbook">
            <LogBook />
          </INFOCONTAINER>
        </Grid.Col>
      </Grid>
    </Layout>
  );
}