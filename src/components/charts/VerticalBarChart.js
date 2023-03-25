import React from 'react'
import { useTheme } from '@primer/react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import getChartTheme from './chartTheme'

function VerticalBarChart() {
    const theme = useTheme()
    const chartTheme = getChartTheme(theme.colorScheme)
    // const chartTheme = typeof theme === 'object' ? getChartTheme(theme.colorScheme) : {}
    const options = {
        ...chartTheme,
        title: {
            text: undefined,
        },
        xAxis: {
            title: { text: 'Dates' },
            categories: ['Sept 3', 'Sept 10', 'Sept 17', 'Sept 24'],
        },
        yAxis: {
            title: {
                text: 'Issues',
            },
        },
        legend: {
            enabled: false,
        },
        chart: {
            type: 'column',
            ...chartTheme.chart,
        },
        series: [
            {
                data: [1, 2, 1, 4],
            },
        ],
        plotOptions: {
            column: {
                borderRadius: 4,
                animation: false,
            },
        },
    }

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}

export default VerticalBarChart
