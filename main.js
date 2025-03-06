//Conexión  con HTML (Seleccionar elementos)
const songForm= document.getElementById('song_form');
const playList= document.getElementById('play_list');

//Función para agregar una canción a la lista 
function addSong(songName,artistName,songUrl){
    const listSong = document.createElement('li');
    listSong.innerHTML = `
            <strong> ${songName} </strong>
            -${artistName}
            <a href="${songUrl}" target="_blank">Reproducir</a>
            <button class="delete-btn">Eliminar</button>
    `;
    

    //agregar al html
    playList.appendChild(listSong);


}

// Manejo de envio de formularios (eventos)

songForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    //obtener datos del formulario
        const songName = document.getElementById("song_name").value;
        const artistNamE= document.getElementById("artist_name").value;
        const songUrl= document.getElementById("url_song").value;

        addSong(songName, artistNamE, songUrl);

        songForm.resert();
})
