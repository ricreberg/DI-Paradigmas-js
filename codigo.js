console.log("funciona");

/*Tarea:
- muestra en consola el json de una api de jsonplaceholder
- utiliza metodo fetch
- utiliza async await
- utiliza callback clasico
*/

const URL = "https://jsonplaceholder.typicode.com/users";

fetch(URL)
    .then(respuesta => {
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        return respuesta.json();
    })
    .then(usuarios => {
        console.log("FETCH CON THEN:", usuarios);
    })
    .catch(error => {
        console.error("Error al obtener usuarios:", error);
    });


//---

async function mostrarUsuariosAsync() {
    try {
        const respuesta = await fetch(URL);

        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        const usuarios = await respuesta.json();
        console.log("ASYNC/AWAIT:", usuarios);
    } catch (error) {
        console.error("ASYNC/AWAIT - Error:", error);
    }
}

mostrarUsuariosAsync();


//---

function obtenerUsuariosConCallback(callback) {
    fetch(URL)
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error(`Error HTTP: ${respuesta.status}`);
            }
            return respuesta.json();
        })
        .then(usuarios => callback(null, usuarios))
        .catch(error => callback(error, null));
}

obtenerUsuariosConCallback(function (error, usuarios) {
    if (error) {
        console.error("CALLBACK - Error:", error);
        return;
    }

    console.log("CALLBACK CLÁSICO:", usuarios);
});





/*
function addToArray (data, array, callback) {
  if (!array) {
    return callback(new Error('No existe el array', null))
  }
  setTimeout(function() { 
    array.push(data)
    callback(null, array)
  }, 1000)
}

var array = [1,2,3];

addToArray(4, array, function (err) {
  if (err) return console.log(err.message)
  console.log(array)
})

// (1 seg de delay)-> [1, 2, 3, 4]

*/