import { Dialog } from 'components/dialogs/dialog-layout/dialog-layout'
import { Box } from 'components/layouts/box'
import { Dispatch } from 'pages/_app'
import { useDispatch } from 'react-redux'

export function ScheduleDocument() {
  const dispatch = useDispatch<Dispatch>()
  return (
    <Dialog>
      <Dialog.Title onClose={() => dispatch.dialog.close()}>
        Publish it during a new release
      </Dialog.Title>
      <Dialog.Content>
        <Box as="form">
          <Box as="input" />
          <Box as="input" />
          <Box>
            <Box as="button">Cancel</Box>
            <Box as="button">Schedule</Box>
          </Box>
        </Box>
      </Dialog.Content>
    </Dialog>
  )
}
