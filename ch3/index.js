//CHALLENGE Nº 3

//Creo las varibles "http", "host" y "port" para luego ser llamadas y poder crear el servidor
const http = require("http");
const host = "localhost";
const port = 8000;

//La clase usuario posse un constructor con los argumentos que luego se llanaran creando un array de "User"
class User {
  constructor(id, firtName, lastName, age, country) {
    this.id = id;
    this.firstName = firtName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
  }
}

//Utilizando el "newUser" se crea el arreglo con sus datos correspondientes que luego se mostraran en el servidor
const allUsers = [
  new User(1, "Homero", "Simpson", 36, "Estados Unidos"),
  new User(2, "Marge", "Simpson", 36, "Estados Unidos"),
  new User(3, "Bart", "Simpson", 10, "Estados Unidos"),
  new User(4, "Lisa", "Simpson", 8, "Estados Unidos"),
  new User(5, "Maggie", "Simpson", 1, "Estados Unidos"),
];

//La funcion siguiente, utiliza el metodo try-catch para mostrar la informacion del objeto JSON.
const requestListener = function (req, res) {
  try {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(allUsers));
  } catch (error) {
    res.writeHead(404);
    console.error(`${message.error}`);
  }
};

//Esta funcion, muestra por consola el "host" y el "port" en la terminal para poder acceder de manera mas rapida a la informacion.
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`El servidor se está ejecutando en http://${host}:${port}`);
});
