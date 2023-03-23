import { useEffect, useState } from 'react'
import primitives from '@primer/primitives'
import { useTheme } from '@primer/react'
import Highcharts from 'highcharts'

const useHighchartsTheme = (themeOptions) => {
    const theme = useTheme()
    const [highchartsTheme, setHighchartsTheme] = useState(null)

    useEffect(() => {
        console.log(theme.colorScheme, 'hc')
        const colors = primitives.colors[theme.colorScheme]
        const customTheme = {
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
                    fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                    fontSize: '12px',
                },
            },
        }

        Highcharts.setOptions({ ...customTheme })

        setHighchartsTheme(customTheme)

        return () => {
            Highcharts.setOptions({ colors: null, ...customTheme })
        }
    }, [themeOptions])

    return theme
}

export default useHighchartsTheme
