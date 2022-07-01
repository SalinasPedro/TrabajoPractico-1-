//Creo las variables "pathUsers" y "pathAlbum" para luego ser llamadas de manera simplicada en las funciones correspondientes.
var pathUsers = "https://jsonplaceholder.typicode.com/users";
var pathAlbum = "https://jsonplaceholder.typicode.com/users/1/albums";

//La funcion forma1() recibe el json para luego ser impreso y si da un error, se muestra por mensaje.
async function forma1() {
  await fetch(pathUsers)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

//La funcion forma2() utiliza la forma de try-catch para recibir el json y mostrar un error si se presenta.

async function forma2() {
  try {
    const connection = await fetch(pathUsers);
    const data = await connection.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

//La funcion getUser() llama a las funciones "forma1()"  y "forma2()"
function getUser() {
  forma1();
  forma2();
}

//-------------------

//La funcion forma1() recibe como parametro el numero de id e imprime los datos del album correspondiente, de no ser asi muestra un mensaje de error.
async function forma1(id) {
  await fetch(pathAlbum)
    .then((response) => {
      return response.json(id);
    })
    .catch(function (error) {
      console.log(error.message);
    });
}

//La funcion forma2() recibe como parametro el numero de id del album correspondiente, utilizando el metodo try-catch. De ocurrir un error, este mismo se mostrara por mensaje.
async function forma2(id) {
  try {
    var response = await fetch(pathAlbum);
    if (response.ok) {
      var data = await response.json();
      console.log(data);
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.log(error.message);
  }
}

//La funcion getAlbums() recibe dos parametros, el id del album y la forma en la que se imprime el mismo.

function getAlbums(id, callback) {
  if (!id) {
    return callback(new Error(response.statusText));
  }
  if (callback) return forma1(id);
  else return forma2(2);
}
