let express = require("express");
let mongoose = require("mongoose"); // trae la conexión 
let cors = require("cors"); // conexión cruzada
let bodyParser = require("body-parser"); // permite hacer pruebas de posman con el urlencoded

// Ruta de Express
const pruductRoute = require("../backend/routes/product.route"); // crea sistema de rutas apps rest

// DB Config
//Creamos la conexión db que tiene el MongoURI
const db = require("../backend/database/db").mongoURI; 
// Connect to MongoDB from mLab

// Instanciamos la conexión de mongoose
mongoose.connect('mongodb+srv://laplaza:laplaza2022@cluster0.qpcdev0.mongodb.net/reactdb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {
    console.log("Database sucessfully connected!");
  },
  (error) => {
    console.log("Could not connect to database : " + error);
  }
);

const app = express(); // se instancia el express en la variable app
app.use(bodyParser.json()); // trae funciones nide
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors()); // gestiones cruzadas
app.use("/products", pruductRoute);

// PORT
const port = process.env.PORT || 4000; // permite conectar con mongo db process.env.PORT= servicio externo(nube), local puerto 4000
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

// menejo de errores
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
