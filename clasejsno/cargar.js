let tabla=[
    {nombre: 'Junior',apellido:'gomez',identificacion:'119345678',direccion:'calle 8',ciudad:'cali',correo:'junior@gmil.com', telefono:'312465745', contraseña:'suave'},
    {nombre: 'Gisell',apellido:'Real',identificacion:'32770098',direccion:'calle 18',ciudad:'bogota',correo:'holamun@gmil.com', telefono:'3124231325', contraseña:'suave123'},
    {nombre: 'Yesid',apellido:'velez',identificacion:'1193568698',direccion:'calle 20',ciudad:'Barranquilla',correo:'cariñito@gmil.com', telefono:'31243423', contraseña:'suave12345'},
];

let cuerpotabla= document.getElementById('tabla-usuarios')
function listar(){
    let listado="";
    for(let i=0; i< tabla.length; i++){
        listado+= `<th scope="row"> ${(i+1)} </th> <td>${tabla[i].nombre} </td><td> ${tabla[i].apellido}  </td><td>${tabla[i].identificacion} </td><td> ${tabla[i].direccion}</td> <td> ${tabla[i].ciudad}</td> <td>${tabla[i].correo} </td> <td>${tabla[i].telefono}</td> <td>${tabla[i].contraseña} </td> </tr> `
    }
    cuerpotabla.innerHTML=listado
}
function nuevo(){
    let nombre= document.getElementById('nombre').value;
    let apellido= document.getElementById('apellido').value;
    let identificacion= document.getElementById('identificacion').value;
    let direccion= document.getElementById('direccion').value;
    let ciudad= document.getElementById('ciudad').value;
    let correo= document.getElementById('correo').value;
    let telefono= document.getElementById('telefono').value;
    let contraseña= document.getElementById('contraseña').value;
    
    if (nombre === "" || apellido === "" || identificacion === "" || direccion === "" || ciudad === "" || correo === "" || telefono === "" || contraseña === "") {
        alert("Todos los campos son obligatorios");
        return;
      }
    
      for (let i = 0; i < tabla.length; i++) {
        if (tabla[i].identificacion === identificacion) {
          alert("El ID de usuario ya existe");
          return;
        }
      }
    
   
    let i=1;
    cuerpotabla.innerHTML=`<tr><th scope="row">${(i+1)}</th><td>${nombre}</td><td>${apellido}</td><td>${identificacion}</td><td>${direccion}</td> <td> ${ciudad}</td> <td>${correo} </td> <td>${telefono}</td> <td>${contraseña} </td></tr>`
    i+=1;
    let nuevo={nombre:nombre,apellido:apellido,identificacion:identificacion,direccion:direccion,ciudad:ciudad,correo:correo,telefono:telefono,contraseña:contraseña}
    tabla.push(nuevo)
}

