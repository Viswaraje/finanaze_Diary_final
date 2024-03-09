import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import About from './components/About.jsx'
import Budget from './components/Budget.jsx'
import Stocks from './components/Stocks.jsx'
import Facts from './components/Facts.jsx'
import Currency from './components/Currency.jsx'
import Hustles from './components/Hustles.jsx'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

      <Route path='' element={<About/>}/>
      <Route path='budget' element={<Budget/>}/>
      <Route path='stocks' element={<Stocks/>}/>
      <Route path='facts' element={<Facts/>}/>
      <Route path='currency' element={<Currency/>}/>

      <Route path='hustles' element={<Hustles/>}/>

    

  

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.StrictMode>
  
  <RouterProvider router={router}/>
  </React.StrictMode>,
  </React.StrictMode>,
)
