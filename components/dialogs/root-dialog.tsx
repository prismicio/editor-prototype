import { RootState } from 'pages/_app'
import { useSelector } from 'react-redux'
import { ScheduleDocument } from './schedule-document/schedule-document'
import { SelectImage } from './select-image/select-image'
import { SelectSlice } from './select-slice/select-slice'

const DIALOGS = {
  SELECT_SLICE: SelectSlice,
  SCHEDULE: ScheduleDocument,
  SELECT_IMAGE: SelectImage,
}

export function RootDialog() {
  const dialog = useSelector((state: RootState) => state.dialog)
  if (!dialog.type) return null
  const Component = DIALOGS[dialog.type as keyof typeof DIALOGS]
  return <Component {...(dialog.props as any)} />
}
