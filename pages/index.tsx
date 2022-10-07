import { Box } from 'components/layouts/box'
import type { NextPage } from 'next'
import styles from 'styles/Home.module.css'
import Slice from 'components/cards/slice/slice'
import { Byside } from 'components/layouts/by-side'
import { DraggableList } from 'components/controls/draggable'
import { useSelector } from 'react-redux'
import { RootState } from './_app'
import VersionPanel from 'components/versionPanel/versionPanel'
import PublishOptions from 'components/publishOptions/publishOptions'
import EditorTabs from 'components/editorTabs/editorTabs'

const Home: NextPage = () => {
  const slices = useSelector((state: RootState) => state.editor.slices)

  return (
    <Byside as="div">
      <Byside.Sidebar width="8xl" as="aside" className={styles.slices}>
        <DraggableList
          items={slices}
          children={(item, idx) => (
            <Slice preview={item.image} name={item.name} id={item.id} />
          )}
        />
      </Byside.Sidebar>
      <Byside.Primary breakAT="9xl" as="main">
        <EditorTabs />
        <Box>
          {slices.map((item, idx) => (
            <div className={styles.toto} key={idx}>{item.name}</div>
          ))}
        </Box>
      </Byside.Primary>
      <Byside.Sidebar width="8xl" as="aside" className={styles.rightPanel}>
        <PublishOptions />
        <VersionPanel />
      </Byside.Sidebar>
    </Byside>
  )
}

export default Home
