import { createStyles } from '@mantine/core';
import WhiteLabel from '../WhiteLabel';

const useStyles = createStyles((theme) => ({
    header : {
        backgroundColor : 'rgb(42, 187, 254)',
        borderTopWidth: '3px',
        borderLeftWidth : '3px',
        borderRightWidth : '3px',
        borderBottomWidth : '0px',
        borderStyle : 'solid',
        borderColor : 'rgb(100, 117, 124)',
        marginLeft: '10%',
        marginRight: '10%',
        borderTopLeftRadius : '20px 20px',
        borderTopRightRadius : '20px 20px',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        display : 'flex',
        fontWeight : 'bold',
        fontSize : '1.3em'
    },
    body : {
        backgroundColor : 'rgb(219, 219, 219)',
        borderWidth: '5px',
        borderStyle : 'solid',
        borderColor : 'rgb(100, 117, 124)',
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        display : 'flex',
        flexDirection:'column',
        padding : '10px',
        borderRadius : '20px'
    },
    secondMargin : {
        marginTop : '5px'
    }
}));

export default function({label}) {
    const { classes } = useStyles();
    return (
        <>
            <div className={classes.header}>
                <div>{label}</div>
            </div>
            <div className={classes.body}>
                <WhiteLabel label="Total Amount" className=""/>
                <WhiteLabel label="USD 32000000" className={classes.secondMargin}/>
            </div>
        </>
    );
}