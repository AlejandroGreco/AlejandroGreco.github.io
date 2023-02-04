/************************************************************************
 * Declaramos las constantes de donde se tomaran los datos de la persona.
 ************************************************************************/
const persona_default = 'js/default-info.json';
const persona_random = 'https://randomuser.me/api/';

/*************************************************************
 * Declaramos las constantes para acceder a los botones por ID.
 *************************************************************/
const botonHome = document.getElementById("botonHome");
const botonResumen = document.getElementById("botonResumen");
const botonExperiencia = document.getElementById("botonExperiencia");
const botonEducacion = document.getElementById("botonEducacion");
const botonOtraInfo = document.getElementById("botonOtraInfo");
const botonRandom = document.getElementById("botonRandom");

/***********************************************************
 * Declaramos strings constantes que modificarán el aspecto de
 * los botones según cual sea el último que se ha clickeado.
 ***********************************************************/
const resaltarBoton = "btn btn-primary btn-lg w-100";
const atenuarBoton = "btn btn-light btn-lg w-100";

/******************************************************************
 * Declaramos las constantes para acceder por ID a la sección "Home"
 ******************************************************************/
const seccionHome = document.getElementById("seccionHome");
const nombreHome = document.getElementById("nombreHome");
const fotoHome = document.getElementById("fotoHome");
const ocupacionHome = document.getElementById("ocupacionHome");

/**********************************************************************************
 * Declaramos un array constante para que contenga los IDs de toda la sección "Home"
 **********************************************************************************/
const seccionHomeIdArray = [seccionHome, nombreHome, fotoHome, ocupacionHome];

/************************************************************
 * Declaramos las constantes para acceder por ID a la sección
 * info y las distintas subsecciones que la conforman.
 ************************************************************/
const seccionInfo = document.getElementById("seccionInfo");
const resumenTitulo = document.getElementById("resumenTitulo");
const experienciaTitulo = document.getElementById("experienciaTitulo");
const educacionTitulo = document.getElementById("educacionTitulo");
const otraInfoTitulo = document.getElementById("otraInfoTitulo");
const acercaDeMiCuadro = document.getElementById("acercaDeMiCuadro");
const experienciaCuadro = document.getElementById("experienciaCuadro");
const educacionCuadro = document.getElementById("educacionCuadro");
const otraInfoCuadro = document.getElementById("otraInfoCuadro");

/***********************************************************
 * Y a continuación definimos una serie de arrays constantes
 * que engloban los IDs de cada subsección*
 ***********************************************************/
const subseccionResumenIdArray = [seccionInfo, resumenTitulo, acercaDeMiCuadro];
const subseccionExperienciaIdArray = [seccionInfo, experienciaTitulo, experienciaCuadro];
const subseccionEducacionIdArray = [seccionInfo, educacionTitulo, educacionCuadro];
const subseccionOtraInfoIdArray = [seccionInfo, otraInfoTitulo, otraInfoCuadro];

/*************************************************************************************
 * Declaramos las constantes para acceder por ID a la subsección "Random!", que es como
 * la subsección "Resumen" pero con datos obtenidos aleatoriamente de randomuser.me".
 * Declaramos también el array de IDs correspondiente.
 *************************************************************************************/
const pruebaDeConceptoTitulo = document.getElementById("pruebaDeConceptoTitulo");
const pruebaDeConceptoParrafo = document.getElementById("pruebaDeConceptoParrafo");
const subseccionRandomIdArray = [resumenTitulo, acercaDeMiCuadro, pruebaDeConceptoTitulo, pruebaDeConceptoParrafo, seccionInfo];

/*****************************************************************************************************
 * Declaramos las constantes para acceder por ID a elementos de la subsección "Detalles Profesionales".
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
 * Declaramos las constantes para acceder por ID a elementos de la subsección "Acerca de mí".
 *******************************************************************************************/
const nombreAdm = document.getElementById("nombreAdm");
const edadAdm = document.getElementById("edadAdm");
const ubicacionAdm = document.getElementById("ubicacionAdm");
const telefonoAdm = document.getElementById("telefonoAdm");
const celularAdm = document.getElementById("celularAdm");
const emailAdm = document.getElementById("emailAdm");
const experienciaAdm = document.getElementById("experienciaAdm");

/*************************************************************************************
 * Declaramos las constantes para acceder por ID a elementos de la subsección 'footer'.
 *************************************************************************************/
const direccionPie = document.getElementById("direccionPie");
const ubicacionPie = document.getElementById("ubicacionPie");
const telefonoPie = document.getElementById("telefonoPie");
const celularPie = document.getElementById("celularPie");
const emailPie = document.getElementById("emailPie");

/**********************************************************************************
 * Declaramos una serie de arrays con los IDs de todos los elementos cuyo contenido
 * será el mismo, de modo que podamos asignar dicho contenido de manera recursiva.
 **********************************************************************************/
const nombreIdArray = [nombreHome, nombreDP, nombreAdm];
const edadIdArray = [edadDP, edadAdm];
const ubicacionIdArray = [ubicacionDP, ubicacionAdm, ubicacionPie];
const experienciaIdArray = [experienciaDP, experienciaAdm];
const telefonoIdArray = [telefonoDP, telefonoAdm, telefonoPie];
const celularIdArray = [celularDP, celularAdm, celularPie];
const emailIdArray = [emailDP, emailAdm, emailPie];
const fotoIdArray = [fotoDP, fotoHome];

/*****************************************************************************************
 * Al inicio, el botón resalto es el "Home". Guardamos este estado en una variable global,
 * la cual utilizaremos como marcador para seguir el estado cual es el botón que se ha
 * clickeado por última vez. Luego tomamos la información por default de un archivo json.
******************************************************************************************/
let botonResaltado = botonHome;
tomarInfo(persona_default);

/************************************************************************************
 * A continuación se codifican las acciones que se realizarán al clickear cada botón,
 * con el uso de una función que condensa los pasos a seguir según el botón que haya
 * sido clickeado y el origen del que se quieren obtener los datos.
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
  mostrarElementos(botonResaltado, false);
  tomarInfo(origen);
  mostrarElementos(botonClickeado, true);
}

/************************************************************************************************
 * La siguiente función muestra u oculta los elementos de la sección que se le indique utilizando
 * como marcador un "unBoton" e indicando "unEstado": 'true' para mostrar y 'false' para ocultar.
*************************************************************************************************/
function mostrarElementos(unBoton, unEstado) {
    let nuevoEstadoBoton = nuevoEstadoDisplay = "";
    let unArrayDeIds = [];
    if (unEstado) {
        nuevoEstadoBoton = resaltarBoton;
        nuevoEstadoDisplay = "block";
    } else {
        nuevoEstadoBoton = atenuarBoton;
        nuevoEstadoDisplay = "none";
    }
    switch (unBoton) {
        case botonHome:
            unArrayDeIds = seccionHomeIdArray;
            break;
        case botonResumen:
            unArrayDeIds = subseccionResumenIdArray;
            break;
        case botonExperiencia:
            unArrayDeIds = subseccionExperienciaIdArray;
            break;
        case botonEducacion:
            unArrayDeIds = subseccionEducacionIdArray;
            break;
        case botonOtraInfo:
            unArrayDeIds = subseccionOtraInfoIdArray;
            break;
        case botonRandom:
            unArrayDeIds = subseccionRandomIdArray;
            break;
        default:
            console.log('error: La variable "botonResaltado" no contiene un valor valido!');
            break;
    }
    unBoton.className = nuevoEstadoBoton;
    unArrayDeIds.forEach(elemento => elemento.style.display = nuevoEstadoDisplay);
    botonResaltado = unBoton;
}

/**************************************************************************
 * La siguiente función inyecta los datos en los elementos correspondientes
 * según el origen que se le pase como parámetro.
***************************************************************************/
async function tomarInfo(origen) {
  await fetch(origen)
    .then(respuesta => respuesta.json())
    .then(json => {
        /**Confirmamos haber recibido la respuesta (para problemas de conexión)*/
        console.log("Se recibió respuesta al tomar datos");
        /**Declaramos una constante para guardar la respuesta.*/
        const infoRespuesta = json.results[0];

        /********************************************************
         * Guardamos los valores de las etiquetas que necesitamos
         * en distintas variables locales.
         * ******************************************************/
        let nombre = `${infoRespuesta.name.first} ${infoRespuesta.name.last}`;
        let direccion = `${infoRespuesta.location.street.name} ${infoRespuesta.location.street.number}`;
        let ubicacion = `${infoRespuesta.location.city}, ${infoRespuesta.location.state}, ${infoRespuesta.location.country} (C.P. ${infoRespuesta.location.postcode})`;
        let telefono = infoRespuesta.phone;
        let celular = infoRespuesta.cell;
        let email = infoRespuesta.email;
        let edad = infoRespuesta.dob.age;
        let experiencia = infoRespuesta.registered.age;
        let foto = infoRespuesta.picture.large;
        
        /********************************************************************
         * Asignamos la información a los elementos correspondientes de forma
         * recursiva con el uso de los arrays de IDs.
         * ******************************************************************/
        nombreIdArray.forEach(elemento => elemento.innerHTML = nombre);
        edadIdArray.forEach(elemento => elemento.innerHTML = `${edad} años`);
        ubicacionIdArray.forEach(elemento => elemento.innerHTML = ubicacion);
        experienciaIdArray.forEach(elemento => elemento.innerHTML = experiencia);
        telefonoIdArray.forEach(elemento => elemento.href = `tel:${telefono}`);
        telefonoIdArray.forEach(elemento => elemento.innerHTML = telefono);
        celularIdArray.forEach(elemento => elemento.href = `tel:${celular}`);
        celularIdArray.forEach(elemento => elemento.innerHTML = celular);
        emailIdArray.forEach(elemento => elemento.href = `mailto:${email}`);
        emailIdArray.forEach(elemento => elemento.innerHTML = email);
        fotoIdArray.forEach(elemento => elemento.src = foto);
        /**Asignamos la dirección al pie de página.*/
        direccionPie.innerHTML = direccion;
    });
}
