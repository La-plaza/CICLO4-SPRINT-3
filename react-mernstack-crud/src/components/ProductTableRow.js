import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import axios from "axios";


export default class ProductTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  deleteProduct() {
    axios
      .delete(
        "http://localhost:4000/products/delete-product/" + this.props.obj._id
      )
      .then((res) => {
        console.log("Product successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (       
        <tr class="bg-light form-wrapper rounded-4">
          <td>{this.props.obj.name}</td>
          <td>{this.props.obj.descripcion}</td>          
          <td>{this.props.obj.precio}</td>
          <td>{this.props.obj.cantidad}</td>
          <td>  <Link
            className="edit-link  "
            path={"product/:id"}
            to={"/edit-product/" + this.props.obj._id}
          >
            Editar
          </Link>
          <Button  className=" my-2"onClick={this.deleteProduct} size="sm" variant="success">
            Borrar
          </Button></td>
        </tr>
    );


    
  }
}
