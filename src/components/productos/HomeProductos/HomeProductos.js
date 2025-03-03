import React from 'react'
import{Tabs, Tab,Row,Col} from "react-bootstrap";
import{ItemProductos} from "../ItemProductos";
import {Datos} from '../../../utils/bd';
import "./HomeProductos.scss";

export function HomeProductos() {
    console.log(Datos);
const fondo={
    tema:{
        backgroundColor:' rgb(212, 224, 237)',
        color:"white",
        fontSize:'20px'
    }
}

  return (
    <div className='container' style={fondo.tema}>
    <Tabs
    
    defaultActiveKey="profile"
    id="uncontrolled-tab-example"
    className="mb-3"
  >
    <Tab eventKey="home" title="Lista de Productos">
    <Row xs={1} sm={2} md={3} lg={4}> 
      {Datos.map((producto,index)=>(
        <Col>
        <ItemProductos key={index} producto={producto} />
        </Col>
      ))}
      </Row>
    </Tab>
  </Tabs>
  </div>
  )
}
