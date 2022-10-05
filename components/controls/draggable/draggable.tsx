import { ReactNode, SyntheticEvent, useRef } from 'react'
import clsx from 'clsx'
import styles from './draggable.module.css'

interface DraggableProps {
  onStarting: any
  onDropping: any
  children?: ReactNode
  className?: string
  idx: number
}

export const Draggable = ({
  idx,
  onStarting,
  onDropping,
  children,
  className,
  ...restProps
}: DraggableProps) => {
  const ref = useRef<HTMLLIElement>(null)
  const onDragEnter = () => ref.current?.classList.add(styles.dragover)
  const onDragLeave = () => ref.current?.classList.remove(styles.dragover)
  const onDragOver = (e: SyntheticEvent) => e.preventDefault()

  const onDragStart = () => {
    ref.current?.classList.add(styles.dragstart)
    onStarting(idx)
  }

  const onDragEnd = () => {
    ref.current?.classList.remove(styles.dragstart)
  }

  const onDrop = () => {
    ref.current?.classList.remove(styles.dragover)
    onDropping(idx)
  }

  return (
    <li
      draggable
      key={idx}
      ref={ref}
      className={clsx(styles.root, className)}
      onDragLeave={onDragLeave}
      onDragEnd={onDragEnd}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragStart={onDragStart}
      onDrop={onDrop}
      {...restProps}
    >
      {children}
    </li>
  )
}
