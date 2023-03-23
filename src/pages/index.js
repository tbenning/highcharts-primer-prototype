import Head from 'next/head'
import Layout from '@/components/Layout'
import ChartWrapper from '@/components/ChartWrapper'
import LineChartSingle from '@/components/charts/LineChartSingle'

export default function Home() {
    return (
        <>
            <Head>
                <title>Primer + HighCharts Demo</title>
            </Head>
            <Layout>
                <ChartWrapper
                    title="Types of issues occurring"
                    description="Number of issues by year"
                >
                    <LineChartSingle />
                </ChartWrapper>
            </Layout>
        </>
    )
}
