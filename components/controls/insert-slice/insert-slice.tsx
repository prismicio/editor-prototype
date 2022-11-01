import clsx from 'clsx'
import { Dispatch } from 'pages/_app'
import InsertSliceIcon from 'public/icons/InsertSliceIcon.svg'
import { SyntheticEvent, useRef } from 'react'
import { useDispatch } from 'react-redux'
import styles from './insert-slice.module.css'

interface InsertSliceProps {
  idx: string
  pos: number
}

export function InsertSlice({ idx, pos }: InsertSliceProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const dispatch = useDispatch<Dispatch>()
  const onDragOver = (e: SyntheticEvent) => e.preventDefault()
  const onDragEnter = () => ref.current?.classList.add(styles.dragover)
  const onDragLeave = () => ref.current?.classList.remove(styles.dragover)

  const onDrop = () => {
    ref.current?.classList.remove(styles.dragover)
    dispatch.editor.onDrop(pos)
  }

  return (
    <button
      onClick={() => {
        dispatch.editor.onSelect(pos)
        dispatch.dialog.open({ type: 'SELECT_SLICE', props: { pos: pos + 1 } })
      }}
      ref={ref}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDragEnter={onDragEnter}
      onDrop={onDrop}
      className={clsx(styles.root)}
    >
      insert
      <InsertSliceIcon />
    </button>
  )
}
