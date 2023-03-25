import React, { useEffect } from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import getChartTheme from './chartTheme'
import primitives from '@primer/primitives'
import { useTheme } from '@primer/react'

const LineChartSingle = () => {
    const theme = useTheme()
    const chartTheme = getChartTheme(theme.colorScheme)
    const colors = primitives.colors.light
    const options = {
        ...chartTheme,
        chart: {
            type: 'spline',
            ...chartTheme.chart,
        },
        labels: {
            align: 'left',
        },
        legend: {
            enabled: false,
        },
        yAxis: {
            title: {
                text: 'Issues',
            },
        },
        title: {
            text: undefined,
        },
        plotOptions: {
            ...chartTheme.plotOptions,
            series: {
                pointStart: 2012,
            },
            spline: {
                animation: false,
                marker: {
                    enabled: false,
                },
            },
        },
        series: [
            {
                data: [1, 2, 1, 4, 3, 6, 5, 3, 2, 12],
                lineWidth: 1.5,
                // color: colors.scale.blue[5],
            },
        ],
    }
    return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default LineChartSingle
