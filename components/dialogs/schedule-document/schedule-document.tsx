import { Dialog } from 'components/dialogs/dialog-layout/dialog-layout'
import styles from './schedule-document.module.css'
import { Box } from 'components/layouts/box'
import { Dispatch } from 'pages/_app'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

export function ScheduleDocument() {
  const dispatch = useDispatch<Dispatch>()
  return (
    <Dialog>
      <Dialog.Title onClose={() => dispatch.dialog.close()}>
        Publish it at a specific date and time…
      </Dialog.Title>
      <Dialog.Content>
        <Box as="form" className={styles.root}>
          <Box className={styles.form}>
            <Box as="div" className={styles.field}>
              <Box as="label" htmlFor="date" className={styles.label}>
                Choose date & time
              </Box>
              <Box as="input" type="date" className={styles.input} />
              <Box as="div" className={styles.hint}>Scheduled in your current timezone</Box>
            </Box>
            <Box as="div" className={styles.field}>
              <Box as="label" htmlFor="time" />
              <Box as="input" type="time" className={styles.input} />
            </Box>
          </Box>
          <Box as="div" className={styles.actions}>
            <Box
              className={styles.secondary}
              type="button"
              as="button"
              onClick={() => dispatch.dialog.close()}
            >
              Cancel
            </Box>
            <Box
              className={styles.primary}
              type="button"
              as="button"
              onClick={() => {
                dispatch.dialog.close()
                toast.success(`Scheduled`)
              }}
            >
              Schedule
            </Box>
          </Box>
        </Box>
      </Dialog.Content>
    </Dialog>
  )
}
