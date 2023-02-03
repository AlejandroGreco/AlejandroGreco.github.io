/***********************************************************************
 * Definimos las constantes de donde se tomaran los datos de la persona.
 ***********************************************************************/
const persona_default = 'js/default-info.json';
const persona_random = 'https://randomuser.me/api/';

/*************************************************************
 * Definimos las constantes para acceder a los botones por ID.
 *************************************************************/
const botonHome = document.getElementById("botonHome");
const botonResumen = document.getElementById("botonResumen");
const botonExperiencia = document.getElementById("botonExperiencia");
const botonEducacion = document.getElementById("botonEducacion");
const botonOtraInfo = document.getElementById("botonOtraInfo");
const botonRandom = document.getElementById("botonRandom");

/***********************************************************
 * Definimos strings constantes que moficarán el aspecto de
 * los botones según cual sea el último que se ha cliqueado.
 ***********************************************************/
const resaltarBoton = "btn btn-primary btn-lg w-100";
const atenuarBoton = "btn btn-light btn-lg w-100";

/******************************************************************
 * Definimos las constantes para acceder por ID a la sección "Home"
 ******************************************************************/
const homePage = document.getElementById("homePage");
const nombreHome = document.getElementById("nombreHome");
const fotoHome = document.getElementById("fotoHome");
const ocupacionHome = document.getElementById("ocupacionHome");

/**********************************************************************************
 * Definimos un array constante para que contenga los IDs de toda la sección "Home"
 **********************************************************************************/
const homeArray = [homePage, nombreHome, fotoHome, ocupacionHome];

/***********************************************************
 * Definimos las constantes para acceder por ID a la sección
 * info y las distintassubsecciones que la conforman.
 ***********************************************************/
const infoPage = document.getElementById("infoPage");
const resumen = document.getElementById("resumen");
const acercaDeMi = document.getElementById("acercaDeMi");
const experiencia = document.getElementById("experiencia");
const trabajos = document.getElementById("trabajos");
const educacion = document.getElementById("educacion");
const estudios = document.getElementById("estudios");
const otraInfo1 = document.getElementById("otraInfo1");
const otraInfo2 = document.getElementById("otraInfo2");

/***********************************************************
 * Y a continuación definimos una serie de arrays constantes
 * que engloban los IDs de cada subsección*
 ***********************************************************/
const resumenArray = [resumen, acercaDeMi, infoPage];
const experienciaArray = [experiencia, trabajos, infoPage];
const educacionArray = [educacion, estudios, infoPage];
const otraInfoArray = [otraInfo1, otraInfo2, infoPage];

/*************************************************************************************
 * Definimos las constantes para acceder por ID a la subsección "Random!", que es como
 * la subsección "Resumen" pero con datos obtenidos aleatoriamente de randomuser.me".
 * Definimos tanbién el array de IDs correspondiente.
 *************************************************************************************/
const pruebaConcepto = document.getElementById("pruebaConcepto");
const textoPruebaConcepto = document.getElementById("textoPruebaConcepto");
const randomArray = [resumen, acercaDeMi, pruebaConcepto, textoPruebaConcepto, infoPage];

/*****************************************************************************************************
 * Definimos las constantes para acceder por ID a elementos de la subsección "Detalles Profesionales".
 *****************************************************************************************************/
const nombreDP = document.getElementById("nombreDP");
const edadDP = document.getElementById("edadDP");
const ubicacionDP = document.getElementById("ubicacionDP");
const telefonoDP = document.getElementById("telefonoDP");
const celularDP = document.getElementById("celularDP");
const emailDP = document.getElementById("emailDP");
const fotoDP = document.getElementById("fotoDP");
const experienciaDP = document.getElementById("experienciaDP");

/*******************************************************************************************
 * Definimos las constantes para acceder por ID a elementos de la subsección "Acerca de mí".
 *******************************************************************************************/
const nombreAdm = document.getElementById("nombreAdm");
const edadAdm = document.getElementById("edadAdm");
const ubicacionAdm = document.getElementById("ubicacionAdm");
const telefonoAdm = document.getElementById("telefonoAdm");
const celularAdm = document.getElementById("celularAdm");
const emailAdm = document.getElementById("emailAdm");
const experienciaAdm = document.getElementById("experienciaAdm");

/***********************************************************************************
 * Definimos las constantes para acceder por ID a elementos de la subsección Footer.
 ***********************************************************************************/
const direccionPie = document.getElementById("direccionPie");
const ciudadPie = document.getElementById("ciudadPie");
const telefonoPie = document.getElementById("telefonoPie");
const celularPie = document.getElementById("celularPie");
const emailPie = document.getElementById("emailPie");

/*****************************************************************************************
 * Al inicio, el botón resalto es el "Home". Guardamos este estado en una variable global,
 * la cual utilizaremos como marcador para seguir el estado cual es el botón que se ha
 * clickeado por última vez. Luego totamos la infomación por default de un archivo json.
******************************************************************************************/
let botonResaltado = botonHome;
tomarInfo(persona_default);

/************************************************************************************
 * A continuación se codifican las acciones que se realizarán al clickear cada botón.
 ************************************************************************************/
botonHome.onclick = function () {
  presentarInfo(botonHome, persona_default);
}

botonResumen.onclick = function () {
  presentarInfo(botonResumen, persona_default);
}

botonExperiencia.onclick = function () {
  presentarInfo(botonExperiencia, persona_default);
}

botonEducacion.onclick = function () {
  presentarInfo(botonEducacion, persona_default);
}

botonOtraInfo.onclick = function () {
  presentarInfo(botonOtraInfo, persona_default);
}

botonRandom.onclick = function () {
  presentarInfo(botonRandom, persona_random);
}

function presentarInfo(botonClickeado, origen) {
  console.log(`El usuario a clickeado el "${botonClickeado.id}"`);
  quitarElementos();
  tomarInfo(origen);
  colocarElementos(botonClickeado);
}

/*******************************************************************************************
 * La siguiente función oculta los elementos de la sección que esté "activa" en ese momento.
 * Para ello hace uso del estado de la variable global "botonResaltado".
********************************************************************************************/
function quitarElementos() {
  switch (botonResaltado) {
    case botonHome:
      cambiarElemento(botonHome, homeArray, false);
      break;
    case botonResumen:
      cambiarElemento(botonResumen, resumenArray, false);
      break;
    case botonExperiencia:
      cambiarElemento(botonExperiencia, experienciaArray, false);
      break;
    case botonEducacion:
      cambiarElemento(botonEducacion, educacionArray, false);
      break;
    case botonOtraInfo:
      cambiarElemento(botonOtraInfo, otraInfoArray, false);
      break;
    case botonRandom:
      cambiarElemento(botonRandom, randomArray, false);
      break;
    default:
      console.log('error: La variable "botonResaltado" no contiene un valor valido!');
      break;
  }
}

/**********************************************************************************
 * La siguiente función muestra los elementos según el botón que se haya clickeado.
***********************************************************************************/
function colocarElementos(botonClickeado) {
  switch (botonClickeado) {
    case botonHome:
      cambiarElemento(botonHome, homeArray, true);
      break;
    case botonResumen:
      cambiarElemento(botonResumen, resumenArray, true);
      break;
    case botonExperiencia:
      cambiarElemento(botonExperiencia, experienciaArray, true);
      break;
    case botonEducacion:
      cambiarElemento(botonEducacion, educacionArray, true);
      break;
    case botonOtraInfo:
      cambiarElemento(botonOtraInfo, otraInfoArray, true);
      break;
    case botonRandom:
      cambiarElemento(botonRandom, randomArray, true);
      break;
    default:
      console.log('error: Se recibió un "botonClickeado" no valido!');
      break;
  }
}

/**************************************************************************************************
 * La siguente función cambia el estado de "unBoton" y "unArray" según "unEstado" sea true o false.
 * A su vez, en el caso que sea true, establece "botonResaltado" a "resaltarBoton".
 **************************************************************************************************/
function cambiarElemento(unBoton, unArray, unEstado) {
  if (unEstado) {
    unBoton.className = resaltarBoton;
    unArray.forEach(elemento => elemento.style.display = "block");
    botonResaltado = unBoton;
  } else {
    unBoton.className = atenuarBoton;
    unArray.forEach(elemento => elemento.style.display = "none");
  }
}

/**************************************************************************
 * La siguiente función inyecta los datos en los elementos correspondientes
 * según el origen que se le pase como parámetro.
***************************************************************************/
async function tomarInfo(origen) {
  await fetch(origen)
    .then(respuesta => respuesta.json())
    .then(json => {
      /*Confirmamos haber recibido la respuesta (para problemas de conexión)*/
      console.log("Se recibió respuesta al tomar datos");
      /*Definimos una constante para guardar la respuesta.*/
      const info = json.results[0];
      

      /*Guardamos los valores de las tag que necesitamos en distintas variables loacales*/
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
