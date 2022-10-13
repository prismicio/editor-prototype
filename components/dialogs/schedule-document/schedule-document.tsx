import { Dialog } from 'components/dialogs/dialog-layout/dialog-layout'
import { Dispatch } from 'pages/_app'
import { useDispatch } from 'react-redux'

export function ScheduleDocument() {
  const dispatch = useDispatch<Dispatch>()
  return (
    <Dialog>
      <Dialog.Title onClose={() => dispatch.dialog.close()}>
        Publish it during a new release
      </Dialog.Title>
      <Dialog.Content>Content</Dialog.Content>
    </Dialog>
  )
}
