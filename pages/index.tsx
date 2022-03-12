import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Link from 'next/link'

import { Layout } from '~/components'

const IndexPage: NextPage = () => (
  <Layout
    className='h-full'
    variants={{
      exit: { opacity: 1, scale: 0.25 },
      initial: { opacity: 1, scale: 0.25 },
    }}
  >
    <div className='absolute inset-center w-full max-w-1/2 max-h-1/2 aspect-square'>
      <Link href='/about'>
        <motion.a
          layoutId='logo'
          className='block w-full h-full cursor-pointer'
        >
          <Icon400Million className='w-full h-full transform transition-transform hover:scale-105' />
        </motion.a>
      </Link>
    </div>
  </Layout>
)

export default IndexPage
