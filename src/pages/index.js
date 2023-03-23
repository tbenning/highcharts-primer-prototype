import Head from 'next/head'
import Playground from '@/components/Playground'

export default function Home() {
    /// 👋 Welcome to your first page!
    // ---------------------------------
    // Delete everything in here or play with the existing Mona playground code to get familiar with Primer React.
    // Documentation: https://primer.style/react
    // Documentation colors: https://primer.style/primitives/colors

    return (
        <>
            <Head>
                <title>Mona's Playground</title>
            </Head>
            <Playground />
        </>
    )
}
