const fs = require ('fs')
const fileName = 'estudiantes.json'

fs.readFile(fileName, 'utf8', (err,data)=>{
    if (err) {
        console.error ('no es posible leer este archivo JSON');
        return;
    }
    const estudiante= JSON.parse(data);
    console.log('contenido del archivo JSON',estudiante);

    });