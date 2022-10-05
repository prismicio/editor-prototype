import { Box } from 'components/layouts/box'
import type { NextPage } from 'next'
import styles from 'styles/home.module.css'
import Slice from 'components/cards/slice/slice'
import { Byside } from 'components/layouts/by-side'
import { DraggableList } from 'components/controls/draggable'
import { useSelector } from 'react-redux'
import { RootState } from './_app'

const Home: NextPage = () => {
  const slices = useSelector((state: RootState) => state.editor.slices)

  return (
    <Byside as="div" space="xs">
      <Byside.Sidebar width="8xl" as="aside" className={styles.slices}>
        <DraggableList
          items={slices}
          children={(item) => (
            <Slice preview={item.image} name={item.name} id={item.id} />
          )}
        />
      </Byside.Sidebar>
      <Byside.Primary breakAT="9xl" as="main">
        <Box>
          {slices.map((item) => (
            <div>{item.name}</div>
          ))}
        </Box>
      </Byside.Primary>
      <Byside.Sidebar width="8xl" as="aside">
        Hello
      </Byside.Sidebar>
    </Byside>
  )
}

export default Home
