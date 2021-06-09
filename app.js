let btnCrear = document.querySelector('#btnCrear');

btnCrear.addEventListener("click", ()=> {
    let divNuevo = document.createElement("div");
    let contenido = document.createTextNode("¡Div Nuevo!");
    divNuevo.appendChild(contenido); //añade texto al div creado.
  
    // añade el elemento creado y su contenido al DOM
    let actualDiv = document.getElementById("div1");
    document.body.insertBefore(divNuevo, actualDiv);

    divNuevo.style.backgroundColor = 'red';
    divNuevo.style.height = '200px';
    divNuevo.style.width = '200px';
})