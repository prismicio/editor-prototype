import { Dispatch, RootState } from 'pages/_app'
import { useDispatch, useSelector } from 'react-redux'
import { Dialog } from 'components/dialogs/dialog-layout/dialog-layout'
import { Box } from 'components/layouts/box'
import Slice from 'components/cards/slice/slice'
import styles from './select-slice.module.css'
import AddIcon from '@mui/icons-material/Add';

export function SelectSlice() {
  const dispatch = useDispatch<Dispatch>()
  const libray = useSelector((state: RootState) => state.library)
  const position = useSelector((state: RootState) => state.editor.selectedID)

  console.log(libray)
  return (
    <Dialog>
      <Dialog.Title onClose={() => dispatch.dialog.close()}>
        Select a slice to add
      </Dialog.Title>
      <Dialog.Content>
        <Box as="ul" className={styles.list}>
          <Box as="li" onClick={() => dispatch.library.reset()}>
            <p className={styles.SliceNumber}>All Slices</p>
            <p>{libray.slices.length} Slices (XX Variations)</p>
          </Box>
          {Object.keys(libray.groups).map((group, index) => (
            <Box
              as="li"
              onClick={() => dispatch.library.filter(group)}
              key={index}
            >
              <p className={styles.SliceNumber}>{group}</p>
              <p>{libray.groups[group].length} variations</p>
            </Box>
          ))}
        </Box>
        <Box className={styles.listOfSlices}>
          {libray.filtered.map((slice) => (
            <Box as="div" key={slice.id}>
              <Slice name={slice.name} preview={slice.image} id={slice.id} />
              <Box
                as="button"
                onClick={() => dispatch.library.add({ position, slice })}
              >
                Add
              </Box>
            </Box>
          ))}
        </Box>
      </Dialog.Content>
    </Dialog>
  )
}
