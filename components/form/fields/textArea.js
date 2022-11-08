import React from 'react'
import Slash from '../../slash'
//import BubbleMenu from "../../bubble-menu/bubble-menu";
import styles from './simpleField.module.css'

export default function Textarea(props) {
  return (
    <div className={styles.field_container}>
      <label>{props.label}</label>
      <textarea
        name={props.name}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  )
}
