import { Dispatch, RootState } from 'pages/_app'
import { useDispatch, useSelector } from 'react-redux'
import { Dialog } from 'components/dialogs/dialog-layout/dialog-layout'
import { Box } from 'components/layouts/box'
import Slice from 'components/cards/slice/slice'
import { Button } from '@mui/material'

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
        <Box as="ul">
          <Box as="button" onClick={() => dispatch.library.reset()}>
            <Box>All Slices</Box>
            <Box>{libray.slices.length}</Box>
          </Box>
          {Object.keys(libray.groups).map((group, index) => (
            <Box
              as="button"
              onClick={() => dispatch.library.filter(group)}
              key={index}
            >
              <Box>{group}</Box>
              <Box>{libray.groups[group].length}</Box>
            </Box>
          ))}
        </Box>
        <Box>
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
