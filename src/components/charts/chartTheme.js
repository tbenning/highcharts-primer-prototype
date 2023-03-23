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
        },
        credits: {
            enabled: false,
        },
        title: {
            align: 'left',
            style: { fontWeight: 'bold' },
            useHTML: true,
        },
        chart: {
            spacing: 0,
            backgroundColor: colors.canvas.default,
            style: {
                fontFamily: `serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'`,
                fontSize: '12px',
            },
        },
    }
}

export default getChartTheme
