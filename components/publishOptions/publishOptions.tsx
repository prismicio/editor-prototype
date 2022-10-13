import React, { ReactNode, SyntheticEvent } from 'react'
import clsx from 'clsx'
import styles from './publishOptions.module.css'
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone'
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'pages/_app'

interface PublishOptionsProps {}

export default function PublishOptions({
  ...restProps
}: PublishOptionsProps): JSX.Element {
  const dispatch = useDispatch<Dispatch>()
  return (
    <div className={styles.root}>
      <button className={styles.buttonSecondary}>Save</button>

      <div className={styles.buttonGroup}>
        <button
          className={clsx(
            styles.buttonGroupPrimary,
            styles.buttonGroupPrimaryLeft
          )}
        >
          Publish
        </button>
        <button
          onClick={() => dispatch.dialog.open({ type: 'SCHEDULE', props: {} })}
          className={clsx(
            styles.buttonGroupPrimary,
            styles.buttonGroupPrimaryRight,
            styles.icon
          )}
        >
          <CalendarTodayTwoToneIcon />
        </button>
      </div>

      <button className={clsx(styles.buttonSecondary, styles.icon)}>
        <MoreVertTwoToneIcon />
      </button>
    </div>
  )
}
