import React from 'react'
import primitives from '@primer/primitives'

const getChartTheme = (theme = 'light') => {
    const colors = primitives.colors[theme]
    return {
        colors: [
            colors.scale.blue[5],
            colors.scale.orange[4],
            colors.scale.green[4],
            colors.scale.pink[4],
            colors.scale.gray[5],
            colors.scale.red[4],
            colors.scale.purple[4],
        ],
        tooltip: {
            backgroundColor: colors.canvas.default,
            borderRadius: 6,
            borderColor: colors.border.default,
            shape: 'square',
            shadow: {
                color: colors.shadow.default,
                offsetX: 1,
                offsetY: 1,
                opacity: 0.04,
                width: 4,
            },
            style: {
                color: colors.fg.default,
            },
        },
        legend: {
            itemStyle: {
                color: colors.fg.muted,
                fontWeight: 'regular',
            },
            itemHoverStyle: {
                color: colors.fg.default,
            },
        },
        credits: {
            enabled: false,
        },
        chart: {
            animation: false,
            spacing: 4,
            backgroundColor: colors.canvas.default,
            style: {
                fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'`,
                fontSize: '12px',
            },
        },
        plotOptions: {
            series: {
                animation: false,
            },
            spline: {
                animation: false,
            },
            bar: {
                borderColor: colors.border.default,
            },
            column: {
                borderColor: colors.border.default,
            },
        },
        xAxis: {
            tickWidth: 0,
            lineWidth: 1,
            gridLineColor: colors.border.subtle,
            lineColor: colors.border.default,
        },
        yAxis: {
            tickWidth: 0,
            gridLineColor: colors.border.subtle,
            lineWidth: 1,
            lineColor: colors.border.default,
        },
    }
}

export default getChartTheme
