import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import getChartTheme from './chartTheme'
import primitives from '@primer/primitives'
import { useTheme } from '@primer/react'

const HorizontalBarChart = () => {
    const colors = primitives.colors.light
    const theme = useTheme()
    const chartTheme = getChartTheme(theme.colorScheme)
    const options = {
        ...chartTheme,
        chart: {
            type: 'bar',
            ...chartTheme.chart,
        },
        title: {
            text: undefined,
        },
        xAxis: {
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
        plotOptions: {
            bar: {
                borderRadius: 4,
            },
            ...chartTheme.plotOptions,
        },
        series: [
            {
                data: [1, 2, 1, 4],
                color: colors.scale.blue[5],
            },
        ],
    }

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}

export default HorizontalBarChart
