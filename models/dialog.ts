import { createModel } from '@rematch/core'
import { RootModel } from '.'

interface DialogProps {
  type: string | null
  props: object
}

const INITIAL_STATE = {
  type: null,
  props: {},
}

export const dialog = createModel<RootModel>()({
  state: {
    type: null,
    props: {},
  } as DialogProps,
  reducers: {
    open(state, payload: DialogProps) {
      state.type = payload.type
      state.props = payload.props
      return state
    },
    close(state) {
      state = INITIAL_STATE
      return state
    },
  },
})
