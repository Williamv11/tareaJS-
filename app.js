let stockProductos = [
    {
        id: 1,
        nombre: "Budin",
        cantidad: 1,
        desc: "Torta de brownie",
        precio: 1300,
        img: 'img/Brownie.jpeg'
    },
    {
        id: 2,
        nombre: "Budin de arandanos",
        cantidad: 1,
        desc: "Budin sabor arandanos",
        precio: 500,
        img: 'img/Budin-de-arándanos.jpeg'
    },
    {
        id: 3,
        nombre: "Budin de arandanos",
        cantidad: 1,
        desc: "Budin sabor arandanos",
        precio: 500,
        img: 'img/Budin-de-arándanos2.jpeg'
    },
    {
        id: 4,
        nombre: "Budin de arandanos",
        cantidad: 1,
        desc: "Budin sabor arandanos",
        precio: 500,
        img: 'img/Budin-de-arándanos3.jpeg'
    },
    {
        id: 5,
        nombre: "Budin marmolado",
        cantidad: 1,
        desc: "Budin marmolado con chocolate",
        precio: 500,
        img: 'img/Budin-marmolado.jpeg'
    },
    {
        id: 6,
        nombre: "Budin marmolado",
        cantidad: 1,
        desc: "Budin marmolado con chocolate",
        precio: 500,
        img: 'img/Budin-marmolado2.jpeg'
    },
    {
        id: 7,
        nombre: "Budin marmolado",
        cantidad: 1,
        desc: "Budin marmolado con chocolate",
        precio: 500,
        img: 'img/Budin-marmolado3.jpeg'
    },
    {
        id: 8,
        nombre: "Cheesecake",
        cantidad: 1,
        desc: "Cheescake de frutos rojos",
        precio: 1500,
        img: 'img/Cheesecake.jpg'
    },
    {
        id: 9,
        nombre: "Chocotorta",
        cantidad: 1,
        desc: "Torta de chocolinas",
        precio: 1000,
        img: 'img/Chocotorta.jpeg'
    },
    {
        id: 10,
        nombre: "Cuadrados de brownie",
        cantidad: 1,
        desc: "Porciones de brownie",
        precio: 300,
        img: 'img/Cuadrados-de-brownie.jpeg'
    },
    {
        id: 11,
        nombre: "Cuadrados de limon",
        cantidad: 1,
        desc: "Porciones de budin de limon",
        precio: 300,
        img: 'img/Cuadrados-de-limon.jpeg'
    },
    {
        id: 12,
        nombre: "Cuadrados de limon",
        cantidad: 1,
        desc: "Porciones de budin de limon",
        precio: 300,
        img: 'img/Cuadrados-de-limon2.jpeg'
    },
];

let carrito = []

const contenedor = document.querySelector('#contenedor')

document.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse(localStorage.getItem('carrito')) || []
    mostrarCarrito()
})

stockProductos.forEach((prod) => {
    const {id, nombre, precio, desc, img, cantidad} = prod
    contenedor.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${img}" class="card-img-top mt-2" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: ${precio}</p>
      <p class="card-text">Descripcion: ${desc}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>

      <button  onclick="agregarProducto(${id})" class="btn btn-primary">Agregar al carrito</button>
    </div>
  </div>`
})

function agregarProducto(id){
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
    mostrarCarrito()
}

const mostrarCarrito = () => {
    const modalBody = document.querySelector('.modal .modal-body')
    
    carrito.forEach((prod) => {
        const {id, nombre, img, desc, cantidad, precio} = prod
        modalBody.innerHTML += `
        <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>

        <div>
        <p>Producto: ${nombre}</p>
        <p>Precio: ${precio}</p>
        <p>Cantidad: ${cantidad}</p>

        <button onclick="eliminarProducto(${id})" class="btn btn-danger">Eliminar producto</button>
        </div>

        </div>

        `
    })

    guardarStorage()
}

function eliminarProducto(id){
    const juegoId = id
    carrito = carrito.filter((juego) => juego.id !== juegoId)
    mostrarCarrito()
}

function guardarStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito))
}
