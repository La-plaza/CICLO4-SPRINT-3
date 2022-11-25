import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default class ProductsList extends Component {
  render() {
    return <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Papa</td>
          <td>Papa Patusa Cultivada en Boyacá Tutasa</td>
          <td>1 bulto</td>
          <td>50000</td>
          <td> <Button variant="success">Borrar</Button>{' '}
          <Button variant="warning">Actualizar</Button>{' '} </td>

        </tr>
        <tr>
          <td>Mango</td>
          <td>Mango Tomi cultivado en el Tolima la finca el Tobal</td>
          <td>1 caja</td>
          <td>200000</td>
          <td> <Button variant="success">Borrar</Button>{' '}
          <Button variant="warning">Actualizar</Button>{' '} </td>
        </tr>

      </tbody>
    </Table>



    
  }
}
