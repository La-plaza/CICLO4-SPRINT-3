import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import ProductTableRow from "./ProductTableRow";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    products: [],
    };
  }
// se ejecuta lo que esta adentro , se renderiza
  componentDidMount() {
    axios
      .get("http://localhost:4000/products/")
      .then((res) => {
        this.setState({
        products: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.products.map((res, i) => {
      return <ProductTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead class="bg-warning form-wrapper rounded-4">
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    );
  }
}
