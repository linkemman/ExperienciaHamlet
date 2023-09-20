//----------------------------------------------------------------------------
//------------------------------FECHAS----------------------------------------
//----------------------------------------------------------------------------

let agenda = [
  {
    fecha: "2023-09-06",
    evento: "Experiencia Hamlet",
    lugar: "Tacheles",
    descripcion: " Alsina 1475",
    horario:" 20:30",
    entrada:"https://publico.alternativateatral.com/entradas81556-experiencia-hamlet?o=14"
  },
  {
    fecha: "2023-09-13",
    evento: "Experiencia Hamlet",
    lugar: "Tacheles ",
    descripcion: " Alsina 1475",
    horario:" 20:30",
    entrada:"https://publico.alternativateatral.com/entradas81556-experiencia-hamlet?o=14"
  },
  {
    fecha: "2023-09-20",
    evento: "Experiencia Hamlet",
    lugar: "Xirgu",
    descripcion: " Chacabuco 875",
    horario:" 20:30",
    entrada:"https://publico.alternativateatral.com/entradas81556-experiencia-hamlet?o=14"
  },
  {
    fecha: "2023-09-27",
    evento: "Experiencia Hamlet",
    lugar: "Tachoto",
    descripcion: " Alsina 1475",
    horario:" 20:30hs",
    entrada:"https://publico.alternativateatral.com/entradas81556-experiencia-hamlet?o=14"
  },
  {
    fecha: "2023-10-04",
    evento: "Experiencia Hamlet",
    lugar: "Tacheles",
    descripcion: " Alsina 1475",
    horario: ' 20:30',
    entrada:"https://publico.alternativateatral.com/entradas81556-experiencia-hamlet?o=14"
  },
  {
    fecha: "2023-11-08",
    evento: "Experiencia Hamlet",
    lugar: "Tacheles",
    descripcion: " Alsina 1475",
    horario: ' 20:30',
    entrada:"https://publico.alternativateatral.com/entradas81556-experiencia-hamlet?o=14"
  },
  {
    fecha: "2023-11-15",
    evento: "Experiencia Hamlet",
    lugar: "Tacheles",
    descripcion: " Alsina 1475",
    horario: ' 20:30',
    entrada:"https://publico.alternativateatral.com/entradas81556-experiencia-hamlet?o=14"
  },
  {
    fecha: "2023-11-22",
    evento: " Experiencia Hamlet",
    lugar: "Tacheles",
    descripcion: " Alsina 1475",
    horario: ' 20:30',
    entrada:"https://publico.alternativateatral.com/entradas81556-experiencia-hamlet?o=14"
  },
  {
    fecha: "2023-11-29",
    evento: "Experiencia Hamlet",
    lugar: "Tacheles",
    descripcion: " Alsina 1475",
    horario: ' 20:30',
    entrada:"https://publico.alternativateatral.com/entradas81556-experiencia-hamlet?o=14"
  },
];



// Obtener la fecha actual
const fechaActual = new Date();

// Crear las entradas iniciales con "Todas" seleccionadas
crearEntradas(0);

// Agregar un controlador de eventos para el select
document.getElementById("filtroMes").addEventListener("change", () => {
  const mesSeleccionado = parseInt(document.getElementById("filtroMes").value);
  crearEntradas(mesSeleccionado);
});

function crearEntradas(mesSeleccionado) {
  const contenedorEntradas = document.getElementById("seccion02_entrada");
  contenedorEntradas.innerHTML = ""; // Limpiar el contenido actual

  

  for (const evento of agenda) {
    const fechaEvento = new Date(evento.fecha);
    const mesEvento = fechaEvento.getMonth() + 1; // Los meses son base 0

    if (mesSeleccionado === 0 || mesSeleccionado === mesEvento || mesSeleccionado === 13) {
      if (fechaEvento >= fechaActual || mesSeleccionado === 0 || mesSeleccionado === 13) {
        const entrada = document.createElement("div");
        entrada.className = "seccion02-entrada";

        const diaEvento = fechaEvento.getDate();
        const horaEvento = evento.horario;

        const entradaHTML = `
          <div class="entrada-izq">
            <a href="${evento.entrada}" target="_blank">
              <h4 class="fecha">${diaEvento}</h4>
              <h4 class="mes">${getMes(mesEvento)}</h4>
              <h4 class="hora">${horaEvento}</h4>
            </a>
          </div>
          <div class="linea"></div>
          <div class="entrada-der">
            <a href="${evento.entrada}" target="_blank">
              <h4 class="lugar">${evento.lugar}</h4>
              <h4 class="direccion">${evento.descripcion}</h4>
            </a>
          </div>
        `;

        entrada.innerHTML = entradaHTML;
        contenedorEntradas.appendChild(entrada);
      }
    }
  }
}

function getMes(mes) {
  const meses = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  return meses[mes - 1];
}

//----------------------------------------------------------------------------
//---------------------------MENU---------------------------------------------
//----------------------------------------------------------------------------

const boton_menu = document.getElementById('boton_menu');
const menu = document.getElementById('menu');

// Agrega un controlador de eventos al botón
boton_menu.addEventListener('click', () => {
  // Alterna la clase 'menu-off' en el menú para mostrar u ocultar
  menu.classList.toggle('menu-off');
});


//----------------------------------------------------------------------------
//---------------------------FILTRO-MES---------------------------------------
//----------------------------------------------------------------------------


function filtrarPorMes() {
  // Obtenemos el elemento <select> por su id
  const select = document.getElementById("filtroMes");

  // Obtenemos el valor seleccionado (número del mes) y lo convertimos en un número
  const mesSeleccionado = parseInt(select.value, 10);

  // Obtenemos el contenedor de entradas
  const contenedorEntradas = document.getElementById("seccion02_entrada");

  // Limpiamos las entradas actuales en el contenedor
  contenedorEntradas.innerHTML = "";

  // Obtenemos la fecha actual
  const fechaActual = new Date();

  // Filtramos las entradas por el mes seleccionado
  for (const fechaEspectaculo of agenda) {
     const fechaEspectaculoObj = new Date(fechaEspectaculo.fecha);
     const mesEvento = fechaEspectaculoObj.getMonth() + 1; // Sumamos 1 porque getMonth() devuelve un valor de 0 a 11

     if (mesSeleccionado === mesEvento) {
        // Creamos un elemento div para la entrada
        const entrada = document.createElement("div");
        entrada.className = "seccion02-entrada";

        // Copiamos y modificamos la estructura HTML de una entrada para este evento
        const entradaHTML = `
           <a href="${fechaEspectaculo.entrada}" target="_blank">
           <div class="entrada-izq">
           <a href="${evento.entrada}" target="_blank">
               <h4 class="fecha">${diaEvento}</h4>
               <h4 class="mes">${getMes(mesEvento)}</h4>
               <h4 class="hora">${evento.horario}</h4>
           </a>  
         </div>
         <div class="linea"></div>
         <div class="entrada-der">
             <a href="${evento.entrada}" target="_blank">
                 <h4 class="lugar">${evento.lugar}</h4>
                 <h4 class="direccion">${evento.descripcion}</h4>
             </a>  
         </div>  
       
           </a>
        `;

        // Asignamos el HTML generado a la entrada
        entrada.innerHTML = entradaHTML;

        // Agregamos la entrada al contenedor
        contenedorEntradas.appendChild(entrada);
     }
  }
}
