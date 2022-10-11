import 'styles/reset.css'
import 'styles/globals.css'
import type { AppProps } from 'next/app'
import loadingPlugin, { ExtraModelsFromLoading } from '@rematch/loading'
import immerPlugin from '@rematch/immer'
import { Provider } from 'react-redux'
import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import { models, RootModel } from 'models'

type FullModel = ExtraModelsFromLoading<RootModel>

const store = init<RootModel, FullModel>({
  models,
  plugins: [immerPlugin(), loadingPlugin()],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel, FullModel>