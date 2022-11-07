import styles from './selectField.module.css'
export default function Select(props) {
  return (
    <div className={styles.field_container}>
      <label>{props.label}</label>
      <select
        className={styles.selectField}
        name={props.name}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
      >
        <option value="" disabled>
          Select an option
        </option>
        <option value="#111">Green</option>
        <option value="#7C66DC">Pink</option>
        <option value="#FFC800">Yellow</option>
        <option value="#000000">Black</option>
      </select>
    </div>
  )
}
