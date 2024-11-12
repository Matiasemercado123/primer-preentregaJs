// Variables
let turnosDisponibles = ["14:00", "16:00", "18:00", "20:00"];
let turnosReservados = [];

// Función para mostrar los turnos disponibles
function mostrarTurnos() {
  console.log("Turnos disponibles:");
  for (let i = 0; i < turnosDisponibles.length; i++) {
    console.log((i + 1) + ". " + turnosDisponibles[i]);
  }
}

// Función para reservar un turno
function reservarTurno(turno) {
  let turnoEncontrado = false;

  // Buscamos el turno en la lista`
  for (let i = 0; i < turnosDisponibles.length; i++) {
    if (turnosDisponibles[i] === turno) {
      turnoEncontrado = true;
      turnosReservados[turnosReservados.length] = turno; // Agregamos el turno reservado
      turnosDisponibles[i] = ""; // Marcamos el turno como reservado
      console.log("✅ Turno de las " + turno + " reservado con éxito.");
      break;
    }
  }

  // Si no encontramos el turno, mostramos un mensaje de error
  if (!turnoEncontrado) {
    console.log("❌ Turno no disponible o ya reservado.");
  }
}

// Función principal para interactuar con el usuario
function iniciarSimulador() {
  let continuar = true;

  while (continuar) {
    console.log("\n--- Simulador de Turnos para el Cine ---");
    console.log("1. Ver turnos disponibles");
    console.log("2. Reservar un turno");
    console.log("3. Salir");

    let opcion = prompt("Elige una opción (1-3):");

    if (opcion === "1") {
      mostrarTurnos();
    } else if (opcion === "2") {
      let turno = prompt("Ingresa el horario que deseas reservar (Ej: 16:00):");
      reservarTurno(turno);
    } else if (opcion === "3") {
      continuar = false;
      console.log("Gracias por venir. ¡Hasta pronto!");
    } else {
      console.log("Opción no válida. Inténtalo de nuevo.");
    }
  }
}

// Iniciar el simulador
iniciarSimulador();
