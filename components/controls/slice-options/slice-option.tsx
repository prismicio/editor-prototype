import { SaveAlt } from '@mui/icons-material'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styles from './slice-option.module.css'

export function SliceOptions() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>Options</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.root}>
          <DropdownMenu.Label>Slice options</DropdownMenu.Label>
          <DropdownMenu.Item>
            <SaveAlt /> Move up
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <SaveAlt /> Move down
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <SaveAlt />
            Change variation
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <SaveAlt />
            Duplicate
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <SaveAlt />
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
