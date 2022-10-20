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
        <option value="#111">Dark</option>
        <option value="#7C66DC">Purple</option>
      </select>
    </div>
  )
}
