import { ThemeProvider, BaseStyles, Box } from '@primer/react'
import ColorModeSwitcher from '@/components/ColorModeSwitcher'
import '@/styles/reset.css'

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider colorMode="auto" preventSSRMismatch>
            <BaseStyles>
                <Box
                    backgroundColor={'canvas.default'}
                    height={'100vh'}
                    width={'100vw'}
                    position={'absolute'}
                    top={0}
                    left={0}
                >
                    <Component {...pageProps} />
                </Box>
                <ColorModeSwitcher />
            </BaseStyles>
        </ThemeProvider>
    )
}
