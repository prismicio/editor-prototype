import { createModel } from '@rematch/core'
import cuid from 'cuid'
import staticz from 'mocks/static.json'

import { RootModel } from '.'

type InsertPayloadType = {
  variation: VariationType
  position: number
}

export const editor = createModel<RootModel>()({
  state: {
    draggedID: 0,
    selectedID: 0,
    variations: [] as VariationType[],
    static: { ...staticz },
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
    onEditSlice: (
      state,
      payload: { target: string; value: string; index: number }
    ) => {
      state.variations[payload.index].fields[payload.target].value =
        payload.value

      return state
    },
    onEditStaticZone: (state, payload: { target: string; value: string }) => {
      const field = state.static.fields as any
      field[payload.target].value = payload.value
      return state
    },
    onInsert: (state, payload: InsertPayloadType) => {
      state.variations.splice(payload.position, 0, {
        ...payload.variation,
        id: cuid(),
      })
      return state
    },
    onDelete: (state, payload: string) => {
      state.variations = state.variations.filter((item) => item.id != payload)
      return state
    },
    onDrop: (state, payload: number) => {
      const temp = state.variations[payload]
      state.variations[payload] = state.variations[state.draggedID]
      state.variations[state.draggedID] = temp
    },
  },
  effects: (dispatch) => ({
    async onInsertAsync(payload, rootState) {
      dispatch.count.increment(payload)
    },
  }),
})
