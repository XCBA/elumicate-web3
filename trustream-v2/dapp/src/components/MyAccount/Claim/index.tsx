import StatusElum from '@/components/StatusElum';
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
    },
    imgStyle : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        width : '100%',
        height : '100%'
    }
}));

export default function() {
    const { classes, theme } = useStyles();

    return (
        <div className={classes.parentStyle}>
            <div>
                <Grid>
                    <Grid.Col xs={3}>
                        <div className={classes.imgStyle}>
                            {theme.colorScheme == 'dark' && <img src="images\logo\White-Square-E-75px.png" style={{ width: '70%' }}></img>}
                            {theme.colorScheme == 'light' && <img src="images\logo\Black-Square-E-75px.png" style={{ width: '70%' }}></img>}
                        </div>
                    </Grid.Col>
                    <Grid.Col xs={9}>
                        <StatusElum/>
                    </Grid.Col>
                </Grid>

            </div>
            <div className={classes.spliter}></div>
            <div>
                <span className={classes.padding10}>Unclaimed Balance</span>
                <Grid>
                    <Grid.Col xs={6}>
                        <WhiteLabel label="000,000,000,000" className=""/>
                    </Grid.Col>
                    <Grid.Col xs={6}>
                        <Button className={classes.buttonStyle} color='yellow'>CLAIM</Button>
                    </Grid.Col>
                </Grid>
            </div>
        </div>
    );
};