import React, { useEffect } from 'react'
import { useTheme } from '@primer/react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import getChartTheme from './chartTheme'
import primitives from '@primer/primitives'

function LineChart() {
    const theme = useTheme()
    const chartTheme = getChartTheme(theme.colorScheme)
    const options = {
        ...chartTheme,
        chart: {
            type: 'spline',
            spacing: 0,
            ...chartTheme.chart,
        },
        labels: {
            align: 'left',
        },
        legend: {
            align: 'left',
            verticalAlign: 'top',
            x: -8,
            itemStyle: {
                fontWeight: 'regular',
                font: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                ...chartTheme.legend.itemStyle,
            },
            ...chartTheme.legend,
        },
        yAxis: {
            title: {
                text: 'Issues',
            },
            // opposite: true,
            ...chartTheme.yAxis,
        },
        title: {
            text: undefined,
        },
        plotOptions: {
            series: {
                pointStart: 2012,
            },
            spline: {
                marker: {
                    enabled: false,
                },
            },
            ...chartTheme.plotOptions,
        },
        series: [
            {
                data: [1, 2, 1, 4, 3, 6, 5, 3, 2, 12],
                lineWidth: 1.5,
                // color: colors.scale.blue[5],
            },
            {
                data: [2, 3, 6, 3, 2, 1, 3, 3, 8, 7],
                lineWidth: 1.5,
                // color: colors.scale.orange[4],
            },
            {
                data: [3, 6, 3, 2, 1, 3, 3, 8, 7, 4],
                lineWidth: 2,
                // color: colors.scale.green[4],
                dashStyle: 'ShortDashDot',
            },
            {
                data: [6, 3, 2, 1, 3, 3, 8, 7, 4, 3],
                lineWidth: 2,
                // color: colors.scale.pink[5],
            },
        ],
    }

    return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default LineChart

// Possible Line Styles
// 'Solid',
// 'ShortDash',
// 'ShortDot',
// 'ShortDashDot',
// 'ShortDashDotDot',
// 'Dot',
// 'Dash',
// 'LongDash',
// 'DashDot',
// 'LongDashDot',
// 'LongDashDotDot'
