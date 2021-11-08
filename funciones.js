// Variables utilizadas para nuestra pagina web
const baseDeDatos = [
  {
      id: 1,
      nombre: 'Papa',
      precio: 1000,
      
  },
  {
      id: 2,
      nombre: 'Cebolla',
      precio: 500,
      
  },
  {
      id: 3,
      nombre: 'banano',
      precio: 800,
      
  },
  {
      id: 4,
      nombre: 'Fresas',
      precio: 600,
      
  }

];

let carrito = [];
let total = 0;
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones

/**
* Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
*/
function renderizarProductos() {
  baseDeDatos.forEach((info) => {
      // Estructura
      const miNodo = document.createElement('div');
      miNodo.classList.add('card', 'col-sm-4');
      // Body
      const miNodoCardBody = document.createElement('div');
      miNodoCardBody.classList.add('card-body');
      // Titulo
      const miNodoTitle = document.createElement('h5');
      miNodoTitle.classList.add('card-title');
      miNodoTitle.textContent = info.nombre;
      // Precio
      const miNodoPrecio = document.createElement('p');
      miNodoPrecio.classList.add('card-text');
      miNodoPrecio.textContent = info.precio + '';
      // Boton 
      const miNodoBoton = document.createElement('button');
      miNodoBoton.classList.add('btn', 'btn-primary');
      miNodoBoton.textContent = '+';
      miNodoBoton.setAttribute('marcador', info.id);
      miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
      // Insertamos
      miNodoCardBody.appendChild(miNodoImagen);
      miNodoCardBody.appendChild(miNodoTitle);
      miNodoCardBody.appendChild(miNodoPrecio);
      miNodoCardBody.appendChild(miNodoBoton);
      miNodo.appendChild(miNodoCardBody);
      DOMitems.appendChild(miNodo);
  });
}

/**
* Evento para añadir un producto al carrito de la compra
*/
function anyadirProductoAlCarrito(evento) {
  // Anyadimos el Nodo a nuestro carrito
  carrito.push(evento.target.getAttribute('marcador'))
  // Calculo el total
  calcularTotal();
  // Actualizamos el carrito 
  renderizarCarrito();

}
$(document).ready(function(){
  $("h1").click(function(){
    $(this).hide();
  });
});
  $("button").click(function(){
      $("h1").show();
  });
  
