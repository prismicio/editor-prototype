import { Models } from '@rematch/core'
import { library } from './library'
import { editor } from './editor'
export interface RootModel extends Models<RootModel> {
  library: typeof library
  editor: typeof editor
}
export const models: RootModel = { library, editor }
