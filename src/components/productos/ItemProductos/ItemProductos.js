import React from 'react'
//import {Datos} from '../../../utils/bd';


export function ItemProductos({producto}) {
  return (
    <div>
         <div className="card" style={{ width: '18rem' }}>
  <img src={producto.imagen} class="card-img-top" alt="{producto.nombre}"  />
  <div className="card-body">
    <h5 className="card-title">{producto.nombre}</h5>
    
  </div>
  <ul class="list-group list-group-flush">
    <li className="list-group-item">Precio: ${producto.precio}</li>
    <li className="list-group-item">Cantidad disponible: {producto.cantidad}</li>
    <li className="list-group-item">{producto.contenido || producto.unidad}</li>
  </ul>
  <div class="card-body">
  </div>
</div>
    </div>
  )
}
