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
              Published <span className={styles.date}>10 minutes ago</span>
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
          <li>
            <p>
              Planned on <a>Halloween</a> release
            </p>
            <span>Last edited by Benjamin Martin</span>
          </li>
          <li>
            <p>
              Planned on <b>11/11/2022 - 14:45PM</b>
            </p>
            <span>Last edited by Anthony Aubertin</span>
          </li>
          <li>
            <p>
              Planned on <b>01/12/2022 - 12:00PM</b>
            </p>
            <span>Last edited by Anthony Aubertin</span>
          </li>
          <li>
            <p>
              Planned on <b>24/12/2022 - 08:00AM</b> during <a>Christmas</a>{' '}
              release
            </p>
            <span>Last edited by Benjamin Martin</span>
          </li>
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
