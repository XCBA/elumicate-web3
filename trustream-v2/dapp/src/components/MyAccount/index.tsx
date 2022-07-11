import BalanceComponent from "./Balance";
import ClaimComponent from "./Claim";
import { createStyles, Grid } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    style : {
        display : 'flex'
    }
}));

export default function() {
    const {classes} = useStyles();
    return (
        <Grid>
            <Grid.Col xs={6}><BalanceComponent /></Grid.Col>
            <Grid.Col xs={6}><ClaimComponent /></Grid.Col>
        </Grid>
    );
}