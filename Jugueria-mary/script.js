let productos = [];
let ingresosTotales = 0;

function agregarProducto(){

    let nombre = document.getElementById("nombre").value;
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let precio = parseFloat(document.getElementById("precio").value);

    if(nombre === "" || isNaN(cantidad) || isNaN(precio)){
        alert("Complete todos los campos");
        return;
    }

    let total = cantidad * precio;

    let producto = {
        nombre,
        cantidad,
        precio,
        total
    };

    productos.push(producto);

    ingresosTotales += total;

    mostrarProductos();

    limpiarCampos();
}

function mostrarProductos(){

    let tabla = document.getElementById("tablaProductos");

    tabla.innerHTML = "";

    productos.forEach((producto, index) => {

        tabla.innerHTML += `
            <tr>
                <td>${producto.nombre}</td>
                <td>${producto.cantidad}</td>
                <td>S/ ${producto.precio}</td>
                <td>S/ ${producto.total}</td>
                <td>
                    <button onclick="eliminarProducto(${index})">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });

    document.getElementById("ingresos").textContent =
        ingresosTotales.toFixed(2);
}

function eliminarProducto(index){

    ingresosTotales -= productos[index].total;

    productos.splice(index, 1);

    mostrarProductos();
}

function limpiarCampos(){

    document.getElementById("nombre").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
}