//1. Agregar las siguientes horas al arreglo de Traumatología:
traumatologia.push({hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE'},
{hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA'},
{hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE'},
{hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE'},
{hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA'})

console.log("Traumatologia nuevo",traumatologia)

/* 3. Imprimir en la página HTML, mediante document.write y/o las funciones que estime 
conveniente, la lista de consultas médicas de Dental. Sin embargo, debe hacerlo separando por un guión cada dato 
desplegado y cada fila de información debe estar separada por un párrafo.*/


let consultas_dental = `<p><p/><hr/>`

dental.forEach(element => {
    consultas_dental += `<p>${element.hora} - ${element.especialista} - ${element.paciente} - ${element.rut} - ${element.prevision} <p/>`
});

document.getElementById("lista_dental").innerHTML = consultas_dental


/*4. Imprimir un listado total de todos los pacientes que se atendieron en el centro
médico. Para esto, deberá unir todos los nombres de pacientes e imprimir uno por
cada párrafo.*/

//metodo concat()

// let listado_total2 = dental.concat(traumatologia,radiologia) 
// console.log("listado_total2",listado_total2)

let listado_total_dental = `<p><p/>`
dental.forEach(element => {
    listado_total_dental  += `<p>${element.paciente}<p/>`
});

let listado_total_traumatologia = `<p><p/>`
traumatologia.forEach(element => {
    listado_total_traumatologia   += `<p>${element.paciente}<p/>`
});

let listado_total_radiologia = `<p><p/>`
radiologia.forEach(element => {
    listado_total_radiologia   += `<p>${element.paciente}<p/>`
});

let listado_total = listado_total_dental + listado_total_radiologia + listado_total_traumatologia

document.getElementById("listado_total").innerHTML = listado_total

/*5. Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas
de Dental. */
//pregunta como mostrar en html

let dental_isapre = dental.filter(function(pacientes){
    return pacientes.prevision == 'ISAPRE'
})

// document.getElementById("dental_isapre").innerHTML = dental_isapre.paciente +"-"+dental_isapre.prevision
console.log(dental_isapre)


/*6. Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas
médicas de Traumatología.*/
let traumatologia_fonasa = traumatologia.filter(function(pacientes){
    return pacientes.prevision == 'FONASA'
})
console.log(traumatologia_fonasa)
traumatologia_fonasa.forEach(function(paciente){
   document.getElementById("traumatologia_fonasa").innerHTML += `<p>${paciente.paciente} - ${paciente.prevision}</p>`
})

