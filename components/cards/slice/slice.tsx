import { Box } from 'components/layouts/box'
import styles from './slice.module.css'
import NextImage from 'next/image'
import { SliceOptions } from 'components/controls/slice-options/slice-option'

interface SliceProps {
  preview: string
  name: string
  id: string
  meta?: boolean
  position: number
}

export function Slice({
  preview,
  meta = false,
  name,
  id,
  position,
  ...restProps
}: SliceProps): JSX.Element {
  return (
    <Box as="div" className={styles.root} {...restProps}>
      <SliceOptions position={position} />
      <NextImage quality={100} height="150" width="278" src={preview} />
    </Box>
  )
}
