import { createModel } from '@rematch/core'
import cuid from 'cuid'

import { RootModel } from '.'

type InsertPayloadType = {
  variation: VariationType
  position: number
}

export const editor = createModel<RootModel>()({
  state: {
    draggedID: 0,
    selectedID: 0,
    slices: [] as VariationType[],
  },
  reducers: {
    onDragStart: (state, payload: number) => {
      state.draggedID = payload
      return state
    },
    onSelect: (state, payload: number) => {
      state.selectedID = payload
      return state
    },
    onInsert: (state, payload: InsertPayloadType) => {
      state.slices.splice(payload.position, 0, payload.variation)
      return state
    },
    onDrop: (state, payload: number) => {
      const temp = state.slices[payload]
      state.slices[payload] = state.slices[state.draggedID]
      state.slices[state.draggedID] = temp
    },
  },
})
