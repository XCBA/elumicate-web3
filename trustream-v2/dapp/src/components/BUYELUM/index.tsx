import React, { useState } from 'react';
import { createStyles, Button, Progress } from '@mantine/core';
import { useInterval } from '@mantine/hooks';
import { BorderStyle } from 'tabler-icons-react';
import WhiteLabel from '../WhiteLabel';
import classjoin from 'classnames';

const useStyles = createStyles((theme) => ({
    header: {
        backgroundColor: 'rgb(42, 187, 254)',
        borderTopWidth: '3px',
        borderLeftWidth: '3px',
        borderRightWidth: '3px',
        borderBottomWidth: '0px',
        borderStyle: 'solid',
        borderColor: 'rgb(100, 117, 124)',
        marginLeft: '10%',
        marginRight: '30%',
        borderTopLeftRadius: '20px 20px',
        borderTopRightRadius: '20px 20px',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        fontWeight: 'bold',
        fontSize: '1.3em'
    },
    body: {
        backgroundColor: 'rgb(219, 219, 219)',
        borderWidth: '5px',
        borderStyle: 'solid',
        borderColor: 'rgb(100, 117, 124)',
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        padding: '10px',
        borderRadius: '20px',
    },
    secondMargin: {
        marginTop: '5px'
    },
    box: {
        minWidth: '190px'
    },
    button: {
        position: 'relative',
        transition: 'background-color 150ms ease',
        backgroundColor: 'rgb(42, 187, 254)',
    },

    progress: {
        position: 'absolute',
        bottom: -1,
        right: -1,
        left: -1,
        top: -1,
        height: 'auto',
        backgroundColor: 'transparent',
        zIndex: 0,
    },

    label: {
        position: 'relative',
        zIndex: 1,
    },
}));

export default function ({ label }) {
    const { classes, theme } = useStyles();
    const [progress, setProgress] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const interval = useInterval(
        () =>
            setProgress((current) => {
                if (current < 100) {
                    return current + 1;
                }

                interval.stop();
                setLoaded(true);
                return 0;
            }),
        20
    );

    return (
        <div className={classes.box}>
            <div className={classes.header}>
                <div>{label}</div>
            </div>
            <div className={classes.body}>
                <div style={{ flexGrow: 1 }}>
                    <WhiteLabel label="Total Amount" className={""} />
                    <Button
                        fullWidth
                        className={classjoin(classes.button, classes.secondMargin)}
                        onClick={() => (loaded ? setLoaded(false) : !interval.active && interval.start())}
                        color={loaded ? 'teal' : theme.primaryColor}
                    >
                        <div className={classes.label}>
                            {progress !== 0 ? 'Waiting' : loaded ? 'Success' : 'Buy'}
                        </div>
                        {progress !== 0 && (
                            <Progress
                                value={progress}
                                className={classes.progress}
                                color={theme.fn.rgba(theme.colors[theme.primaryColor][2], 0.35)}
                                radius="sm"
                            />
                        )}
                    </Button>
                </div>
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                    <img src="images\logo\White-Square-E-75px.png" style={{ width: '70%' }}></img>
                </div>
            </div>
        </div>
    );
}