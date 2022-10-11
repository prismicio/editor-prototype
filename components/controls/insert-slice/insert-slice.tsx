import clsx from 'clsx'
import { Box } from 'components/layouts/box'
import InsertSliceIcon from 'public/icons/InsertSliceIcon.svg'
import { SyntheticEvent, useRef } from 'react'
import styles from './insert-slice.module.css'

export function InsertSlice() {
  const ref = useRef<HTMLButtonElement>(null)
  const onDragOver = (e: SyntheticEvent) => e.preventDefault()
  const onDragEnter = () => ref.current?.classList.add(styles.dragover)
  const onDragLeave = () => ref.current?.classList.remove(styles.dragover)
  return (
    <button
      ref={ref}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDragEnter={onDragEnter}
      className={clsx(styles.root)}
    >
      <InsertSliceIcon stroke="red" />
    </button>
  )
}
