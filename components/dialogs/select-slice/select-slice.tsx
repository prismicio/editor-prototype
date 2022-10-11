import { Dispatch } from 'pages/_app'
import { useDispatch } from 'react-redux'

export function SelectSlice() {
  const dispatch = useDispatch<Dispatch>()
  return (
    <div>
      <button onClick={() => dispatch.dialog.close()}>close</button>
      <div>Select Slice</div>
    </div>
  )
}
