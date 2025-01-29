import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Ejemplo01.scss";
export function Ejemplo01() {
  const [contador, setContador] = useState(0);

  const incrementarValor = () => {
    setContador(contador + 1);
  };

  const decrementarValor = () => {
    setContador(contador -1);
  };

  return (
    
    <div className='container-celda'> 
      <h1>Incremento: {contador}</h1>
      <div className="container-celda__button">
      <Button variant="primary" onClick={incrementarValor}><i class="bi bi-apple"></i></Button>
      <Button variant="primary" onClick={decrementarValor}><i class="bi bi-apple"></i></Button>
</div>
      </div>
      
  );
}
