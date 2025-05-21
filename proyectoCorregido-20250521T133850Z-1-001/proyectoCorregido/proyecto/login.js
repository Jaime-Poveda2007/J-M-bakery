function loguear (){
let user = document.getElementsByClassName("input-control_uno")[0].value;
let clave = document.getElementsByClassName("input-control_dos")[0].value;

if (user=="samuel.ramirez" && clave=="123"){


 window.location="index.html";
} 
else 
{


alert("Datos incorrectos");


}

}