import { createModel } from '@rematch/core'
import { RootModel } from '.'

const SLICE_TEMPLATES = [
  {
    id: 0,
    name: 'Slice A',
    image: '/slices-thumbnails/a.png',
  },
  {
    id: 1,
    name: 'Slice B',
    image: '/slices-thumbnails/b.png',
  },
  {
    id: 2,
    name: 'Slice C',
    image: '/slices-thumbnails/c.png',
  },
]

export const editor = createModel<RootModel>()({
  state: {
    draggedID: 0,
    slices: SLICE_TEMPLATES,
  },
  reducers: {
    onDragStart: (state, payload: number) => {
      state.draggedID = payload
      return state
    },
    onDrop: (state, payload: number) => {
      const temp = state.slices[payload]
      state.slices[payload] = state.slices[state.draggedID]
      state.slices[state.draggedID] = temp
    },
  },
})
