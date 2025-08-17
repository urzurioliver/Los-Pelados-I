import {
  cantidadGustos,
  elegirProducto,
  ingresarCliente,
  mostrarProductos,
  seleccionarSabores,
} from "./dataEntry.js";

// Cargar archivos
// COMPLETEN USTEDES
let sabores;
let productos;

// Ingresar cliente
let cliente = ingresarCliente();
// Mostrar productos
mostrarProductos(productos);
// Elegir producto
let producto = elegirProducto(productos);
// Elegir cantidad de gustos
let gustos = cantidadGustos(producto.maxGustos);
// Elegir sabores
let saboresElegidos = seleccionarSabores(sabores, gustos);
// Guardar pedido
// COMPLETEN USTEDES
