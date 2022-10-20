import React from 'react'
import styles from './form.module.css'
import Select from './fields/selectField'
import SimpleField from './fields/simpleField'
import Textarea from './fields/textArea'
import RichText from './fields/richText'
import ImageField from './fields/Image'
import { useDispatch, useSelector } from 'react-redux'

const FIELDS = {
  Select: Select,
  KeyText: SimpleField,
  RichText: Textarea,
  RichText2: RichText,
  Image: ImageField,
}

export default function Form({ fields, index }) {
  const dispatch = useDispatch()
  function onChange(e) {
    dispatch.editor.onEdit({
      target: e.target.name,
      value: e.target.value,
      index,
    })
  }
  function onRichTextUpdateChange(e) {
    console.log(e)
  }

  function onChangeImage(e) {
    console.log(e)
  }
  return (
    <div className={styles.fieldSet}>
      {Object.keys(fields).map((key, i) => {
        const type = fields[key].config.type
        const value = fields[key].value
        const child = fields[key]?.child || {}
        const label = fields[key].config.props.label
        const Field = FIELDS[type]
        return (
          <Field
            label={label}
            child={child}
            key={key + i}
            value={value}
            onChange={onChange}
            onRichTextUpdate={onRichTextUpdateChange}
            onChangeImage={onChangeImage}
            name={key}
          />
        )
      })}
    </div>
  )
}
