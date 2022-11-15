import { createModel } from '@rematch/core'
import cuid from 'cuid'
import staticz from 'mocks/static.json'
import staticzf from 'mocks/static-filled.json'
import filled from 'mocks/filled.json'

import { RootModel } from '.'

type InsertPayloadType = {
  isEditing: boolean
  variation: VariationType
  position: number
}

export const editor = createModel<RootModel>()({
  state: {
    dragged: 0,
    selected: 0,
    variations: [] as VariationType[],
    static: { ...staticz },
  },
  reducers: {
    onDragStart: (state, payload: number) => {
      state.dragged = payload
      return state
    },
    onSelect: (state, payload: number) => {
      state.selected = payload
      return state
    },
    onFill: (state) => {
      state.variations = filled
      state.static = staticzf as any
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
      const id = cuid()
      switch (payload.isEditing) {
        case true:
          state.variations.splice(state.selected, 1, {
            ...payload.variation,
            id: id,
          })
          return state
        default:
          state.variations.splice(payload.position, 0, {
            ...payload.variation,
            id: id,
          })
          return state
      }
    },
    onDelete: (state) => {
      state.variations.splice(state.selected, 1)
      return state
    },
    onDrop: (state, payload: number) => {
      const temp = state.variations[payload]
      state.variations[payload] = state.variations[state.dragged]
      state.variations[state.dragged] = temp
    },
  },
  effects: (dispatch) => ({
    async onInsertAsync(payload, rootState) {
      dispatch.count.increment(payload)
    },
  }),
})
