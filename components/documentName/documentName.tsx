import React from 'react'
import clsx from 'clsx'
import styles from './documentName.module.css'
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone'
interface DocumentNameProps {}

export default function DocumentName({
  ...restProps
}: DocumentNameProps): JSX.Element {
  return (
    <div className={styles.root}>
      <button className={clsx(styles.buttonSecondary, styles.icon)}>
        <ArrowBackTwoToneIcon />
      </button>
      <div className={styles.name}>
        <p className={styles.truncate}>
          <span></span> Gumroad – Sell what you know and see what sticks
        </p>
        <p className={styles.history}>
          Edited 17 hours ago - <a>View history</a>
        </p>
      </div>
    </div>
  )
}
