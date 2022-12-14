import React, { ReactNode, SyntheticEvent } from 'react'
import styles from './versionPanel.module.css'
import NextImage from 'next/image'
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone'
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone'

interface VersionPanelProps {}

export default function VersionPanel({
  ...restProps
}: VersionPanelProps): JSX.Element {
  return (
    <div className={styles.root}>
      <article className={styles.panelItem}>
        <header>
          <div className={styles.headerIcon}>
            <PublicTwoToneIcon />
          </div>
          Published
        </header>
        <ul>
          <li>
            <p>
              Published <b>10 minutes ago</b>
            </p>
            <span>by Renaud Bressand</span>
          </li>
        </ul>
      </article>

      <article className={styles.panelItem}>
        <header>
          <div className={styles.headerIcon}>
            <EditTwoToneIcon />
          </div>
          Drafted
        </header>
        <ul>
          <li className={styles.active}>
            <p>
              Edited <b>2 minutes ago</b>
            </p>
            <span>by Benjamin Martin</span>
          </li>
        </ul>
      </article>

      <article className={styles.panelItem}>
        <header>
          <div className={styles.headerIcon}>
            <CalendarTodayTwoToneIcon />
          </div>
          Planned
        </header>
        <ul>
          <li>
            <p>
              Planned on <b>10/09/2022 - 12:00PM</b>
            </p>
            <span>Last edited by Anthony Aubertin</span>
          </li>
        </ul>
      </article>
    </div>
  )
}
