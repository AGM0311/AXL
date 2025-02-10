import React from "react";
import {Routes,Route} from "react-router-dom"
import {HomeProductos} from "../components/productos";
import {Home} from "../page/Home/Home"
export  function Rutas() {
  return (
    <Routes>
      <Route path='/producto' element={<HomeProductos/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}
