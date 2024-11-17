const fs = require ('fs')
const fileName = 'estudiantes.json'

fs.readFile(fileName, 'utf8', (err,data)=>{
    if (err) {
        console.error ('no es posible leer este archivo JSON');
        return;
    }

    //convertir una cadena d JSON a un objeto de JavaScript
    const estudiantes =JSON.parse(data)
    const estudianteNew={nombre:'Pepe', edad:19, carrera: 'psicologia'};
    estudiantes.push(estudianteNew);

    fs.writeFile(fileName,JSON.stringify(estudiantes,null,2), (err)=>{
        if (err) {
            console.log('ah ocurrido un erro al crear el archivo',err);
            return;
        }
        console.log('nuevo estudiante ah sido agregado al archivo JSON.');
    });
});