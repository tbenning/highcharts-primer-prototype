import Head from 'next/head'
import Layout from '@/components/Layout'
import ChartWrapper from '@/components/ChartWrapper'
import StackedArea from '@/components/charts/StackedArea'

export default function Home() {
    return (
        <>
            <Head>
                <title>Stacked Area Charts</title>
            </Head>
            <Layout>
                <ChartWrapper
                    title="Types of issues occurring"
                    description="Number of issues by year"
                >
                    <StackedArea />
                </ChartWrapper>
            </Layout>
        </>
    )
}
