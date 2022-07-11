import WhiteLabel from '@/components/WhiteLabel';
import { Button, createStyles, Grid } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    parentStyle : {
        padding : 20,
        height : '100%',
        display : 'flex',
        flexDirection : 'column'
    },
    buttonStyle : {
        width : '100%'
    },
    padding10 : {
        paddingLeft : 10
    },
    spliter : {
        height : 10,
        flexGrow : 1
    }
}));

export default function() {
    const { classes, theme } = useStyles();

    return (
        <div className={classes.parentStyle}>
            <div className={classes.spliter}></div>
            <div>
                <span className={classes.padding10}>Elum Balance</span>
                {/* <div className={classes.spliter}></div> */}
                <Grid>
                    <Grid.Col xs={6}>
                        <WhiteLabel label="000,000,000,000" className=""/>
                    </Grid.Col>
                    <Grid.Col xs={6}>
                        <Button className={classes.buttonStyle} color={theme.primaryColor}>BUY</Button>
                    </Grid.Col>
                </Grid>
            </div>
            <div className={classes.spliter}></div>
            <div>
                <span className={classes.padding10}>Stacked Balance</span>
                {/* <div className={classes.spliter}></div> */}
                <Grid>
                    <Grid.Col xs={6}>
                        <WhiteLabel label="000,000,000,000" className=""/>
                    </Grid.Col>
                    <Grid.Col xs={6}>
                        <Button className={classes.buttonStyle} color='orange'>STAKE</Button>
                    </Grid.Col>
                </Grid>
            </div>
        </div>
    );
};