import Head from 'next/head'
import { Box } from '@primer/react'
import Layout from '@/components/Layout'
import ChartWrapper from '@/components/ChartWrapper'
import LineChartSingle from '@/components/charts/LineChartSingle'
import LineChart from '@/components/charts/LineChart'

export default function Home() {
    return (
        <>
            <Head>
                <title>Primer + HighCharts Demo</title>
            </Head>
            <Layout>
                <Box
                    display="flex"
                    flexDirection="column"
                    width="100%"
                    justifyContent="flex-start"
                    alignItems="center"
                    gridGap={3}
                >
                    <ChartWrapper
                        title="Types of issues occurring"
                        description="Number of issues by year"
                    >
                        <LineChartSingle />
                    </ChartWrapper>
                    <ChartWrapper
                        title="Types of issues occurring"
                        description="Number of issues by year"
                    >
                        <LineChart />
                    </ChartWrapper>
                </Box>
            </Layout>
        </>
    )
}
