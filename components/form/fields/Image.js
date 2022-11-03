import React, { Fragment } from 'react'
import styles from './image.module.css'
import 'react-responsive-modal/styles.css'
import CropOutlinedIcon from '@mui/icons-material/CropOutlined'
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { Modal } from 'react-responsive-modal'
import Field from './simpleField'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'

function Image(props) {
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()
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
      <div className={styles.image_container}>
        <div className={styles.title}>
          <label>{props.label}</label>

          <div className={styles.buttons}>
            <button className={clsx(styles.secondary, styles.small)} disabled>
              <CropOutlinedIcon /> Crop & Resize
            </button>
            <button
              className={clsx(styles.secondary, styles.small)}
              onClick={() =>
                dispatch.dialog.open({ type: 'SELECT_IMAGE', props: {} })
              }
            >
              <ImageSearchOutlinedIcon /> Replace image
            </button>
            <button className={clsx(styles.secondary, styles.small)} disabled>
              <DeleteOutlineOutlinedIcon /> Clear
            </button>
          </div>
        </div>
        <div className={styles.preview}>
          <img
            onClick={() =>
              dispatch.dialog.open({ type: 'SELECT_IMAGE', props: {} })
            }
            className={styles.image_preview}
            alt="imagze"
            src={props.value}
          />
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
