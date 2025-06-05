import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Home from './pages/Home'
import Details from './pages/Details'
import Layout from './pages/Layout'
import Favoris from './pages/Favoris'

function App() {

  const [data, setData] = useState([])
  const [favoris, setFavoris] = useState([])




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
        <Route path='/' element={<Layout />}>
          <Route index element={<Home data={data} setData={setData} favoris={favoris} setFavoris={setFavoris} />} />
          <Route path='/details/:pays' element={<Details data={data}/>} />
          <Route path='/favoris' element={<Favoris data={data} favoris={favoris} setFavoris={setFavoris} />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
