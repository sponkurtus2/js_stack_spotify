let city_arrays = ['Not Allowed', 'Cigarettes ouf of the Windows', 'Losing You', 'Flex'];
let available_Songs = ['Cuco', 'Flex']
let history = []


function Show() {
    /*
    *   En esta funcion es donde mostramos por default todos los elementos, la lista con la cola actual
    *   Tambien mostramos la cancion que se esta reproduciendo actualmente
    *   Y las canciones que estan disponibles
     */
    let lista = document.getElementById('list')
    lista.innerHTML = ''
    for (let liElement of city_arrays) {
        let li = document.createElement('li')
        li.innerHTML = liElement
        lista.appendChild(li)
    }

    let currentPlaying = document.getElementById('currentPlayingP')
    currentPlaying.innerHTML = `Currently playing: ${city_arrays[0]}`

    let availableSongs = document.getElementById('availableSongs')
    availableSongs.innerHTML = `Available songs: \n${available_Songs}`

}

/* Estos botones fueron ejemplos de la clase y ya no se usan

function Clean() {
    city_arrays.splice(2)
    Show()
}


function CleanQuantity() {
    city_arrays.splice(1, 2)
    Show()
}


function Replace() {
    city_arrays.splice(1, 2, 'Another')
    Show()
}
*/

/*
*   Aqui esta la funcion de InsertSong y con esta checamos si la cancion que se inserte esta disponible, en caso de que lo este
*   lo agrega a la lista.
*/
function InsertSong() {
    // Solo podra insertar, las canciones disponibles
    let songName = document.getElementById('songName').value
    if (available_Songs.includes(songName)) {
        city_arrays.splice(city_arrays.length+1,0, songName)
        Show()
    } else {
        alert('Cancion no existente')
    }

}


/*
*   Con esta funcion, borramos la cancion actual, y la guardamos en el arreglo de history
*   y tambien mostramos el historial actual
*/
function DeleteSong() {
    // let songNumber = parseInt(document.getElementById('songNumber').value)
    history.push(city_arrays[0])

    city_arrays.splice(0, 1);
    let songHistory = document.getElementById('songHistory')
    songHistory.innerHTML = history.map(city => `${city},`).join('<br />');

    Show()
}

/*
*   Con la funcion goBack checamos que el arreglo de city_arrays este disponible y no sea ni nulo ni este vacio
*   En caso de cumplir con eso, creamos una variable llamada lastHistory que remueve el ultimo elemento de history
*   Y luego a city_arrays le agregamos como primer elemento, el de lastHistory, asi se reproduce siempre la ultima
*   cancion que haya sido eliminada
*/

function goBack() {
    if (city_arrays) {
        if (history.length > 0) {
            let lastHistory = history.pop()
            city_arrays.unshift(lastHistory)
            Show();
        } else {
            alert('El historial está vacío');
        }
    } else {
        alert('city_arrays no está definido');
    }
}



