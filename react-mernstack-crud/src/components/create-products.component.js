import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class CreateProducts extends Component {

  constructor(props) {
    super(props);
    this.onChangeProductsName = this.onChangeProductsName.bind(this);
    this.onChangeProductsDescription= this.onChangeProductsDescription.bind(this);
    this.onChangeProductsPrecio= this.onChangeProductsPrecio.bind(this);
    this.onChangeProductsCantidad= this.onChangeProductsCantidad.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      descripcion: "",
      precio: "",
      cantidad: "",     
    };

  }
  onChangeProductsName(e){
    this.setState({ name: e.target.value});
  }

  onChangeProductsDescription (e) {
    this.setState({descripcion: e.target.value});
  }
  onChangeProductsPrecio (e) {
    this.setState({precio: e.target.value});
  }
  onChangeProductsCantidad (e) {
    this.setState({cantidad: e.target.value});
  }
  onSubmit(e) {
  e.preventDefault();

  const productsObject = {
    name: this.state.name,
    descripcion: this.state.descripcion,
    precio: this.state.precio,
    cantidad: this.state.cantidad,
  };
  axios
  .post("http://localhost:4000/products/create-products", productsObject)
  .then((res) => console.log(res.data));
this.setState({ name: "", descripcion: "", precio: "",cantidad: "",});


  }


  render() {
    return (
      
    
      <div class="container d-flex justify-content-center aline-100 bg-warning form-wrapper rounded-4 " >
          

  <Form onSubmit ={this.onSubmit} >
        <div to={"/create-products"} className="nav-link" >
            <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/2622/2622693.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{' '}            
            CREAR PRODUCTO
            </div>
   
      <Form.Group className="mb-1" controlId="Name">        
        <Form.Label>Nombre del Producto</Form.Label>
        <Form.Control
         type="nombre" 
         placeholder="Ingrese el nombre del producto" 
         value = {this.state.name}
         onChange ={this.onChangeProductsName}
         />
      </Form.Group>



       <Form.Group className="mb-1" controlId="Descripcion">        
        <Form.Label>Descripción del Producto</Form.Label>
        <Form.Control 
        type="description" 
        placeholder="Ingrese la descripcion del producto"
        value = {this.state.descripcion}
         onChange ={this.onChangeProductsDescription}        
        />
        <Form.Text className="text-muted">
        El producto debe quedar registrado con un nombre real y único, ya que
        podrá ser más fácil su ubicación por otros usuarios. Para la creación de un producto se debe
        tener en cuenta el, Nombre del producto, Descripción del producto (Tipo de producto,
         Calidad/Estado, Tamaño, Disponibilidad), de lo contrario no quedará guardado en el sistema.                                      
        </Form.Text>
      </Form.Group>

  
      <Form.Group className="mb-1" controlId="Precio">        
        <Form.Label>Precio</Form.Label>
        <Form.Control 
        type="precio"
         placeholder="Ingrese el precio del producto"
         value = {this.state.precio}
         onChange ={this.onChangeProductsPrecio}  
         />
      </Form.Group>

      <Form.Group className="mb-1" controlId="Cantidad" >        
        <Form.Label>Cantidad</Form.Label>
        <Form.Control 
        type="precio" 
        placeholder="Ingrese la cantidad del producto"
        value = {this.state.cantidad}
         onChange ={this.onChangeProductsCantidad}  
        />
      </Form.Group>


          <Button
            variant="success"
            size="lg"
            block="block"
            type="submit"
            className="mt-4"
          >
            Crear Producto
          </Button>
        </Form>
  
      </div>
     
      );
     
  }
}
