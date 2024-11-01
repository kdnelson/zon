import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppContainer from './AppContainer'
import './index.scss'
import './scss/styles.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContainer />
  </StrictMode>,
)
