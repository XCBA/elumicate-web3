import { Footer, createStyles, useMantineTheme, Container, Group, ActionIcon } from '@mantine/core';
import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        // justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        // paddingTop: theme.spacing.xl,
        // paddingBottom: theme.spacing.xl,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
        maxWidth: 'none'
    },
    links: {
        [theme.fn.smallerThan('xs')]: {
            marginTop: theme.spacing.md,
        },
    },
    imgdiv: {
        flexGrow: 1
    },
    imgstyle: {
        height: '17px'
    }
}));

export default function () {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    return (
        <Footer height={50} p="sm">
            <Container className={classes.inner}>
                {/* <MantineLogo /> */}
                <div className={classes.imgdiv}>
                    {theme.colorScheme === 'dark' && <img className={classes.imgstyle} src="/images/logo/Elumicate-font-viga-white-logo-SMALL.png"></img>}
                    {theme.colorScheme !== 'dark' && <img className={classes.imgstyle} src="/images/logo/Elumicate-font-viga-black-logo-SMALL.png"></img>}
                </div>

                <Group spacing={0} className={classes.links} position="right" noWrap>
                    <ActionIcon size="lg">
                        <BrandTwitter size={18} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <BrandYoutube size={18} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <BrandInstagram size={18} />
                    </ActionIcon>
                </Group>
            </Container>
        </Footer>
    );
};