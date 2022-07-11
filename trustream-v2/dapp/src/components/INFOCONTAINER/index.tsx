import { createStyles } from '@mantine/core';
import INFOCAPTION from "./INFOCAPTION";

const useStyles = createStyles((theme) => ({
    parentStyle : {
        display : 'flex'
    },
    childStyle : {
        flexGrow : 1,
        width : 0,

        border: '5px',
        borderStyle: 'solid',
        borderColor: 'rgb(100, 117, 124)',
        
        borderRadius : 20
    }
}));

export default function({caption, children}) {
    const { classes } = useStyles();
    return (
        <div className={classes.parentStyle}>
            <INFOCAPTION caption={caption}/>
            <div className={classes.childStyle}>
                {children}
            </div>
        </div>
    );
}