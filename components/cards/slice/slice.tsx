import { Box } from 'components/layouts/box'
import React, { ReactNode } from 'react'
import styles from './slice.module.css'

interface SliceProps {
  preview?: ReactNode
}

export default function Slice({ ...restProps }: SliceProps): JSX.Element {
  return (
    <Box className={styles.root} {...restProps}>
      <div>Slicename</div>
    </Box>
  )
}
