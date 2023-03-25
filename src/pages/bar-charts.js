import Head from 'next/head'
import { Box } from '@primer/react'
import Layout from '@/components/Layout'
import ChartWrapper from '@/components/ChartWrapper'
import VerticalBarChart from '@/components/charts/VerticalBarChart'
import HorizontalBarChart from '@/components/charts/HorizontalBarChart'

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
                        <VerticalBarChart />
                    </ChartWrapper>
                    <ChartWrapper
                        title="Types of issues occurring"
                        description="Number of issues by year"
                    >
                        <HorizontalBarChart />
                    </ChartWrapper>
                </Box>
            </Layout>
        </>
    )
}
