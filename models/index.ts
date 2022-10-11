import { Models } from '@rematch/core'
import { library } from './library'
import { editor } from './editor'
import { dialog } from './dialog'
export interface RootModel extends Models<RootModel> {
  library: typeof library
  editor: typeof editor
  dialog: typeof dialog
}
export const models: RootModel = { library, editor, dialog }
