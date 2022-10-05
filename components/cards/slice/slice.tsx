import { Box } from 'components/layouts/box'
import React, { ReactNode, SyntheticEvent } from 'react'
import styles from './slice.module.css'
import NextImage from 'next/image'

interface SliceProps {
  preview: string
  name: string
  id: number
}

export default function Slice({
  preview,
  name,
  id,
  ...restProps
}: SliceProps): JSX.Element {
  return (
    <Box as="div" className={styles.root} {...restProps}>
      <NextImage height="126" width="232" src={preview} />
    </Box>
  )
}
