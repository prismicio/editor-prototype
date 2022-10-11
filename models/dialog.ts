import { createModel } from '@rematch/core'
import { RootModel } from '.'

interface DialogProps {
  dialog: null | string
}

export const dialog = createModel<RootModel>()({
  state: {
    dialog: null,
  } as DialogProps,
  reducers: {
    open(state, payload: string | null) {
      state.dialog = payload
      return state
    },
    close(state) {
      state.dialog = null
      return state
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload: number, state) {
      console.log('This is current root state', state)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      dispatch.count.increment(payload)
    },
  }),
})
