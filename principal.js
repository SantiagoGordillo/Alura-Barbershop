import productos from './estructura.js';

console.log(productos)

const app = document.getElementById("app")

let renderizadoHTML = `<ul class = "productos">`

productos.servicios.forEach(
    (servicio)=>{
        renderizadoHTML += `

        <li>
            <h1> ${servicio.nombre} </h1>
                <img src = "${servicio.imagen}">
                <p class = "descripcion"> ${servicio.descripcion} </p>
                <p class = "precio"> $ ${servicio.precio} </p>
            </li>`
    }
)

renderizadoHTML += `</ul>`

app.innerHTML = renderizadoHTML