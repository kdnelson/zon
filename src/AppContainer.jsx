// import Provider from 'react-redux'
// import { PersistGate } from 'redux-persist/lib/integration/react'
// import { CookiesProvider } from 'react-cookie'
// import { configureStore } from './middleware/store'
import App from './App'
import './App.scss'

export const AppContainer = () => {
  //const { store, persistor } = configureStore()

  return (
    // <Provider store={store}>
    //   <PersistGate persistor={persistor}>
    //     <CookiesProvider>
          <App />
    //     </CookiesProvider>
    //   </PersistGate>
    // </Provider>
  )
}

export default AppContainer
