import React from 'react';
import { createStyles, Table, Progress, Anchor, Text, Group, ScrollArea } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  progressBar: {
    '&:not(:first-of-type)': {
      borderLeft: `3px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
    },
  },
}));

interface TableReviewsProps {
  data: {
    Pool : number,
    Amount : number,
    AvailableRewards : number,
    TimeRemaining : number,
    TotalTime : number
  }[];
}

export default function TableReviews({ data }: TableReviewsProps) {
  const { classes, theme } = useStyles();

  const rows = data.map((row, index) => {
    const timeTotal = row.TotalTime;
    const timePast = row.TotalTime - row.TimeRemaining;
    const timeLeft = timeTotal - timePast;

    const timePastP = timePast * 100 / timeTotal;
    const timeLeftP = 100 - timePastP;

    return (
      <tr key={index}>
        <td>
          <Anchor<'a'> size="sm" onClick={(event) => event.preventDefault()}>
            {row.Pool}
          </Anchor>
        </td>
        <td>{row.Amount}</td>
        <td>{Intl.NumberFormat().format(row.AvailableRewards)}</td>
        <td>
          <Group position="apart">
            <Text size="xs" color="teal" weight={700}>
              {timePast.toFixed(0)}s passed
            </Text>
            <Text size="xs" color="red" weight={700}>
              {timeLeft.toFixed(0)}s left
            </Text>
          </Group>
          <Progress
            classNames={{ bar: classes.progressBar }}
            sections={[
              {
                value: timePastP,
                color: theme.colorScheme === 'dark' ? theme.colors.teal[9] : theme.colors.teal[6],
              },
              {
                value: timeLeftP,
                color: theme.colorScheme === 'dark' ? theme.colors.red[9] : theme.colors.red[6],
              },
            ]}
          />
        </td>
      </tr>
    );
  });

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
        <thead>
          <tr>
            <th>Pool</th>
            <th>Amount</th>
            <th>Available Rewards</th>
            <th>Time Remaining</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}