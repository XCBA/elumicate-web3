import {createStyles} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    style : {
        width : 36,
        borderTopWidth: '3px',
        borderLeftWidth: '3px',
        borderRightWidth: '0px',
        borderBottomWidth: '0px',
        borderStyle: 'solid',
        borderColor: 'rgb(100, 117, 124)',
        backgroundColor: 'rgb(42, 187, 254)',
        color : 'white',
        fontWeight : 'bold',
        borderTopLeftRadius : 15,
        borderBottomLeftRadius : 15,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',

        marginTop : 20,
        marginBottom : 20
    },
    textstyle : {
        writingMode: 'vertical-lr',
        transform: 'rotate(180deg)',
        paddingTop : 10,
        paddingBottom : 10
    }
}));

export default function({caption}) {
    const { classes } = useStyles();

    return (
        <div className={classes.style}>
            <span className={classes.textstyle}>{caption}</span>
        </div>
    );
};