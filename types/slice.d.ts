type SliceType = {
  id: string
  name: string
  variations: Array<VariationType>
  image?: string
}

type VariationType = {
  id: string
  name: string
  image: string
  fields: any
}
