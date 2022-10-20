import React from 'react'
import styles from './simpleField.module.css'

export default function Field(props) {
  return (
    <div className={styles.field_container}>
      <label>{props.label}</label>
      <input
        name={props.name}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  )
}
