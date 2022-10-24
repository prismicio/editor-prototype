import { Dialog } from 'components/dialogs/dialog-layout/dialog-layout'
import styles from './schedule-document.module.css'
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
        <Box as="form" className={styles.root}>
          <Box className={styles.form}>
            <Box as="div" className={styles.field}>
              <Box as="label" htmlFor="date">
                Choose date & time
              </Box>
              <Box as="input" type="date" className={styles.input} />
              <Box as="div">Scheduled in your current timezone</Box>
            </Box>
            <Box as="div" className={styles.field}>
              <Box as="label" htmlFor="time" />
              <Box as="input" type="time" className={styles.input} />
            </Box>
          </Box>
          <Box as="div" className={styles.actions}>
            <Box type="button" as="button">
              Cancel
            </Box>
            <Box type="button" as="button">
              Schedule
            </Box>
          </Box>
        </Box>
      </Dialog.Content>
    </Dialog>
  )
}
