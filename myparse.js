//Creo una alerta una vez dando click en el boton
const alertText = () => {
  alert("TEXTO CONVERTIDO");
};

//Creo el elemento "button" para luego poder ser llamado
const button = document.querySelector("button");

//Creo el elemento "texto" para luego poder ser llamado y recibir el texto ingresado en el "textArea"
const texto = document.getElementById("texto").value;

//Creo la funcion "parseJson" que crea el objeto que luego sera llamado
function parseJson(texto) {
  var objeto = {texto};
  if (texto === "string") {
    return eval(objeto);
  }
}

//La constante "convertirTexto" recibe la funcion "parseJson" que contiene el objeto para luego acceder a acada elemento
const convetirTexto = () => {
  const json = parseJson();
  console.log(json);
};

//Creo un evento del boton para poder llamar a la funcion "convertirTexto"
button.addEventListener("click", convetirTexto);

//Llamo a la alerta creada "alertText"
button.addEventListener("click", alertText);
