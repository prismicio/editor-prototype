import { Box } from 'components/layouts/box'
import type { NextPage } from 'next'
import styles from 'styles/home.module.css'
import Slice from 'components/cards/slice/slice'
import { Byside } from 'components/layouts/by-side'
import slices from 'mocks/slices.json'
import { DraggableList } from 'components/controls/draggable'

const Home: NextPage = () => {
  console.log(styles)
  return (
    <Byside as="div" space="xs">
      <Byside.Sidebar width="8xl" as="aside">
        <Box as="div" className={styles['slices-droppable']}>
          <DraggableList
            items={slices}
            children={(item) => <Slice name={item.name} id={item.id} />}
          />
        </Box>
      </Byside.Sidebar>
      <Byside.Primary breakAT="9xl" as="main">
        Hello
      </Byside.Primary>
      <Byside.Sidebar width="8xl" as="aside">
        Hello
      </Byside.Sidebar>
    </Byside>
  )
}

export default Home
