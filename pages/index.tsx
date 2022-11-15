import { Box } from 'components/layouts/box'
import type { NextPage } from 'next'
import styles from 'styles/Home.module.css'
import { Slice } from 'components/cards/slice/slice'
import { Byside } from 'components/layouts/by-side'
import { DraggableList } from 'components/controls/draggable'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, RootState } from './_app'
import VersionPanel from 'components/versionPanel/versionPanel'
import PublishOptions from 'components/publishOptions/publishOptions'
import EditorTabs from 'components/editorTabs/editorTabs'
import DocumentName from 'components/documentName/documentName'
import { Fragment, useEffect } from 'react'
import { RootDialog } from 'components/dialogs/root-dialog'
import Form from 'components/form/form'
import StaticZone from 'components/form/StaticZone'
import { Element } from 'react-scroll'
import { useRouter } from 'next/router'
import queryString from 'query-string'

type QueryProps = {
  filled?: boolean
}

const Home: NextPage = () => {
  const router = useRouter()
  const editor = useSelector((state: RootState) => state.editor)
  const dispatch = useDispatch<Dispatch>()
  const url = queryString.parseUrl(router.asPath, {
    parseBooleans: true,
  })
  const query = url.query as QueryProps

  useEffect(() => {
    if (query.filled) dispatch.editor.onFill()
  }, [query.filled])

  return (
    <Fragment>
      <Byside as="div">
        <Byside.Sidebar width="8xl" as="aside" className={styles.slices}>
          <DocumentName />
          <Box className={styles.staticZone}>
            <div className={styles.staticCard}>Static zone</div>
          </Box>
          {!editor.variations.length && (
            <Box className={styles.emptyState}>
              <div>
                <p>
                  Click on the button below to choose the first Slice of the
                  page.
                </p>
                <button
                  onClick={() =>
                    dispatch.dialog.open({
                      type: 'SELECT_SLICE',
                      props: { pos: 0 },
                    })
                  }
                >
                  Add slice
                </button>
              </div>
            </Box>
          )}
          {Object.values(editor.variations).length ? (
            <DraggableList
              items={Object.values(editor.variations) || []}
              children={(item, index) => (
                <Fragment>
                  <Slice
                    position={index}
                    preview={item.image}
                    name={item.name}
                    id={item.id}
                  />
                </Fragment>
              )}
            />
          ) : null}
        </Byside.Sidebar>
        <Byside.Primary breakAT="9xl" as="main">
          <EditorTabs />
          <Box className={styles.wrapper}>
            <article className={styles.slice}>
              <header>Static Zone</header>
              <StaticZone fields={editor.static.fields} />
            </article>
            {editor.variations.map((item, idx) => (
              <Element name={item.id} key={idx}>
                <article key={idx} className={styles.slice}>
                  <header>{item.sliceName}</header>
                  <Form item={item} fields={item.fields} index={idx} />
                </article>
              </Element>
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

//** */
