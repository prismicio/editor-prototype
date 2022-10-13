import { Dispatch, RootState } from 'pages/_app'
import { useDispatch, useSelector } from 'react-redux'
import { Dialog } from 'components/dialogs/dialog-layout/dialog-layout'
import { Box } from 'components/layouts/box'
import styles from './select-slice.module.css'
import clsx from 'clsx'
import { Variation } from 'components/cards/variation'

export function SelectSlice() {
  const dispatch = useDispatch<Dispatch>()
  const library = useSelector((state: RootState) => state.library)
  const position = useSelector((state: RootState) => state.editor.selectedID)

  return (
    <Dialog>
      <Dialog.Title onClose={() => dispatch.dialog.close()}>
        Select a slice to add
      </Dialog.Title>
      <Dialog.Content>
        <Box as="div" className={styles.library}>
          <Box as="ul" className={styles.slices}>
            <Box
              as="li"
              className={clsx(styles.slice, {
                [styles.selected]: library.selected === null,
              })}
              onClick={() => dispatch.library.reset()}
            >
              <Box className={styles.name}>All Slices</Box>
              <Box className={styles.number}>
                {`${library.slices.length} slices (18 Variations)`}
              </Box>
            </Box>
            {library.slices.map((slice, index) => {
              return (
                <Box
                  as="li"
                  className={clsx(styles.slice, {
                    [styles.selected]: slice.id === library.selected,
                  })}
                  onClick={() => dispatch.library.filter(slice.id)}
                  key={slice.id}
                >
                  <Box className={styles.name}>{slice.name}</Box>
                  <Box
                    className={styles.number}
                  >{`${slice.variations.length} variations`}</Box>
                </Box>
              )
            })}
          </Box>
          <Box className={styles.group}>
            {library.filtered.map((slice) => (
              <Box as="div" key={slice.id}>
                <Box as="div" className={styles.title}>
                  <Box as="span"> {`${slice.name}`}</Box>
                  <Box
                    as="span"
                    className={styles.amount}
                  >{`(${slice.variations.length} Variations)`}</Box>
                </Box>
                <Box as="div" className={styles.variations}>
                  {slice.variations.map((variation) => (
                    <Variation
                      key={variation.id}
                      add={() =>
                        dispatch.editor.onInsert({ position, variation })
                      }
                      name={variation.name}
                      preview={variation.image}
                      id={variation.id}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Dialog.Content>
    </Dialog>
  )
}
