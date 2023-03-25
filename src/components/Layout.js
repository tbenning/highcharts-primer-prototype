import { useRouter } from 'next/router'
import Link from 'next/link'
import { SplitPageLayout, NavList, Box, Heading } from '@primer/react'
import { MarkGithubIcon } from '@primer/octicons-react'
import Navigation from './Navigation'

export default function Layout({ children }) {
    return (
        <Box minHeight="100vh">
            <SplitPageLayout>
                <SplitPageLayout.Header>
                    <Box
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                        gridGap={3}
                    >
                        <MarkGithubIcon size={32} />
                        <Heading
                            as="h1"
                            sx={{ fontWeight: 'normal', fontSize: 3 }}
                        >
                            Highcharts a11y Prototype
                        </Heading>
                    </Box>
                </SplitPageLayout.Header>
                <SplitPageLayout.Pane
                    position="start"
                    sx={{ backgroundColor: 'canvas.default' }}
                >
                    <Navigation />
                </SplitPageLayout.Pane>
                <SplitPageLayout.Content>{children}</SplitPageLayout.Content>
                <SplitPageLayout.Footer></SplitPageLayout.Footer>
            </SplitPageLayout>
        </Box>
    )
}
