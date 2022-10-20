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
import staticz from 'mocks/static.json'

const Home: NextPage = () => {
  const slices = useSelector((state: RootState) => state.editor.slices)
  const dispatch = useDispatch()

  return (
    <Fragment>
      <Byside as="div">
        <Byside.Sidebar width="8xl" as="aside" className={styles.slices}>
          <DocumentName />
          {!slices.length && (
            <Box>
              <h2>Empty Slices</h2>
              <p>Pas de Slices dans ce document</p>
              <button
                onClick={() =>
                  dispatch.dialog.open({ type: 'SELECT_SLICE', props: {} })
                }
              >
                click ici pour en ajouter frère
              </button>
            </Box>
          )}
          <DraggableList
            items={slices}
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
              <Form fields={staticz.fields} />
            </article>
            {slices.map((item, idx) => (
              <article className={styles.slice} key={idx}>
                <header>{item.name}</header>
                <Form fields={item.fields} />
              </article>
            ))}
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
