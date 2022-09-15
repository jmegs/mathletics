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
