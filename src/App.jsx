import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Home from './pages/Home'
import Details from './pages/Details'
import Layout from './pages/Layout'

function App() {

  const [data, setData] = useState([])
  const [darkMode,setDarkMode] = useState(true)

  function togleMode() {
    setDarkMode(!darkMode)
  }

  // Importation de l'API
  useEffect(()=> {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => setData(response.data))
      .catch(error => console.log(error))
  },[])
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout darkMode={darkMode} togleMode={togleMode}/>}>
          <Route index element={<Home data={data} setData={setData} />} />
          <Route path='/details/:pays' element={<Details data={data}/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
