import { createModel } from '@rematch/core'
import cuid from 'cuid'

import { RootModel } from '.'

const SLICE_TEMPLATES = [
  {
    id: 0,
    name: 'Variation A',
    image: '/slices-thumbnails/a.png',
    fields: {
      title: {
        value: 'Lorem ispum dolor...',
        config: {
          type: 'RichText',
          placeholder: 'Placeholder...',
          label: 'Title',
          props: { label: 'Heading' },
        },
      },
      text: {
        value:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper est ut sem suscipit euismod. Suspendisse potenti. Donec cursus metus sollicitudin ex eleifend faucibus sollicitudin tempor velit. Maecenas id ultricies lectus.</p>',
        config: {
          type: 'RichText2',
          placeholder: 'Placeholder...',
          label: 'Text',
          props: { label: 'Introduction Text' },
        },
      },
      cta: {
        value: 'This is a button',
        config: {
          type: 'KeyText',
          label: 'CTA',
          placeholder: 'Placeholder...',
          props: { label: 'Call to Action label' },
        },
      },
      bg: {
        value: '#111',
        config: {
          type: 'Select',
          label: 'CTA',
          placeholder: 'Placeholder...',
          props: { label: 'Background Color' },
        },
      },
      img: {
        value:
          'https://cdn.dribbble.com/users/374165/screenshots/15724702/media/3e51e5cec73ae7de11dd2757d24bdf4e.png',
        config: {
          type: 'Image',
          label: 'Image',
          placeholder: 'Placeholder...',
          props: { label: 'Feature Image' },
        },
        child: {
          alt: {
            value: 'Alt text',
            config: {
              type: 'KeyText',
              label: 'Alt text',
              placeholder: 'Placeholder...',
              props: { label: 'Alt text' },
            },
          },
        },
      },
    },
  },
  {
    id: 2,
    name: 'Variation A',
    image: '/slices-thumbnails/a.png',
    fields: {
      title: {
        value: 'Lorem ispum dolor...',
        config: {
          type: 'RichText',
          placeholder: 'Placeholder...',
          label: 'Title',
          props: { label: 'Heading' },
        },
      },
    },
  },
]

type InsertPayloadType = {
  variation: VariationType
  position: number
}

export const editor = createModel<RootModel>()({
  state: {
    draggedID: 0,
    selectedID: 0,
    slices: SLICE_TEMPLATES,
  },
  reducers: {
    onDragStart: (state, payload: number) => {
      state.draggedID = payload
      return state
    },
    onSelect: (state, payload: number) => {
      state.selectedID = payload
      return state
    },
    onInsert: (state, payload: InsertPayloadType) => {
      state.slices.splice(payload.position, 0, payload.variation)
      return state
    },
    onDrop: (state, payload: number) => {
      const temp = state.slices[payload]
      state.slices[payload] = state.slices[state.draggedID]
      state.slices[state.draggedID] = temp
    },
  },
})
