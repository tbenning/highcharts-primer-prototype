import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { SplitPageLayout, NavList, Box, Heading } from '@primer/react'
import { MarkGithubIcon } from '@primer/octicons-react'
import dynamic from 'next/dynamic'

function NavItem({ href, children }) {
    const router = useRouter()
    const isCurrent =
        typeof href === 'string'
            ? router.asPath === href
            : router.pathname === href.pathname
    // const [current, setCurrent] = useState(null)

    // useEffect(() => {
    //     setCurrent(isCurrent)
    // })

    //https://github.com/vercel/next.js/discussions/35773#discussioncomment-3985369
    return (
        <Link href={href} passHref legacyBehavior>
            <NavList.Item aria-current={isCurrent ? 'page' : false}>
                {children}
            </NavList.Item>
        </Link>
    )
}

export default function Layout({ children }) {
    return (
        <Box minHeight="100vh">
            <SplitPageLayout>
                <SplitPageLayout.Header>
                    <Box
                        py={2}
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                        gridGap={3}
                    >
                        <MarkGithubIcon size={32} />
                        <Heading as="h1" sx={{ fontWeight: 'normal' }}>
                            HighCharts Prototype
                        </Heading>
                    </Box>
                </SplitPageLayout.Header>
                <SplitPageLayout.Pane
                    position="start"
                    sx={{ backgroundColor: 'canvas.default' }}
                >
                    <NavList>
                        <NavItem href="/" aria-current="page">
                            Line Charts
                        </NavItem>
                        <NavItem href="/bar-charts">Bar Charts</NavItem>
                        <NavItem href="/stacked-area-charts">
                            Stacked Area Charts
                        </NavItem>
                        <NavItem href="/donut-charts">Donut Charts</NavItem>
                    </NavList>
                </SplitPageLayout.Pane>
                <SplitPageLayout.Content>{children}</SplitPageLayout.Content>
                <SplitPageLayout.Footer></SplitPageLayout.Footer>
            </SplitPageLayout>
        </Box>
    )
}
