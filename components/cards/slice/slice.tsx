import { Box } from 'components/layouts/box'
import React, { ReactNode, SyntheticEvent } from 'react'
import styles from './slice.module.css'
import NextImage from 'next/image'
import { SliceOptions } from 'components/controls/slice-options/slice-option'
import Link from 'next/link'

interface SliceProps {
  preview: string
  name: string
  id: string
  meta?: boolean
}

export function Slice({
  preview,
  meta = false,
  name,
  id,
  ...restProps
}: SliceProps): JSX.Element {
  return (
    <Box as="div" className={styles.root} {...restProps}>
      <SliceOptions />
      <NextImage height="126" width="232" src={preview} />
    </Box>
  )
}
