import MainPage from 'pages/mainPage/mainPage'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import Layout from 'components/layout/layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<MainPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
