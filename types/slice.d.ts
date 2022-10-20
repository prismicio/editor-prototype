type SliceType = {
  id: number
  name: string
  variations: Array<VariationType>
  image: string
}

type VariationType = {
  id: number
  name: string
  image: string
  fields: Array<Object>
}
