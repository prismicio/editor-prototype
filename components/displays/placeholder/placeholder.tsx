import { ReactNode } from 'react'
import clsx from 'clsx'
import { Box } from 'components/layouts/box'
import styles from './placeholder.module.css'

interface PlaceholderProps {
  children?: ReactNode
  className?: string
}

export const Draggable = ({
  children,
  className,
  ...restProps
}: PlaceholderProps) => {
  return (
    <Box className={clsx(styles.root, className)} {...restProps} as="div">
      {children}
    </Box>
  )
}
