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
    focusID: 0,
    variations: [] as VariationType[],
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
    onEdit: (
      state,
      payload: { target: string; value: string; index: number }
    ) => {
      state.variations[payload.index].fields[payload.target].value =
        payload.value

      return state
    },
    onInsert: (state, payload: InsertPayloadType) => {
      state.variations.splice(payload.position, 0, payload.variation)
      return state
    },
    onDrop: (state, payload: number) => {
      const temp = state.variations[payload]
      state.variations[payload] = state.variations[state.draggedID]
      state.variations[state.draggedID] = temp
    },
  },
})
