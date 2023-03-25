import React, { useEffect } from 'react'
import {
    ActionMenu,
    ActionList,
    Box,
    Heading,
    IconButton,
    Text,
    RelativeTime,
    Label,
    LabelGroup,
} from '@primer/react'
import { Dialog, DataTable, Table } from '@primer/react/drafts'
import { KebabHorizontalIcon } from '@primer/octicons-react'

export default function ChartWrapper({
    children,
    headingComponent = 'h3',
    title,
    description,
    height = '400px',
}) {
    const [dialogOpen, setDialogOpen] = React.useState(false)
    return (
        <Box
            p={3}
            pb={4}
            backgroundColor="canvas.default"
            border="1px solid"
            borderColor="border.default"
            borderRadius="6px"
            width="100%"
        >
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="start"
                mb={3}
            >
                <Box>
                    <Heading
                        sx={{ fontSize: 2, fontWeight: 600 }}
                        as={headingComponent}
                    >
                        {title}
                    </Heading>
                    {description && (
                        <Text sx={{ color: 'fg.muted', fontSize: 1 }}>
                            {description}
                        </Text>
                    )}
                </Box>
                <ActionMenu>
                    <ActionMenu.Anchor>
                        <IconButton
                            aria-label="Search"
                            icon={KebabHorizontalIcon}
                            variant="invisible"
                            size="small"
                        />
                    </ActionMenu.Anchor>
                    <ActionMenu.Overlay width="small">
                        <ActionList>
                            <ActionList.Item
                                onSelect={() => setDialogOpen(true)}
                            >
                                View as table
                            </ActionList.Item>
                            <ActionList.Item
                                onSelect={() =>
                                    alert('Trigger fullscreen mode')
                                }
                            >
                                View in fullscreen
                            </ActionList.Item>
                            <ActionList.Item
                                onSelect={() =>
                                    alert('CSV download initiatied')
                                }
                            >
                                Download CSV
                            </ActionList.Item>
                        </ActionList>
                    </ActionMenu.Overlay>
                </ActionMenu>
                {dialogOpen && (
                    <Dialog
                        title={title}
                        isOpen={dialogOpen}
                        onClose={() => setDialogOpen(false)}
                        aria-labelledby="header-id"
                        width="xlarge"
                        footerButtons={[
                            {
                                content: 'Download CSV',
                                onClick: () => alert('CSV download initiated'),
                            },
                        ]}
                    >
                        <RenderDataTable />
                    </Dialog>
                )}
            </Box>
            {children}
        </Box>
    )
}

function RenderDataTable() {
    const now = Date.now()
    const Second = 1000
    const Minute = 60 * Second
    const Hour = 60 * Minute
    const Day = 24 * Hour
    const Week = 7 * Day
    const Month = 4 * Week
    function uppercase(input) {
        return input[0].toUpperCase() + input.slice(1)
    }
    const data = [
        {
            id: 1,
            name: 'Issues',
            issues: 1,
            updatedAt: 2012,
        },
        {
            id: 2,
            name: 'Issues',
            issues: 2,
            updatedAt: 2013,
        },
        {
            id: 3,
            name: 'Issues',
            issues: 1,
            updatedAt: 2014,
        },
        {
            id: 4,
            name: 'Issues',
            issues: 4,
            updatedAt: 2015,
        },
        {
            id: 5,
            name: 'Issues',
            issues: 3,
            updatedAt: 2016,
        },
        {
            id: 6,
            name: 'Issues',
            issues: 6,
            updatedAt: 2017,
        },
        {
            id: 7,
            name: 'Issues',
            issues: 5,
            updatedAt: 2018,
        },
        {
            id: 8,
            name: 'Issues',
            issues: 3,
            updatedAt: 2019,
        },
        {
            id: 9,
            name: 'Issues',
            issues: 2,
            updatedAt: 2020,
        },
        {
            id: 10,
            name: 'Issues',
            issues: 12,
            updatedAt: 2021,
        },
    ]
    return (
        <Table.Container>
            <DataTable
                aria-labelledby="repositories"
                aria-describedby="repositories-subtitle"
                data={data}
                columns={[
                    {
                        header: 'Data Series',
                        field: 'name',
                        rowHeader: true,
                    },
                    {
                        header: 'Number of Issues (y)',
                        field: 'issues',
                    },
                    {
                        header: 'Year (x)',
                        field: 'updatedAt',
                    },
                ]}
            />
        </Table.Container>
    )
}
