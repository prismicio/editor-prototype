import { EditorContent, useEditor, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import FormatClearIcon from '@mui/icons-material/FormatClear'
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined'
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined'
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined'
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined'
import Looks5OutlinedIcon from '@mui/icons-material/Looks5Outlined'
import Looks6OutlinedIcon from '@mui/icons-material/Looks5Outlined'
import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined'
import styles from './richText.module.css'
import { SlashCommands } from './slashCommands'
import classNames from 'classnames'
import clsx from 'clsx'

const ICONS = {
  Bullet: FormatListBulletedIcon,
  Numbered: FormatListNumberedIcon,
  Preformated: DataObjectOutlinedIcon,
  h1: LooksOneOutlinedIcon,
  h2: LooksTwoOutlinedIcon,
  h3: Looks3OutlinedIcon,
  h4: Looks4OutlinedIcon,
  h5: Looks5OutlinedIcon,
  h6: Looks6OutlinedIcon,
  dudu: FormatListNumberedIcon,
}

function CommandsList(props) {
  const { items, selectItem, selectedIndex } = props
  return (
    <ul className={styles.commands_list_container}>
      <header>Add field</header>
      {items.map(({ title, icon }, idx) => {
        const ComponentIcon = ICONS[icon]
        return (
          <li
            className={clsx(styles.commands_list_item, {
              [styles.active]: selectedIndex === idx,
            })}
            key={idx}
            tabIndex={idx}
            onClick={() => selectItem(idx)}
          >
            <ComponentIcon />
            {title}
          </li>
        )
      })}
    </ul>
  )
}

export default function RichText(props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      SlashCommands.configure({
        commands: [
          {
            id: 0,
            icon: 'h1',
            title: 'Heading 1',
            command: ({ editor, range }) => {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .setNode('heading', { level: 1 })

                .run()
            },
          },
          {
            id: 1,
            icon: 'h2',
            title: 'Heading 2',
            command: ({ editor, range }) => {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .setNode('heading', { level: 2 })

                .run()
            },
          },
          {
            id: 2,
            icon: 'h3',
            title: 'Heading 3',
            command: ({ editor, range }) => {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .setNode('heading', { level: 3 })
                .run()
            },
          },
          {
            id: 3,
            icon: 'h4',
            title: 'Heading 4',
            command: ({ editor, range }) => {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .setNode('heading', { level: 4 })
                .run()
            },
          },
          {
            id: 4,
            icon: 'h5',
            title: 'Heading 5',
            command: ({ editor, range }) => {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .setNode('heading', { level: 5 })
                .run()
            },
          },
          {
            id: 5,
            icon: 'h6',
            title: 'Heading 6',
            command: ({ editor, range }) => {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .setNode('heading', { level: 6 })
                .run()
            },
          },
          {
            id: 6,
            icon: 'Bullet',
            title: 'Bulleted list',
            command: ({ editor, range }) => {
              editor.chain().focus().deleteRange(range).toggleBulletList().run()
            },
          },
          {
            id: 7,
            icon: 'Numbered',
            title: 'Numbered list',
            command: ({ editor, range }) => {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .toggleOrderedList()
                .run()
            },
          },
          {
            id: 8,
            icon: 'Preformated',
            title: 'Preformated',
            command: ({ editor, range }) => {
              editor.chain().focus().deleteRange(range).toggleCodeBlock().run()
            },
          },
        ],
        component: CommandsList,
      }),
    ],
    content: props.value,
    onUpdate({ editor }) {
      props.onRichTextUpdate({
        html: editor.getHTML(),
        text: editor.getText(),
        name: props.name,
      })
    },
  })

  return (
    <div className={styles.richtext_container}>
      <label>{props.label}</label>
      {editor && (
        <EditorContent label={props.label} editor={editor}>
          <div id="richtext" />
          {editor && (
            <BubbleMenu
              className={styles.bubble_menu}
              editor={editor}
              tippyOptions={{ duration: 100 }}
            >
              <select className={styles.selectField}>
                <option>Normal text</option>
                <option>Heading 1</option>
                <option>Heading 2</option>
                <option>Heading 3</option>
                <option>Heading 4</option>
                <option>Heading 5</option>
                <option>Heading 6</option>
              </select>
              <span className={styles.separator}></span>
              <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={clsx(styles.secondary, styles.small)}
              >
                <FormatBoldIcon />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={clsx(styles.secondary, styles.small)}
              >
                <FormatItalicIcon />
              </button>
              <span className={styles.separator}></span>
              <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={clsx(styles.secondary, styles.small)}
              >
                <FormatListBulletedIcon />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={clsx(styles.secondary, styles.small)}
              >
                <FormatListNumberedIcon />
              </button>
              <span className={styles.separator}></span>
              <button
                onClick={() => editor.chain().focus().unsetAllMarks().run()}
                className={clsx(styles.secondary, styles.small)}
              >
                <FormatClearIcon />
              </button>
            </BubbleMenu>
          )}
        </EditorContent>
      )}
    </div>
  )
}
