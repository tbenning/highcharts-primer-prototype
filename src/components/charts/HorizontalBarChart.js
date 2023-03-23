import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import getChartTheme from './chartTheme'
import primitives from '@primer/primitives'

const colors = primitives.colors.light

const chartTheme = getChartTheme()
const options = {
    ...chartTheme,
    chart: {
        type: 'bar',
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
        column: {
            borderRadius: 4,
        },
    },
    series: [
        {
            data: [1, 2, 1, 4],
            color: colors.scale.blue[5],
        },
    ],
}

const HorizontalBarChart = () => (
    <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
)

export default HorizontalBarChart
