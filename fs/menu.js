const readline = require('readline');
const { exec } = require('child_process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const opciones = {
    '1': () => ejecutarScript('Create.js'),
    '2': () => ejecutarScript('read.js'),
    '3': () => ejecutarScript('add.js'),
    '4': () => ejecutarScript('update.js'),
    '5': () => ejecutarScript('delete.js'),
    '6': () => ejecutarScript('count.js'),
    '7': () => {
        console.log('Cerrando el sistema');
        rl.close();
    }
};

function mostrarMenu() {
    console.log(`
    Menú de opciones:
    1. Crear archivo JSON 
    2. Leer archivo JSON 
    3. Agregar nuevo alumno
    4. Actualizar información de alumno
    5. Eliminar un estudiante
    6. Contar estudiantes
    7. Salir`);
    rl.question('Seleccione una opción: ', manejarOpcion);
}

function manejarOpcion(opcion) {
    const accion = opciones[opcion];
    if (accion) {
        accion();
    } else {
        console.log('Opción no válida. Inténtelo de nuevo.');
        mostrarMenu();
    }
}

function ejecutarScript(script) {
    exec(`node ${script}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al ejecutar ${script}:`, error.message);
            return;
        }
        if (stderr) {
            console.error(`Error en ${script}:`, stderr);
            return;
        }
        console.log(`Salida de ${script}:\n}`, stdout);
        mostrarMenu();
    });
}

mostrarMenu();