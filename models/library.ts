import { createModel } from '@rematch/core'
import { RootModel } from '.'
import slices from 'mocks/slices.json'

const groupBy = function (xs: Array<any>, key: string) {
  return xs.reduce(function (rv, x) {
    ;(rv[x[key]] = rv[key] || []).push(x)
    return rv
  }, {})
}

const INITIAL_STATE = {
  groups: groupBy(slices, 'type'),
  slices: slices,
  filtered: slices,
}

export const library = createModel<RootModel>()({
  state: INITIAL_STATE,
  reducers: {
    // handle state changes with pure functions
    filter(state, payload: string) {
      state.filtered = state.slices.filter((slice) => slice.type == payload)
      return state
    },
    reset(state) {
      state.filtered = INITIAL_STATE.slices
      return state
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async add(payload: { position: number; slice: SliceType }) {
      dispatch.editor.onInsert({
        position: payload.position + 1,
        slice: payload.slice,
      })
    },
  }),
})
