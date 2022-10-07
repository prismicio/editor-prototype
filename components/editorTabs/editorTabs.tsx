import React, { ReactNode, SyntheticEvent } from 'react'
import clsx from 'clsx'
import styles from './editorTabs.module.css'

interface EditorTabsProps {
}

export default function EditorTabs({
  ...restProps
}: EditorTabsProps): JSX.Element {
  return (
    <div className={styles.root}>
      <ul className={styles.tabs}>
        <li className={styles.active}>Main Content</li>
        <li>Metadata</li>
        <li>Social & SEO</li>
      </ul>
    </div>
  )
}
