import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../node_modules/devicon/devicon.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
