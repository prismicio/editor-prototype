import React, { Fragment } from 'react'
import styles from './image.module.css'
import 'react-responsive-modal/styles.css'
import CropOutlinedIcon from '@mui/icons-material/CropOutlined'
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import Field from './simpleField'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'

function Image(props) {
  const dispatch = useDispatch()
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
                dispatch.dialog.open({
                  type: 'SELECT_IMAGE',
                  props: props,
                })
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
          <div className={styles.tile}>
            {props.value ? (
              <img
                onClick={() =>
                  dispatch.dialog.open({
                    type: 'SELECT_IMAGE',
                    props: props,
                  })
                }
                className={styles.image_preview}
                alt="imagze"
                src={props.value}
              />
            ) : (
              <div>
                <button
                  onClick={() =>
                    dispatch.dialog.open({
                      type: 'SELECT_IMAGE',
                      props: props,
                    })
                  }
                >
                  Upload image
                </button>
              </div>
            )}
          </div>
        </div>
        <Field
          placeholder={props.child.alt.config.placeholder}
          label={props.child.alt.config.label}
        />
      </div>
    </Fragment>
  )
}

const ImageField = React.memo(Image)
export default ImageField
