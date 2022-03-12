import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
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
      <AnimatePresence>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1, type: 'ease-out' }}
          href='https://jaded.site'
          className={classNames(
            'fixed z-1 left-8 bottom-8 w-20 aspect-square animate-spin'
          )}
          style={{ animationDuration: '60s' }}
        >
          <IconJaded className='block w-full h-full transform scale-120 transition-transform hover:scale-125' />
          <span className='hidden'>400 Million</span>
        </motion.a>
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} key={url} />
      </AnimatePresence>
    </>
  )
}

export default App
