import { Dialog } from 'components/dialogs/dialog-layout/dialog-layout'
import { Dispatch } from 'pages/_app'
import { useDispatch } from 'react-redux'
import styles from './select-image.module.css'

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

export function SelectImage() {
  const dispatch = useDispatch<Dispatch>()
  return (
    <Dialog>
      <Dialog.Title onClose={() => dispatch.dialog.close()}>
        Select an image from Unsplash.com
      </Dialog.Title>
      <Dialog.Content>
        <section className={styles.galery}>
          {IMAGES.map((i, index) => (
            <img
              key={index}
              alt={i.name}
              loading="lazy"
              src={i.value}
              onClick={() => dispatch.dialog.close()}
            />
          ))}
        </section>
      </Dialog.Content>
    </Dialog>
  )
}
