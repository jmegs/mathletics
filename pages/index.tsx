
import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { barAtom, opAtom } from '../state'
import { calculate } from '../helpers'

import Keys from "../components/Keys"
import Display from '../components/Display'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='AppLayout'>
      <Display />
      <Keys />
    </div>
  )
}

export default Home
