const fs = require ('fs')
const fileName = 'estudiantes.json'

const estudiantes =[
    {nombre:'Alex', edad:19, carrera: 'ing. en desarrollo de software'},
    {nombre:'Marta', edad:21, carrera: 'medicina'},
    {nombre:'Angel', edad:18, carrera: 'arquitectura'},
]

fs.writeFile(fileName,JSON.stringify(estudiantes,null,2), (err)=>{
    if (err) {
        console.log('ah ocurrido un erro al crear el archivo',err);
        return;
    }
    console.log('el archivo ah sido creado con exito')
});