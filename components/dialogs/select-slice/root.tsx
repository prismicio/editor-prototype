import { RootState } from 'pages/_app'
import { useSelector } from 'react-redux'
import { SelectSlice } from './select-slice'

type Modals = 'SELECT_SLICE'

const MODALS = {
  SELECT_SLICE: SelectSlice,
}

export function Root() {
  const type = useSelector((state: RootState) => state.dialog.dialog)
  if (!type) {
    return null
  } else {
    const Component = MODALS['SELECT_SLICE']
    return type ? <Component /> : null
  }
}
