import { RootState } from 'pages/_app'
import { useSelector } from 'react-redux'
import { SelectSlice } from './select-slice/select-slice'

const MODALS = {
  SELECT_SLICE: SelectSlice,
}

export function Root() {
  const dialog = useSelector((state: RootState) => state.dialog)
  if (!dialog.type) return null
  const Component = MODALS[dialog.type as keyof typeof MODALS]
  return <Component {...dialog.props} />
}
