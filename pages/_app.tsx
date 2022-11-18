import 'styles/reset.css'
import 'styles/globals.css'
import styles from 'styles/Home.module.css'
import type { AppProps } from 'next/app'
import loadingPlugin, { ExtraModelsFromLoading } from '@rematch/loading'
import immerPlugin from '@rematch/immer'
import { Provider } from 'react-redux'
import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import { models, RootModel } from 'models'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import toast, { Toaster } from 'react-hot-toast';
type FullModel = ExtraModelsFromLoading<RootModel>

const store = init<RootModel, FullModel>({
  models,
  plugins: [immerPlugin(), loadingPlugin()],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <ToastContainer
        className={styles.toaster}
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel, FullModel>
