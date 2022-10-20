import React, { Fragment } from 'react'
import styles from './image.module.css'
import 'react-responsive-modal/styles.css'
import CropOutlinedIcon from '@mui/icons-material/CropOutlined'
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { Modal } from 'react-responsive-modal'
import Field from './simpleField'
import clsx from 'clsx'

const IMAGES = [
  {
    name: 'Image01',
    value:
      'https://cdn.dribbble.com/users/374165/screenshots/15724702/media/d995ba65c484553311789f1f1af480e5.png',
  },
  {
    name: 'Image02',
    value:
      'https://cdn.dribbble.com/users/374165/screenshots/15724702/media/3e51e5cec73ae7de11dd2757d24bdf4e.png',
  },
  {
    name: 'Image03',
    value:
      'https://cdn.dribbble.com/users/374165/screenshots/15724702/media/0f48f073a378d5c805d5cc569aa29986.png',
  },
  {
    name: 'Image03',
    value:
      'https://cdn.dribbble.com/users/374165/screenshots/15211270/media/eec938e9e3467772682230384259a07e.png',
  },
  {
    name: 'Image03',
    value:
      'https://cdn.dribbble.com/users/374165/screenshots/15211270/media/b8d0c4abab59f0932720b0295c3bdcdb.png',
  },
  {
    name: 'Image03',
    value:
      'https://cdn.dribbble.com/users/374165/screenshots/15211270/media/77c15838398c9936d58606134ff8a5ed.png',
  },
]

function Image(props) {
  const [open, setOpen] = React.useState(false)
  const ImageModal = ({ onClose, open }) => (
    <Modal open={open} onClose={onClose} center>
      <header>Select an image from Unsplash.com</header>
      <section>
        {IMAGES.map((i, index) => (
          <img
            key={props.name + index}
            alt={i.name}
            loading="lazy"
            src={i.value}
            onClick={() => {
              props.onChangeImage({ src: i.value, name: props.name })
              onClose()
            }}
          />
        ))}
      </section>
    </Modal>
  )
  return (
    <Fragment>
      <ImageModal open={open} onClose={() => setOpen(false)} />
      <div className={styles.image_container}>
        <div className={styles.title}>
          <label>{props.label}</label>
        </div>
        <div className={styles.preview}>
          <img
            onClick={() => setOpen(true)}
            className={styles.image_preview}
            alt="imagze"
            src={props.value}
          />
        </div>
        <div className={styles.actions}>
          <div className={styles.buttons}>
            <button className={clsx(styles.secondary, styles.small)} disabled>
              <CropOutlinedIcon /> Crop & Resize
            </button>
            <button
              className={clsx(styles.secondary, styles.small)}
              onClick={() => setOpen(true)}
            >
              <ImageSearchOutlinedIcon /> Replace image
            </button>
            <button className={clsx(styles.secondary, styles.small)} disabled>
              <DeleteOutlineOutlinedIcon /> Clear
            </button>
          </div>
        </div>
        <Field
          placeholder={props.child.alt.config.label}
          label={props.child.alt.config.label}
        />
      </div>
    </Fragment>
  )
}

const ImageField = React.memo(Image)
export default ImageField
