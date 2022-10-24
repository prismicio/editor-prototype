import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styles from './publishing-option.module.css'
import CalendarTodayTwoTone from '@mui/icons-material/CalendarTodayTwoTone'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'pages/_app'

export function PublishingOptions() {
  const dispatch = useDispatch<Dispatch>()
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.trigger}>
        <CalendarTodayTwoTone />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.root}>
          <DropdownMenu.Item
            className={styles.menuItem}
            onClick={() =>
              dispatch.dialog.open({ type: 'SCHEDULE', props: {} })
            }
          >
            Publish it at a specific date and time…
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.menuItem}>
            Publish it during a release…
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
