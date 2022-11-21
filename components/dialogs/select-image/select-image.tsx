import { Dialog } from 'components/dialogs/dialog-layout/dialog-layout'
import { Dispatch } from 'pages/_app'
import { useDispatch } from 'react-redux'
import styles from './select-image.module.css'

const IMAGES = [
  {
    name: 'Image01',
    value:
      'https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/61942b84ec3d406199f07d78_vegalia.png',
  },
  {
    name: 'Image02',
    value:
      'https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619532e016b9ee57c1b529e6_home-feature-1.svg',
  },
  {
    name: 'Image02',
    value:
      'https://images.prismic.io/findone/1365cc05-e0cb-402c-a070-5d920ae56664_gm-image-removebg-preview.png?auto=compress,format',
  },
  {
    name: 'Image03',
    value:
      'https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619578e5eee7c6e8da61a827_home-feature-2.svg',
  },
  {
    name: 'Image03',
    value:
      'https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/61991f9baa14038b9c100d6c_home-feature-4.svg',
  },
  {
    name: 'Image03',
    value:
      'https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/61957abf65d90d1b901c50f7_dru-riley.png',
  },
  {
    name: 'Image03',
    value:
      'https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619f82531c01ed0820276db1_features-3.svg',
  },
  {
    name: 'Image03',
    value:
      'https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619451f5da3d1c898a88673f_nick-greenawalt.png',
  },
  {
    name: 'Image03',
    value:
      'https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/6194643c04fdc36b37ec99d3_features-4.svg',
  },
  {
    name: 'Image03',
    value:
      'https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619957efd3a10ea42e318885_features-5.svg',
  },
  {
    name: 'Image03',
    value:
      'https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619537b960fa2619636d2959_max-ulnichey.png',
  }
]

export function SelectImage(props: any) {
  const dispatch = useDispatch<Dispatch>()
  return (
    <Dialog>
      <Dialog.Title onClose={() => dispatch.dialog.close()}>
        Select an image from Unsplash.com
      </Dialog.Title>
      <Dialog.Content>
        <section className={styles.galery}>
          {IMAGES.map((i, index) => (
            <div className={styles.imageWrapper} key={index}>
              <img
                key={index}
                alt={i.name}
                loading="lazy"
                src={i.value}
                onClick={() => {
                  if (props.index !== undefined) {
                    dispatch.editor.onEditSlice({
                      target: props.name,
                      value: i.value,
                      index: props.index,
                    })
                    dispatch.dialog.close()
                  } else {
                    dispatch.editor.onEditStaticZone({
                      target: props.name,
                      value: i.value,
                    })
                    dispatch.dialog.close()
                  }
                }}
              />
            </div>
          ))}
        </section>
      </Dialog.Content>
    </Dialog>
  )
}
