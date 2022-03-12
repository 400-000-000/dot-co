import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import { type AppProps } from 'next/app'
import 'windi.css'

import '~/styles/index.css'

function App({ Component, pageProps, router }: AppProps) {
  const url = `https://400000000.co${router.route}`

  return (
    <>
      <DefaultSeo
        titleTemplate='%s - 400000000'
        title='400000000'
        canonical={url}
      />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} key={url} />
      </AnimatePresence>
    </>
  )
}

export default App
