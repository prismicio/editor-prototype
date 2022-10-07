import React, { ReactNode, SyntheticEvent } from 'react'
import clsx from 'clsx'
import styles from './publishOptions.module.css'
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone'
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone'

interface PublishOptionsProps {
}

export default function PublishOptions({
  ...restProps
}: PublishOptionsProps): JSX.Element {
  return (
    <div className={styles.root}>
      <button className={styles.buttonSecondary}>Save</button>
      
      <div className={styles.buttonGroup}>
        <button className={clsx(styles.buttonGroupPrimary, styles.buttonGroupPrimaryLeft)}>Publish</button>
        <button className={clsx(styles.buttonGroupPrimary, styles.buttonGroupPrimaryRight, styles.icon)}><CalendarTodayTwoToneIcon /></button>
      </div>

      <button className={clsx(styles.buttonSecondary, styles.icon)}><MoreVertTwoToneIcon /></button>
    </div>
  )
}
