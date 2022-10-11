import clsx from 'clsx'
import { Dispatch } from 'pages/_app'
import InsertSliceIcon from 'public/icons/InsertSliceIcon.svg'
import { SyntheticEvent, useRef } from 'react'
import { useDispatch } from 'react-redux'
import styles from './insert-slice.module.css'

interface InsertSliceProps {
  idx: number
}

export function InsertSlice({ idx }: InsertSliceProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const dispatch = useDispatch<Dispatch>()
  const onDragOver = (e: SyntheticEvent) => e.preventDefault()
  const onDragEnter = () => ref.current?.classList.add(styles.dragover)
  const onDragLeave = () => ref.current?.classList.remove(styles.dragover)

  const onDrop = () => {
    ref.current?.classList.remove(styles.dragover)
    dispatch.editor.onDrop(idx)
  }

  return (
    <button
      onClick={() => dispatch.dialog.open({ type: 'SELECT_SLICE', props: {} })}
      ref={ref}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDragEnter={onDragEnter}
      onDrop={onDrop}
      className={clsx(styles.root)}
    >
      <InsertSliceIcon />
    </button>
  )
}

//<InsertSliceIcon />
