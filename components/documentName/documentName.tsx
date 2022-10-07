import React, { ReactNode, SyntheticEvent } from 'react'
import clsx from 'clsx'
import styles from './documentName.module.css'
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
interface DocumentNameProps {
}

export default function DocumentName({
  ...restProps
}: DocumentNameProps): JSX.Element {
  return (
    <div className={styles.root}>
      <button className={clsx(styles.buttonSecondary, styles.icon)}><ArrowBackTwoToneIcon /></button>
      <div ><span></span> Improve Your Prismic editing experience</div>
    </div>
  )
}
