import clsx from 'clsx'
import { Box } from 'components/layouts/box'
import { ReactNode } from 'react'
import styles from './dialog-layout.module.css'
import CloseIcon from '@mui/icons-material/Close';
type DialogProps = {
  children: ReactNode
}

interface DialogTitleProps extends DialogProps {
  onClose: () => void
}

export function Dialog(props: DialogProps) {
  return (
    <Box as="div" className={clsx(styles.overlay)}>
      <Box className={clsx(styles.root)}>{props.children}</Box>
    </Box>
  )
}

function Title(props: DialogTitleProps) {
  return (
    <Box as="div" className={clsx(styles.title)}>
      {props.children}
      <Box as="button" onClick={props.onClose}>
        <CloseIcon />
      </Box>
    </Box>
  )
}

function Content(props: DialogProps) {
  return <Box as="div" className={clsx(styles.wrapper)}>{props.children}</Box>
}

Dialog.Title = Title
Dialog.Content = Content
