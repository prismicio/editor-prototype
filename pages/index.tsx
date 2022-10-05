import { Box } from 'components/layouts/box'
import type { NextPage } from 'next'
import styles from 'styles/home.module.css'
import Slice from 'components/cards/slice/slice'
import { Byside } from 'components/layouts/by-side'
import slices from 'mocks/slices.json'
import { DraggableList } from 'components/controls/draggable'
import { useDispatch, useSelector } from 'react-redux'
import { RootModel } from 'models'
import { RootState } from './_app'
import VersionPanel from 'components/versionPanel/versionPanel'
const Home: NextPage = () => {
  const state = useSelector((state: RootState) => state.editor)

  return (
    <Byside as="div" space="xs">
      <Byside.Sidebar width="8xl" as="aside" className={styles.slices}>
        <DraggableList
          items={state}
          children={(item) => (
            <Slice preview={item.image} name={item.name} id={item.id} />
          )}
        />
      </Byside.Sidebar>
      <Byside.Primary breakAT="9xl" as="main">
        Hello
      </Byside.Primary>
      <Byside.Sidebar width="8xl" as="aside">
        <VersionPanel />
      </Byside.Sidebar>
    </Byside>
  )
}

export default Home
