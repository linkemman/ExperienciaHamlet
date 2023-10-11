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
//---------------------------FUNCIONES DE FECHAS-------------------------------
//----------------------------------------------------------------------------

// Función para obtener el nombre del día de la semana en español
function obtenerNombreDiaSemana(dia) {
  const nombresDias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  return nombresDias[dia];
}

// Función para obtener el nombre del mes en español
function obtenerNombreMes(mes) {
  const nombresMeses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  return nombresMeses[mes - 1];
}

// Función para encontrar la próxima fecha más cercana en la agenda
function encontrarProximaFecha(agenda) {
  const fechaActual = new Date();
  let proximaFecha = null;

  for (const evento of agenda) {
    const fechaEvento = new Date(evento.fecha);

    if (fechaEvento >= fechaActual && (!proximaFecha || fechaEvento < proximaFecha)) {
      proximaFecha = fechaEvento;
    }
  }

  return proximaFecha;
}

//----------------------------------------------------------------------------
//---------------------------ACTUALIZAR FECHA MÁS CERCANA----------------------
//----------------------------------------------------------------------------

// Obtén el elemento h2 con el id "proxima_fecha"
const proximaFechaElement = document.getElementById("proxima_fecha");

// Encuentra la fecha más cercana
const fechaMasCercana = encontrarProximaFecha(agenda);
actualizarProximaFecha(fechaMasCercana);

// Función para actualizar la fecha más cercana en el elemento "proxima_fecha"
function actualizarProximaFecha(fechaProxima) {
  if (fechaProxima) {
    const nombreDiaSemana = obtenerNombreDiaSemana(fechaProxima.getDay() + 1);
    const diaMes = fechaProxima.getDate() + 1;
    const nombreMes = obtenerNombreMes(fechaProxima.getMonth() + 1); // Suma 1 para ajustar a la base 1

    const nuevoContenido = `${nombreDiaSemana} ${diaMes} de ${nombreMes}`;
    proximaFechaElement.textContent = nuevoContenido;
  } else {
    proximaFechaElement.textContent = "No hay eventos futuros.";
  }
}

//----------------------------------------------------------------------------
//---------------------------CREAR ENTRADAS------------------------------------
//----------------------------------------------------------------------------

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
      if (fechaEvento >= fechaActual) {
        const entrada = document.createElement("div");
        entrada.className = "seccion02-entrada";

        const diaEvento = fechaEvento.getDate() + 1;
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

// Función para obtener el nombre del mes en español
function getMes(mes) {
  const meses = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  return meses[mes - 1];
}
