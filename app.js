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

// Encontrar la próxima fecha
let proximoEvento = null;

for (const evento of agenda) {
  const fechaEvento = new Date(evento.fecha);
  if (fechaEvento >= fechaActual && (!proximoEvento || fechaEvento < proximoEvento.fecha)) {
    proximoEvento = { fecha: fechaEvento, evento: evento };
  }
}

// Actualizar la información en el HTML
if (proximoEvento) {
  const opcionesDeFormato = { weekday: 'long', month: 'long', day: 'numeric' }; // It's unused. Need to remove???
  const idiomaEspanol = { weekday: 'long', month: 'long', day: 'numeric', localeMatcher: 'best fit', timeZone: 'UTC' };
  const fechaFormateada = proximoEvento.fecha.toLocaleDateString('es-ES', idiomaEspanol);

  // Actualizar la fecha
  const proximaFechaElement = document.getElementById("proxima_fecha");
  proximaFechaElement.textContent = fechaFormateada;

  // Actualizar el horario
  const proximoHorarioElement = document.getElementById("horario");
  proximoHorarioElement.textContent = proximoEvento.evento.horario;

   // Actualizar la descripcion/direccion

  const proximaDireccionElement = document.getElementById("descripcion");
  proximaDireccionElement.textContent = proximoEvento.evento.descripcion;

  // Actualizar el lugar
  const lugarElement = document.getElementById("lugar");
  lugarElement.textContent = proximoEvento.evento.lugar;

  // Crear las entradas
  const contenedorEntradas = document.getElementById("seccion02_entrada");
  for (const evento of agenda) {
    const fechaEvento = new Date(evento.fecha);
    if (fechaEvento >= fechaActual) {
      const entrada = document.createElement("div");
      entrada.className = "seccion02-entrada";

      const diaEvento = fechaEvento.getDate();
      const mesEvento = fechaEvento.getMonth() + 1; // Los meses son base 0

      const entradaHTML = `
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
      `;

      entrada.innerHTML = entradaHTML;
      contenedorEntradas.appendChild(entrada);
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
  // Alterna la clase 'hidden' en el menú para mostrar u ocultar
  menu.classList.toggle('menu-off');
});