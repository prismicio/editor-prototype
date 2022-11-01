import { Box } from 'components/layouts/box'
import type { NextPage } from 'next'
import styles from 'styles/Home.module.css'
import { Slice } from 'components/cards/slice/slice'
import { Byside } from 'components/layouts/by-side'
import { DraggableList } from 'components/controls/draggable'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './_app'
import VersionPanel from 'components/versionPanel/versionPanel'
import PublishOptions from 'components/publishOptions/publishOptions'
import EditorTabs from 'components/editorTabs/editorTabs'
import DocumentName from 'components/documentName/documentName'
import { Fragment } from 'react'
import { RootDialog } from 'components/dialogs/root-dialog'
import Form from 'components/form/form'
import StaticZone from 'components/form/StaticZone'

const Home: NextPage = () => {
  const editor = useSelector((state: RootState) => state.editor)
  const dispatch = useDispatch()

  return (
    <Fragment>
      <Byside as="div">
        <Byside.Sidebar width="8xl" as="aside" className={styles.slices}>
          <DocumentName />
          {!editor.variations.length && (
            <Box>
              <h2>Empty Slices</h2>
              <p>Pas de Slices dans ce document</p>
              <button
                onClick={() =>
                  dispatch.dialog.open({ type: 'SELECT_SLICE', props: {} })
                }
              >
                Add
              </button>
            </Box>
          )}
          <DraggableList
            items={editor.variations}
            children={(item) => (
              <Fragment>
                <Slice preview={item.image} name={item.name} id={item.id} />
              </Fragment>
            )}
          />
        </Byside.Sidebar>
        <Byside.Primary breakAT="9xl" as="main">
          <EditorTabs />
          <Box className={styles.wrapper}>
            <article className={styles.slice}>
              <header>Static Zone</header>
              <StaticZone fields={editor.static.fields} />
            </article>
            {editor.variations.length ? (
              editor.variations.map((item, idx) => (
                <article className={styles.slice}>
                  <header>{item.id}</header>
                  <Form fields={item.fields} index={idx} />
                </article>
              ))
            ) : (
              <div>
                <h2>There is no Slices here</h2>
                <p>Add one slices your document</p>
                <button
                  onClick={() =>
                    dispatch.dialog.open({ type: 'SELECT_SLICE', props: {} })
                  }
                >
                  Add
                </button>
              </div>
            )}
          </Box>
        </Byside.Primary>
        <Byside.Sidebar width="8xl" as="aside" className={styles.rightPanel}>
          <PublishOptions />
          <VersionPanel />
        </Byside.Sidebar>
      </Byside>
      <RootDialog />
    </Fragment>
  )
}

export default Home
