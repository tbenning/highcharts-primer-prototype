import { useRouter } from 'next/router'
import Link from 'next/link'
import { NavList } from '@primer/react'

function NavItem({ href, children }) {
    const router = useRouter()
    const isCurrent =
        typeof href === 'string'
            ? router.asPath === href
            : router.pathname === href.pathname

    //https://github.com/vercel/next.js/discussions/35773#discussioncomment-3985369
    return (
        <Link href={href} passHref legacyBehavior>
            <NavList.Item aria-current={isCurrent ? 'page' : false}>
                {children}
            </NavList.Item>
        </Link>
    )
}

export default function Navigation({ children }) {
    return (
        <NavList>
            <NavItem href="/" aria-current="page">
                Line Charts
            </NavItem>
            <NavItem href="/bar-charts">Bar Charts</NavItem>
            <NavItem href="/stacked-area-charts">Stacked Area Charts</NavItem>
            {/* <NavItem href="/donut-charts">Donut Charts</NavItem> */}
        </NavList>
    )
}
