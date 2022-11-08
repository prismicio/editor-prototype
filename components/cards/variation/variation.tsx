import { Box } from 'components/layouts/box'
import styles from './variation.module.css'
import NextImage from 'next/image'
import AddIcon from '@mui/icons-material/Add'

interface SliceProps extends Pick<VariationType, 'image' | 'id' | 'name'> {
  add: () => void
}

export function Variation({
  image,
  name,
  id,
  add,
  ...restProps
}: SliceProps): JSX.Element {
  return (
    <Box as="div" className={styles.root} {...restProps}>
      <NextImage height="150" width="278" src={image} />
      <Box as="button" onClick={add}>
        <AddIcon />
      </Box>
      <p className={styles.sliceName}>{name}</p>
    </Box>
  )
}
