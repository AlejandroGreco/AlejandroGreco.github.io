/*Definimos las constantes de donde se tomaran los datos de la persona*/
const persona_default = 'js/default-info.json';
const persona_random = 'https://randomuser.me/api/';

/*Definimos las constantes para acceder a los botones por ID*/
const botonHome = document.getElementById("botonHome");
const botonResumen = document.getElementById("botonResumen");
const botonExperiencia = document.getElementById("botonExperiencia");
const botonEducacion = document.getElementById("botonEducacion");
const botonOtraInfo = document.getElementById("botonOtraInfo");
const botonRandom = document.getElementById("botonRandom");

/*Definimos clases constantes para modificar el aspecto
de los botones de la barra de navegación*/
const resaltarBoton = "btn btn-primary btn-lg w-100";
const atenuarBoton = "btn btn-light btn-lg w-100";

/*Definimos las constantes para acceder por ID a la sección home*/
const home = document.getElementById("home");
const nombreHome = document.getElementById("nombreHome");
const fotoHome = document.getElementById("fotoHome");
const ocupacionHome = document.getElementById("ocupacionHome");

/*Definimos las constantes para acceder por ID a la sección
info y las distintas subsecciones que la conforman*/
const info = document.getElementById("info");
const resumen = document.getElementById("resumen");
const acercaDeMi = document.getElementById("acercaDeMi");
const experiencia = document.getElementById("experiencia");
const trabajos = document.getElementById("trabajos");
const educacion = document.getElementById("educacion");
const estudios = document.getElementById("estudios");
const otraInfo1 = document.getElementById("otraInfo1");
const otraInfo2 = document.getElementById("otraInfo2");

/*Definimos las constantes para acceder por ID a la subsección "Detalles Profesionales"*/
const nombreDP = document.getElementById("nombreDP");
const edadDP = document.getElementById("edadDP");
const ubicacionDP = document.getElementById("ubicacionDP");
const telefonoDP = document.getElementById("telefonoDP");
const celularDP = document.getElementById("celularDP");
const emailDP = document.getElementById("emailDP");
const fotoDP = document.getElementById("fotoDP");
const experienciaDP = document.getElementById("experienciaDP");

/*Definimos las constantes para acceder por ID a la subsección "Acerca de mi""*/
const nombreAdm = document.getElementById("nombreAdm");
const edadAdm = document.getElementById("edadAdm");
const ubicacionAdm = document.getElementById("ubicacionAdm");
const telefonoAdm = document.getElementById("telefonoAdm");
const celularAdm = document.getElementById("celularAdm");
const emailAdm = document.getElementById("emailAdm");
const experienciaAdm = document.getElementById("experienciaAdm");

/*Definimos las constantes para acceder por ID a la subsección "Resumen"
pero con los datos obtenidos aleatoriamente al clickear "Random!"*/
const pruebaConcepto = document.getElementById("pruebaConcepto");
const textoPruebaConcepto = document.getElementById("textoPruebaConcepto");

/*Definimos las constantes para acceder por ID a la subsección Footer*/
const direccionPie = document.getElementById("direccionPie");
const ciudadPie = document.getElementById("ciudadPie");
const telefonoPie = document.getElementById("telefonoPie");
const celularPie = document.getElementById("celularPie");
const emailPie = document.getElementById("emailPie");

/*************************************************************************************
Al inicio, el botón resalto es el "Home". Guardamos este estado en una variable global,
la cual utilizaremos como marcador para seguir el estado cual es el botón que se ha
clickeado por última vez. Luego totamos la infomación por default del archivo json.
*************************************************************************************/
let botonResaltado = botonHome;
tomarInfo(persona_default);

/*A continuación se codifican las acciones que se realizan al clickear cada botón*/
botonHome.onclick = function () {
  console.log('El usuario a clickeado el "botonHome"');
  quitarElementos();
  colocarElementos(botonHome);
  tomarInfo(persona_default);
}

botonResumen.onclick = function () {
  console.log('El usuario a clickeado el "botonResumen"');
  quitarElementos();
  colocarElementos(botonResumen);
  tomarInfo(persona_default);
}

botonExperiencia.onclick = function () {
  console.log('El usuario a clickeado el "botonExperiencia"');
  quitarElementos();
  colocarElementos(botonExperiencia);
}

botonEducacion.onclick = function () {
  console.log('El usuario a clickeado el "botonEducacion"');
  quitarElementos();
  colocarElementos(botonEducacion);
}

botonOtraInfo.onclick = function () {
  console.log('El usuario a clickeado el "botonOtraInfo"');
  quitarElementos();
  colocarElementos(botonOtraInfo);
}

botonRandom.onclick = function () {
  console.log('El usuario a clickeado el "botonRandom"');
  quitarElementos();
  colocarElementos(botonRandom);
  tomarInfo(persona_random);
}

/*************************************************************
La siguiente función oculta los elementos según sea el estado
de la variable global "botonResaltado"
*************************************************************/
function quitarElementos() {
  switch (botonResaltado) {
    case botonHome:
      botonHome.className = atenuarBoton;
      nombreHome.style.display = "none";
      fotoHome.style.display = "none";
      ocupacionHome.style.display = "none";
      home.style.display = "none";
      break;
    case botonResumen:
      botonResumen.className = atenuarBoton;
      resumen.style.display = "none";
      acercaDeMi.style.display = "none";
      info.style.display = "none";
      break;
    case botonExperiencia:
      botonExperiencia.className = atenuarBoton;
      experiencia.style.display = "none";
      trabajos.style.display = "none";
      info.style.display = "none";
      break;
    case botonEducacion:
      botonEducacion.className = atenuarBoton;
      educacion.style.display = "none";
      estudios.style.display = "none";
      info.style.display = "none";
      break;
    case botonOtraInfo:
      botonOtraInfo.className = atenuarBoton;
      otraInfo1.style.display = "none";
      otraInfo2.style.display = "none";
      info.style.display = "none";
      break;
    case botonRandom:
      botonRandom.className = atenuarBoton;
      resumen.style.display = "none";
      pruebaConcepto.style.display = "none";
      textoPruebaConcepto.style.display = "none";
      acercaDeMi.style.display = "none";
      info.style.display = "none";
      break;
    default:
      console.log('error: La variable "botonResaltado" no contiene un valor valido!');
      break;
  }
}

/***************************************************************************
La siguiente función muestra los elementos según sea el estado del parámetro
pasado "botonClickeado" y cambia el estado de "botonResaltado".
***************************************************************************/
function colocarElementos(botonClickeado) {
  switch (botonClickeado) {
    case botonHome:
      botonHome.className = resaltarBoton;
      home.style.display = "block";
      nombreHome.style.display = "block";
      fotoHome.style.display = "block";
      ocupacionHome.style.display = "block";
      botonResaltado = botonClickeado;
      break;
    case botonResumen:
      botonResumen.className = resaltarBoton;
      info.style.display = "block";
      resumen.style.display = "block";
      acercaDeMi.style.display = "block";
      botonResaltado = botonClickeado;
      break;
    case botonExperiencia:
      botonExperiencia.className = resaltarBoton;
      info.style.display = "block";
      experiencia.style.display = "block";
      trabajos.style.display = "block";
      botonResaltado = botonClickeado;
      break;
    case botonEducacion:
      botonEducacion.className = resaltarBoton;
      info.style.display = "block";
      educacion.style.display = "block";
      estudios.style.display = "block";
      botonResaltado = botonClickeado;
      break;
    case botonOtraInfo:
      botonOtraInfo.className = resaltarBoton;
      info.style.display = "block";
      otraInfo1.style.display = "block";
      otraInfo2.style.display = "block";
      botonResaltado = botonClickeado;
      break;
    case botonRandom:
      botonRandom.className = resaltarBoton;
      info.style.display = "block";
      resumen.style.display = "block";
      pruebaConcepto.style.display = "block";
      textoPruebaConcepto.style.display = "block";
      acercaDeMi.style.display = "block";
      botonResaltado = botonClickeado;
      break;
    default:
      console.log('error: Se recibió un "botonClickeado" no valido!');
      break;
  }
}

/*************************************************************
Esta función inyecta los datos en los elemtos correspondientes
según el origen que se le pase como parámetro.
**************************************************************/
async function tomarInfo(origen) {
  await fetch(origen)
    .then(respuesta => respuesta.json())
    .then(json => { const info = json.results[0];
      let nombre = `${info.name.first} ${info.name.last}`;
      let direccion = `${info.location.street.name} ${info.location.street.number}`;
      let ubicacion = `${info.location.city}, ${info.location.state}, ${info.location.country} (C.P. ${info.location.postcode})`;
      let telefono = info.phone;
      let celular = info.cell;
      let email = info.email;
      let edad = info.dob.age;
      let experienciaAnios = info.registered.age;
      let foto = info.picture.large;
      
      /*Presentamos información en Home*/
      nombreHome.innerHTML = nombre;
      fotoHome.src = foto;
      
      /*Presentamos información en "Detalles Profesionales"*/
      nombreDP.innerHTML = nombre;
      edadDP.innerHTML = `${edad} años`;
      ubicacionDP.innerHTML = ubicacion;
      experienciaDP.innerHTML = `${experienciaAnios} años`;
      telefonoDP.href = `tel:${telefono}`;
      telefonoDP.innerHTML = telefono;
      celularDP.href = `tel:${celular}`;
      celularDP.innerHTML = celular;
      emailDP.href = `mailto:${email}`;
      emailDP.innerHTML = email;      
      fotoDP.src = foto;
      
      /*Presentamos información "Acerca de mi""*/
      nombreAdm.innerHTML = nombre;
      edadAdm.innerHTML = `${edad} años`;
      ubicacionAdm.innerHTML = ubicacion;
      experienciaAdm.innerHTML = `${experienciaAnios} años`;
      telefonoAdm.href = `tel:${telefono}`;
      telefonoAdm.innerHTML = telefono;
      celularAdm.href = `tel:${celular}`;
      celularAdm.innerHTML = celular;
      emailAdm.href = `mailto:${email}`;
      emailAdm.innerHTML = email;

      /*Presentamos información pie de página*/
      direccionPie.innerHTML = direccion;
      ciudadPie.innerHTML = ubicacion;
      telefonoPie.href = `tel:${telefono}`;
      telefonoPie.innerHTML = `Tel: ${telefono}`;
      celularPie.href = `tel:${celular}`;
      celularPie.innerHTML = `Cel: ${celular}`;
      emailPie.href = `mailto:${email}`;
      emailPie.innerHTML = email;
    });
}
