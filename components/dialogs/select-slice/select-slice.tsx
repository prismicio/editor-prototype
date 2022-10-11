import clsx from 'clsx'
import { Box } from 'components/layouts/box'
import { Dispatch } from 'pages/_app'
import { useDispatch } from 'react-redux'
import styles from './select-slice.module.css'

export function SelectSlice() {
  const dispatch = useDispatch<Dispatch>()
  return (
    <Box as="div" className={clsx(styles.overlay)}>
      <Box as="div" className={clsx(styles.root)}>
        <Box as="button" onClick={() => dispatch.dialog.close()}>
          close
        </Box>
        <div>Select Slice</div>
      </Box>
    </Box>
  )
}
