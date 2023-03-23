import React, { useState } from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import primitives from '@primer/primitives'
import getChartTheme from './chartTheme'

function StackedArea() {
    const chartTheme = getChartTheme()
    const colors = primitives.colors.light
    const [chartOptions, setChartOptions] = useState({
        ...chartTheme,
        chart: {
            type: 'area',
            spacing: 0,
            spacingTop: 4,
        },
        title: {
            text: undefined,
        },
        yAxis: {
            title: {
                useHTML: true,
                text: 'Million tonnes CO<sub>2</sub>-equivalents',
            },
        },
        tooltip: {
            shared: true,
            headerFormat:
                '<span style="font-size:12px"><b>{point.key}</b></span><br>',
            backgroundColor: colors.canvas.default,
        },
        legend: {
            align: 'left',
            verticalAlign: 'top',
            itemStyle: {
                fontWeight: 'regular',
                font: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            },
        },
        plotOptions: {
            series: {
                pointStart: 2012,
            },
            area: {
                stacking: 'normal',
                lineColor: colors.canvas.default,
                lineWidth: 1,
            },
        },
        series: [
            {
                name: 'Ocean transport',
                data: [
                    13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196,
                    16214,
                ],
                lineColor: colors.scale.blue[5],
                lineWidth: 1.5,
                marker: {
                    enabled: false,
                    fillColor: colors.scale.blue[5],
                },
                color: {
                    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                    stops: [
                        [0, colors.scale.blue[0]],
                        [1, 'rgba(255,255,255,0)'],
                    ],
                },
            },
            {
                name: 'Households',
                data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039],
                lineColor: colors.scale.orange[4],
                lineWidth: 1.5,
                marker: {
                    enabled: false,
                    fillColor: colors.scale.orange[4],
                },
                color: {
                    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1.5 },
                    stops: [
                        [0, colors.scale.orange[0]],
                        [1, 'rgba(255,255,255,0)'],
                    ],
                },
            },
            {
                name: 'Agriculture and hunting',
                data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913],
                lineColor: colors.scale.green[4],
                lineWidth: 1.5,
                marker: {
                    enabled: false,
                    fillColor: colors.scale.green[4],
                },
                color: {
                    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1.5 },
                    stops: [
                        [0, colors.scale.green[0]],
                        [1, 'rgba(255,255,255,0)'],
                    ],
                },
            },
            {
                name: 'Air transport',
                data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550],
                lineColor: colors.scale.pink[5],
                lineWidth: 1.5,
                marker: {
                    enabled: false,
                    fillColor: colors.scale.pink[5],
                },
                color: {
                    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1.5 },
                    stops: [
                        [0, colors.scale.pink[0]],
                        [1, 'rgba(255,255,255,0)'],
                    ],
                },
            },
            {
                name: 'Construction',
                data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186],
                lineColor: '#57606A',
                lineWidth: 1.5,
                marker: {
                    enabled: false,
                    fillColor: '#57606A',
                },
                color: {
                    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1.5 },
                    stops: [
                        [0, '#C9D1D9'],
                        [1, 'rgba(255,255,255,0)'],
                    ],
                },
            },
        ],
    })

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
    )
}

export default StackedArea
