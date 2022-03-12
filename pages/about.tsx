import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Link from 'next/link'
import Markdown from 'react-markdown'

import { Layout } from '~/components'
import content from '~/content/about.md'

const AboutPage: NextPage = () => (
  <Layout
    className='min-h-full p-8 py-24 max-w-prose mx-auto flex flex-col justify-center text-center text-2xl'
    variants={{
      exit: { opacity: 0, scale: 0.5 },
      initial: { opacity: 1, scale: 0.5 },
    }}
  >
    <Link href='/'>
      <motion.a
        layoutId='logo'
        className='self-center w-40 aspect-square cursor-pointer'
      >
        <a>
          <Icon400Million className='w-full h-full transform transition-transform hover:scale-105' />
        </a>
      </motion.a>
    </Link>
    <section>
      <Markdown>{content}</Markdown>
    </section>
    <section className='flex justify-center space-x-4'>
      <a
        className='transform transition-transform hover:scale-105'
        href='https://twitter.com/400_000_000'
      >
        <MdiTwitter />
      </a>
      <a
        className='transform transition-transform hover:scale-105'
        href='https://instagram.com/400_000_000'
      >
        <MdiInstagram />
      </a>
      <a
        className='transform transition-transform hover:scale-105'
        href='https://jaded.site'
      >
        <IconJaded
          className='block w-1.2em h-1.2em animate-spin'
          style={{ animationDuration: '60s' }}
        />
      </a>
    </section>
  </Layout>
)

export default AboutPage
