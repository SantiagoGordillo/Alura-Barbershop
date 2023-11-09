import productos from 'estructura.js'

const app = document.getElementById("app")

let renderizadoHTML = ``

productos.servicios.forEach(
 
    renderizadoHTML += `
            
    <ul class = "productos">

    <li>
        <h1> ${servicios.nombre} </h1>
            <img src = "${servicios.imagen}">
            <p class = "descripcion"> ${servicios.descripcion} </p>
            <p class = "precio"> $ ${servicios.precio} </p>
        </li>

    </ul>`
)

app.innerHTML = renderizadoHTML