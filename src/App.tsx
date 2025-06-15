import { RouterProvider } from 'react-router-dom'
import router from '@routes/index'
import { GlobalStyle } from '@styles/GlobalStyle'
import './App.css'

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  )
}

export default App
