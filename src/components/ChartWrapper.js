import React from 'react'
import {
    ActionMenu,
    ActionList,
    Box,
    Heading,
    IconButton,
    Text,
} from '@primer/react'
import { Dialog } from '@primer/react/drafts'
import { KebabHorizontalIcon } from '@primer/octicons-react'

export default function ChartWrapper({
    children,
    headingComponent = 'h3',
    title,
    description,
    height = '400px',
}) {
    const [dialogOpen, setDialogOpen] = React.useState(false)
    const returnFocusRef = React.useRef(null)
    return (
        <Box
            p={3}
            pb={4}
            backgroundColor="canvas.default"
            border="1px solid"
            borderColor="border.default"
            borderRadius="6px"
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
                            ref={returnFocusRef}
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
                    >
                        <Text fontFamily="sans-serif">Some content</Text>
                    </Dialog>
                )}
            </Box>
            {children}
        </Box>
    )
}
