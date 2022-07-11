import React, { useState } from 'react';
import { SegmentedControl, Group, Center, Box, createStyles } from '@mantine/core';
import { Sun, HeartPlus } from 'tabler-icons-react';
import StakedView from './StakedView';
import RewardView from './RewardView';

const useStyles = createStyles((theme) => ({
    selected : {
        fontWeight : 'bold'
    }
}));

export default function () {
    const [tab, setTab] = useState('Staked');

    
    const { classes } = useStyles();

    return (
        <>
            <Group position="center" my="xl">
                <SegmentedControl
                    value={'colorScheme'}
                    onChange={setTab}
                    data={[
                        {
                            value: 'Staked',
                            label: (
                                <Center>
                                    <HeartPlus size={16} />
                                    <Box ml={10} className={tab == 'Staked' ? classes.selected : ''}>Staked</Box>
                                </Center>
                            ),
                        },
                        {
                            value: 'Reward',
                            label: (
                                <Center>
                                    <Sun size={16} />
                                    <Box ml={10} className={tab == 'Reward' ? classes.selected : ''}>Reward</Box>
                                </Center>
                            ),
                        },
                    ]}
                />
            </Group>
            {tab == 'Staked' && <StakedView data={StackMockData.data} />}
            {tab == 'Reward' && <RewardView data={RewardMockData.data}/>}
        </>
    );
}

const RewardMockData = {
    "data": [
        {
            "title": "Foundation",
            "author": "Isaac Asimov",
            "year": 1951,
            "reviews": {
                "positive": 2223,
                "negative": 259
            }
        },
        {
            "title": "Frankenstein",
            "author": "Mary Shelley",
            "year": 1818,
            "reviews": {
                "positive": 5677,
                "negative": 1265
            }
        },
        {
            "title": "Solaris",
            "author": "Stanislaw Lem",
            "year": 1961,
            "reviews": {
                "positive": 3487,
                "negative": 1845
            }
        },
        {
            "title": "Dune",
            "author": "Frank Herbert",
            "year": 1965,
            "reviews": {
                "positive": 8576,
                "negative": 663
            }
        },
        {
            "title": "The Left Hand of Darkness",
            "author": "Ursula K. Le Guin",
            "year": 1969,
            "reviews": {
                "positive": 6631,
                "negative": 993
            }
        },
        {
            "title": "A Scanner Darkly",
            "author": "Philip K Dick",
            "year": 1977,
            "reviews": {
                "positive": 8124,
                "negative": 1847
            }
        }
    ]
};

// Pool : number,
// Amount : number,
// AvailableRewards : number,
// TimeRemaining : number,
// TotalTime : number

const StackMockData = {
    "data": [
        {
            "Pool": "Pool #1",
            "Amount": 400000,
            "AvailableRewards": 30000,
            "TimeRemaining" : 3600,
            "TotalTime" : 10800
        },
        {
            "Pool": "Pool #1",
            "Amount": 30000,
            "AvailableRewards": 20000,
            "TimeRemaining" : 180,
            "TotalTime" : 3600
        },
        {
            "Pool": "Pool #2",
            "Amount": 10000,
            "AvailableRewards": 15000,
            "TimeRemaining" : 100,
            "TotalTime" : 200
        },
        {
            "Pool": "Pool #3",
            "Amount": 12000,
            "AvailableRewards": 4000,
            "TimeRemaining" : 500,
            "TotalTime" : 3000
        },
        {
            "Pool": "Pool #4",
            "Amount": 790,
            "AvailableRewards": 90,
            "TimeRemaining" : 100,
            "TotalTime" : 200
        }
    ]
};