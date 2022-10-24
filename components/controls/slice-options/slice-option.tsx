import { SaveAlt } from '@mui/icons-material'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styles from './slice-option.module.css'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

export function SliceOptions() {
  return (
    <DropdownMenu.Root defaultOpen={false}>
      <DropdownMenu.Trigger className={styles.trigger}>
        <MoreVertOutlinedIcon />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={styles.root}
          side="bottom"
          align="start"
          sideOffset={4}
        >
          <DropdownMenu.Label className={styles.title}>
            Slice options
          </DropdownMenu.Label>
          <DropdownMenu.Item className={styles.menuItem}>
            <ArrowUpwardIcon /> Move up
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item className={styles.menuItem}>
            <ArrowDownwardIcon /> Move down
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item className={styles.menuItem}>
            <DescriptionOutlinedIcon />
            Change variation
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item className={styles.menuItem}>
            <ContentCopyOutlinedIcon />
            Duplicate
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item className={styles.menuItem}>
            <DeleteOutlineOutlinedIcon />
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
