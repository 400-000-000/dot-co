// import { FormspreeProvider } from '@formspree/react'
import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import { type AppProps } from 'next/app'
import 'windi.css'

import '~/styles/fonts-tex-gyre-heros.css'
import '~/styles/main.css'
import '~/styles/inputs.css'
import '~/styles/markdown.css'

function App({ Component, pageProps, router }: AppProps) {
  const url = `https://400000000.co${router.route}`

  return (
    <>
      {/* <FormspreeProvider
        project={process.env.NEXT_PUBLIC_FORMSPREE_PROJECT_ID!}
      > */}
      <DefaultSeo
        titleTemplate='%s - 400000000'
        title='400000000'
        canonical={url}
      />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} key={url} />
      </AnimatePresence>
      {/* </FormspreeProvider> */}
    </>
  )
}

export default App
