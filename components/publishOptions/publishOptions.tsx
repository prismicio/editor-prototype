import React, { ReactNode, SyntheticEvent } from 'react'
import clsx from 'clsx'
import styles from './publishOptions.module.css'
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone'
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'pages/_app'
import { PublishingOptions } from 'components/controls/publishing-options/publishing-option'
import { DocumentOptions } from 'components/controls/document-options/document-options'
import { toast } from 'react-toastify'

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
          onClick={() => toast.success('Published')}
        >
          Publish
        </button>
        <PublishingOptions />
      </div>
      <DocumentOptions />
    </div>
  )
}

/**<DocumentOptions /> */
