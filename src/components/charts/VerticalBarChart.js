import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import getChartTheme from './chartTheme'

const chartTheme = getChartTheme()

const options = {
    ...chartTheme,
    chart: {
        type: 'column',
    },
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
    series: [
        {
            data: [1, 2, 1, 4],
        },
    ],
    plotOptions: {
        column: {
            borderRadius: 4,
            // borderRadiusTopLeft: '50%',
            // borderRadiusTopRight: '50%',
            // Border radius plugin
            // https://github.com/highcharts/rounded-corners
        },
    },
}

const VerticalBarChart = () => (
    <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
)

export default VerticalBarChart
