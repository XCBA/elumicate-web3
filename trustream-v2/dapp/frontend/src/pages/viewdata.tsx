import Layout from "@/components/EntireLayout";
import { createStyles, Container, Text, Button, Grid, Table, Progress, ScrollArea, Group, Skeleton, useMantineTheme, Anchor } from '@mantine/core';
import STAKEDCLAIMED from "@/components/STAKEDCLAIMED";
import BUYELUM from "@/components/BUYELUM";
import INFOCONTAINER from '@/components/INFOCONTAINER';
import MyAccount from '@/components/MyAccount';
import LogBook from '@/components/LogBook';

const useStyles = createStyles((theme) => ({
    progressBar: {
        '&:not(:first-of-type)': {
            borderLeft: `3px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
        },
    },
}));

interface TableReviewsProps {
    data: {
        id : string;
        address: string;
        heart_rate: string;
        timestamp: number;
        created_at: string;
        updated_at: string;
        createdAt : string;
        updatedAt : string;
    }[];
}

const DeviceMockData = {
    "data": [
        {
            "id": "0xc06d73162E9BffbCfBF1DA59C511002A8F9155E5-1657656033",
            "address": "0xc06d73162E9BffbCfBF1DA59C511002A8F9155E5",
            "heart_rate": 71,
            "timestamp": 1657656033,
            "created_at": "2022-07-12T20:00:33.468Z",
            "updated_at": "2022-07-12T20:00:33.468Z",
            "createdAt": "2022-07-12T20:00:33.468Z",
            "updatedAt": "2022-07-12T20:00:33.468Z"
        },
        {
            "id": "0xc06d73162E9BffbCfBF1DA59C511002A8F9155E5-1657656035",
            "address": "0xc06d73162E9BffbCfBF1DA59C511002A8F9155E5",
            "heart_rate": 120,
            "timestamp": 1657656035,
            "created_at": "2022-07-12T20:00:35.502Z",
            "updated_at": "2022-07-12T20:00:35.502Z",
            "createdAt": "2022-07-12T20:00:35.502Z",
            "updatedAt": "2022-07-12T20:00:35.502Z"
        },
        {
            "id": "0xc06d73162E9BffbCfBF1DA59C511002A8F9155E5-1657656037",
            "address": "0xc06d73162E9BffbCfBF1DA59C511002A8F9155E5",
            "heart_rate": 71,
            "timestamp": 1657656037,
            "created_at": "2022-07-12T20:00:37.559Z",
            "updated_at": "2022-07-12T20:00:37.559Z",
            "createdAt": "2022-07-12T20:00:37.559Z",
            "updatedAt": "2022-07-12T20:00:37.559Z"
        },
        {
            "id": "0xc06d73162E9BffbCfBF1DA59C511002A8F9155E5-1657656039",
            "address": "0xc06d73162E9BffbCfBF1DA59C511002A8F9155E5",
            "heart_rate": 147,
            "timestamp": 1657656039,
            "created_at": "2022-07-12T20:00:39.702Z",
            "updated_at": "2022-07-12T20:00:39.702Z",
            "createdAt": "2022-07-12T20:00:39.702Z",
            "updatedAt": "2022-07-12T20:00:39.702Z"
        },
        {
            "id": "0xc06d73162E9BffbCfBF1DA59C511002A8F9155E5-1657656041",
            "address": "0xc06d73162E9BffbCfBF1DA59C511002A8F9155E5",
            "heart_rate": 149,
            "timestamp": 1657656041,
            "created_at": "2022-07-12T20:00:41.728Z",
            "updated_at": "2022-07-12T20:00:41.728Z",
            "createdAt": "2022-07-12T20:00:41.728Z",
            "updatedAt": "2022-07-12T20:00:41.728Z"
        },
    ]
};

export default function TableReviews() {
    const { classes, theme } = useStyles();
    const { data } = DeviceMockData;

    const rows = data.map((row) => {
        return (
            <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.address}</td>
                <td>{row.heart_rate}</td>
                <td>{row.createdAt}</td>
                {/* <td>{row.created_at}</td>
                <td>{row.updated_at}</td>
                <td>{row.createdAt} </td>
                <td>{row.updatedAt} </td> */}
            </tr>
        );
    });

    return (
        <Layout>
            <ScrollArea>
                <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Address</th>
                            <th>HeartRate</th>
                            <th>Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </ScrollArea>
        </Layout>
    );
}