import clsx from 'clsx'
import { Box } from 'components/layouts/box'
import styles from './draggable-list.module.css'
import { Draggable } from './draggable'
import tokens from 'token.config.json'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, RootState } from 'pages/_app'
import { InsertSlice } from '../insert-slice'
import { Fragment } from 'react'

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
  const dispatch = useDispatch<Dispatch>()
  const data = useSelector((state: RootState) => state.editor.slices)
  const onDragStart = (idx: number) => dispatch.editor.onDragStart(idx)
  const onDrop = (idx: number) => dispatch.editor.onDrop(idx)
  return (
    <Box
      style={{ gap: VSpace }}
      className={clsx(styles.root, className)}
      as={as}
      {...restProps}
    >
      {data?.map((item, idx) => {
        return (
          <Fragment key={idx}>
            <Draggable
              key={idx}
              idx={idx}
              onStarting={(idx: number) => onDragStart(idx)}
              onDropping={(idx: number) => onDrop(idx)}
            >
              {children(item as any, idx)}
            </Draggable>
            <InsertSlice />
          </Fragment>
        )
      })}
    </Box>
  )
}
