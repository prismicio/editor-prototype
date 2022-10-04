import { Box } from 'components/layouts/box'
import type { NextPage } from 'next'
import styles from 'styles/home.module.css'
import Slice from 'components/cards/slice/slice'
import { Byside } from 'components/layouts/by-side'
import { VStack } from 'components/layouts/v-stack/vstack'
import slices from 'mocks/slices.json'

const Home: NextPage = () => {
  return (
    <Byside as="div" space="xs">
      <Byside.Sidebar width="8xl" as="aside">
        <VStack items={slices} children={() => <Slice />} />
      </Byside.Sidebar>
      <Byside.Primary breakAT="9xl" as="main">
        <Slice />
      </Byside.Primary>
      <Byside.Sidebar width="8xl" as="aside">
        <Slice />
      </Byside.Sidebar>
    </Byside>
  )
}

export default Home
