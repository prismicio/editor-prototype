import clsx from 'clsx'
import { Box } from 'components/layouts/box'
import styles from './draggable-list.module.css'
import { Draggable } from './draggable'
import tokens from 'token.config.json'
import { useState } from 'react'

interface DraggableList<T> {
  children: (item: T, index: number) => React.ReactNode
  items: T[]
  as?: 'ol' | 'ul'
  space?: keyof typeof tokens.space
  className?: string
  separator?: boolean
}

interface IdObj {
  id: string | number
}

export const DraggableList = <T extends IdObj>({
  items,
  children,
  space = 'nil',
  as = 'ul',
  className,
  separator = false,
  ...restProps
}: DraggableList<T>) => {
  const VSpace = `var(--space-${space})`

  /**
   * REDO THIS LATER
   */
  const [draggedID, setDraggedID] = useState<number>(0)
  const [data, setData] = useState(items)
  const onDragStart = (idx: number) => {
    console.log(idx)
    return setDraggedID(idx)
  }

  console.log(data)

  const onDrop = (idx: number) => {
    const item = data[draggedID]

    let list = [...data]
    list.splice(draggedID, 1)

    // update list
    if (draggedID < idx) {
      setData([
        ...list.slice(0, idx - 1),
        item,
        ...list.slice(idx - 1, list.length),
      ])
    } else {
      setData([...list.slice(0, idx), item, ...list.slice(idx, list.length)])
    }
  }

  /**
   * REDO THIS LATER
   */
  return (
    <Box
      style={{ gap: VSpace }}
      className={clsx(styles.root, className)}
      as={as}
      {...restProps}
    >
      {data?.map((item, idx) => {
        return (
          <Draggable
            key={idx}
            idx={idx}
            onStarting={(idx: number) => onDragStart(idx)}
            onDropping={(idx: number) => onDrop(idx)}
          >
            {children(item, idx)}
          </Draggable>
        )
      })}
    </Box>
  )
}
