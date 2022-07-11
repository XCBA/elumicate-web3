import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    labelstyle : {
        backgroundColor: 'white',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: "rgb(181, 181, 181)",
        width : '100%',
        padding: '3px',
        fontWeight : 'bold',
        paddingLeft : '15px',
        paddingRight : '15px',
        borderRadius : '5px',
        color : 'black',
        display: 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    }
}));

export default function({label, className}) {
    const { classes } = useStyles();
    return (
        <div className={`${className} ${classes.labelstyle}`}>
            <span>{label}</span>
        </div>
    );
};