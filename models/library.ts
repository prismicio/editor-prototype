import { createModel } from '@rematch/core'
import { RootModel } from '.'
import slices from 'mocks/slices.json'

const INITIAL_STATE = {
  slices,
  filtered: slices,
  selected: null,
}

export const library = createModel<RootModel>()({
  state: INITIAL_STATE,
  reducers: {
    filter(state, payload: number) {
      state.selected = payload as any
      state.filtered = state.slices.filter((slice) => slice.id === payload)
      return state
    },
    reset(state) {
      state = INITIAL_STATE
      return state
    },
  },
  effects: (dispatch) => ({
    async add(payload: { position: number; slice: SliceType }) {
      dispatch.editor.onInsert({
        position: payload.position + 1,
        slice: payload.slice,
      })
    },
  }),
})
