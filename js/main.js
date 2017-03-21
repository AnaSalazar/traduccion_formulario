var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");//saco ambas variables para que mis dos funciones puedan utilizarlas

function translate(){
  var title = document.getElementById("form-signin-heading");//llamo a mi elemento a través de su id y lo guardo en un variable para poder "trabajarlo"
  var remember = document.getElementsByTagName("span")[0];//llamo a mi elemento a través de su etiqueta y lo guardo en un variable para poder "trabajarlo"
  var button = document.getElementsByClassName("btn")[0];//llamo a mi elemento a través de su clase y lo guardo en un variable para poder "trabajarlo"

//Con los siguientes métodos modifico cada elemento
  title.innerHTML = "Por favor inicia sesión";
  email.placeholder = "Correo Electrónico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recordar datos";
  button.innerHTML = "Iniciar Sesión";
}
translate();

function mostrar(){
   var datos = document.getElementById("datos");
   datos.innerHTML = "<h3><strong>Datos de formulario<br></h3>El correo electrónico ingresado es:</strong><br>"+email.value+"<br><strong>La contraseña ingresada es:</strong><br>" +password.value;

 }
