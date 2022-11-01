import { useContext, useEffect, useRef, useState } from 'react'
//import sytles from './styles.module.css'
import { useOnClickOutside } from 'usehooks-ts'
import cuid from 'cuid'
import { FieldContext } from '../form/context'

const COMMANDS = {
  heading1: {
    label: 'Heading 1',
  },
  heading2: {
    label: 'Heading 2',
  },
}

function AvailableCommands({ value, onClose }) {
  const context = useContext(FieldContext)
  let hideSlash = value.startsWith('/')
    ? value.substr(value.indexOf('/') + 1)
    : value

  const filteredCMDS = Object.keys(COMMANDS).filter((cmd) => {
    return (
      COMMANDS[cmd].label.toLowerCase().search(hideSlash.toLowerCase()) !== -1
    )
  })

  const onClickOnField = () => {
    const generateId = cuid()
    const payload = {
      value: 'addedkeytext',
      config: {
        type: 'KeyText',
        label: generateId,
        props: { label: generateId },
      },
    }
    context.addField(payload, generateId)
    onClose()
  }

  return (
    <ul className="avalaible-commands">
      <span>Add a field</span>
      {filteredCMDS.map((cmd) => (
        <li onClick={onClickOnField} key={cmd} className="command-item">
          {COMMANDS[cmd].label}
        </li>
      ))}
    </ul>
  )
}

export default function Slash() {
  const [show, setShow] = useState(false)
  const [value, setValue] = useState('')
  const ref = useRef(null)
  const onKeyUp = (e) => {
    e.key === '/' ? setShow(true) : setShow(show)
  }
  const onChange = (e) => {
    setValue(e.target.value)
  }

  const handleClickOutside = () => {
    setShow(false)
  }

  const onClose = () => {
    setShow(false)
    setValue('')
  }

  useOnClickOutside(ref, handleClickOutside)

  useEffect(() => {
    !value.includes('/') ? setShow(false) : setShow(show)
  }, [value, show])
  const context = useContext(FieldContext)
  return (
    <div className="field-container" ref={ref}>
      <textarea
        onKeyUp={onKeyUp}
        onChange={onChange}
        value={value}
        placeholder="/"
        className="slash-command"
        name="slash"
      />
      {show && <AvailableCommands onClose={onClose} value={value} />}
    </div>
  )
}
