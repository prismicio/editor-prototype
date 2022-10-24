import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styles from './document-options.module.css'
import More from '@mui/icons-material/More'

export function DocumentOptions() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.trigger}>
        <More />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.root}>
          <DropdownMenu.Item className={styles.menuItem}>
            Archive
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.menuItem}>
            Duplicate
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
