import { Box } from 'components/layouts/box'
import React, { ReactNode, SyntheticEvent } from 'react'
import styles from './slice.module.css'
import NextImage from 'next/image'

interface SliceProps {
  preview?: ReactNode
  name: string
  id: string
}

export default function Slice({
  name,
  id,
  ...restProps
}: SliceProps): JSX.Element {
  return (
    <Box as="div" className={styles.root} {...restProps}>
      <NextImage height="126" width="232" src="/slices-thumbnails/hero.png" />
    </Box>
  )
}
