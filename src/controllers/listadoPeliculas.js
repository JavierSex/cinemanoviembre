let peliculas=[
    {
        nombre:"Avatar 2",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajavier-f9274.appspot.com/o/avatar2Pre.png?alt=media&token=3126a80b-64f6-4cbd-9106-39545726e32f"

    },
    {
        nombre:"El llamado del anticristo",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajavier-f9274.appspot.com/o/elLlamadoDelAnticristoPre.png?alt=media&token=df45862a-6f7f-4b58-82fc-efc00e2ae8f4"
    },
    {
        nombre:"El Menú",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajavier-f9274.appspot.com/o/elMenuPre.png?alt=media&token=b78170fc-e0bb-4ae4-b50b-aebee376bd34"
    },
    {
        nombre:"Gato con Botas",
        duracion:104,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajavier-f9274.appspot.com/o/gatoConBotasPre.png?alt=media&token=262c41a9-cb8b-441c-b863-c17c264daed0"
    },
    {
        nombre: "La gran tormenta",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajavier-f9274.appspot.com/o/laGranTormentaPre.jpg?alt=media&token=b5bd60ef-0d4e-4411-94e5-be6c22fb8a56"
    },
    {
        nombre: "La llorona",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajavier-f9274.appspot.com/o/laLloronaPre.png?alt=media&token=5612fdb1-6a2f-4f2d-b4e0-b2d3997a1f20"
    },
    {
        nombre: "Lilo, Lilo, Cocodrilo",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajavier-f9274.appspot.com/o/lyleCocodriloPre.jpg?alt=media&token=099972e6-29fc-46e9-94b5-ebfa6c519fa8"
    },
    {
        nombre: "Mar de sangre",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajavier-f9274.appspot.com/o/marDeSangrePre.png?alt=media&token=03631042-8442-4efd-90d5-6e158a45300e"
    },
    {
        nombre: "One Piece Film Red",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajavier-f9274.appspot.com/o/onePieceRedPre.png?alt=media&token=12ed362c-d4f5-4e26-97a4-f4f3e7eb4224"
    },
    {
        nombre: "Rebelión",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajavier-f9274.appspot.com/o/rebelionPre.png?alt=media&token=7e4cea25-f435-4fea-a3f7-76c0263e8e2a"
    }
]

//creamos una referencia al espacio HTML donde queremos
//hacer el render(Pintar etiquetas)
//ESTUDIAR LAS API REST
let etiquetaFila=document.getElementById("fila")


//so ya tengo datos que normalmente llegan al front
//como un arreglo de objetos debemos recorrer y depurar dicha informacion
peliculas.forEach(function(pelicula){
    //para pintar la informacion de cada pelicula
    //debemos aplicar una tecnica conocida como traversing
    //traversing=crear etiquetas de html desde js
    let columna=document.createElement("div")

    columna.classList.add("col", "mt-5", "mb-5")

    //traversing
    let tarjeta=document.createElement("div")

    tarjeta.classList.add("card","h-100","shadow")

    //traversing
    let poster=document.createElement("img")

    poster.classList.add("img-fluid","w-100")
    poster.src=pelicula.poster

    //traversing
    let nombre=document.createElement("h3")

    nombre.classList.add("text-center","fw-bold")
    nombre.textContent=pelicula.nombre

    //traversing
    let duracion=document.createElement("h5")

    duracion.classList.add("text-center")
    duracion.textContent="duracion: " + pelicula.duracion + "min"

    //PADRES E HIJOS
    etiquetaFila.appendChild(columna)
    columna.appendChild(tarjeta)
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(duracion)

})