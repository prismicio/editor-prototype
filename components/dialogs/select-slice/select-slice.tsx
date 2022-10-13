import { Dispatch, RootState } from 'pages/_app'
import { useDispatch, useSelector } from 'react-redux'
import { Dialog } from 'components/dialogs/dialog-layout/dialog-layout'
import { Box } from 'components/layouts/box'
import Slice from 'components/cards/slice/slice'
import styles from './select-slice.module.css'
import AddIcon from '@mui/icons-material/Add'

export function SelectSlice() {
  const dispatch = useDispatch<Dispatch>()
  const library = useSelector((state: RootState) => state.library)
  const position = useSelector((state: RootState) => state.editor.selectedID)

  console.log(library)
  return (
    <Dialog>
      <Dialog.Title onClose={() => dispatch.dialog.close()}>
        Select a slice to add
      </Dialog.Title>
      <Dialog.Content>
        <Box as="ul" className={styles.list}>
          <Box as="li" onClick={() => dispatch.library.reset()}>
            <p className={styles.SliceNumber}>All Slices</p>
            <p>var</p>
          </Box>
          {library.slices.map((slice, index) => (
            <Box
              as="li"
              onClick={() => dispatch.library.filter(slice.id)}
              key={index}
            >
              <p className={styles.SliceNumber}>{slice.name}</p>
              <p>{slice.id} variations</p>
            </Box>
          ))}
        </Box>
        <Box className={styles.slices}>
          {library.filtered.map((slice) => (
            <Box as="div">
              <Box as="h2">{slice.name}</Box>
            </Box>
          ))}
        </Box>
      </Dialog.Content>
    </Dialog>
  )
}

/**<Box as="div" key={slice.id}>
              <Slice name={slice.name} preview={slice.image} id={slice.id} />
              <Box
                as="button"
                onClick={() => dispatch.library.add({ position, slice })}
              >
                Add
              </Box>
            </Box> */
