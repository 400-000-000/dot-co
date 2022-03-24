import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Link from 'next/link'
import Markdown from 'react-markdown'

import { Contact, Layout } from '~/components'
import contentAbout from '~/content/about.md'
import contentContact from '~/content/contact.md'
import contentFooter from '~/content/footer.md'

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
    <div className='w-max-content max-w-full space-y-24 sm:space-y-32'>
      <section className='markdown'>
        <Markdown>{contentAbout}</Markdown>
      </section>
      <section className='space-y-2 sm:space-y-4'>
        <div className='markdown'>
          <Markdown>{contentContact}</Markdown>
        </div>
        <Contact />
      </section>
      {!!contentFooter && (
        <section className='markdown'>
          <Markdown>{contentFooter}</Markdown>
        </section>
      )}
    </div>
  </Layout>
)

export default AboutPage
