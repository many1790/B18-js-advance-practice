
import {apiConfig} from './apiConfig.js';
import {select1}from "../main.js"
import {mostrarContenido}from'../create_cards.js'

//------------------------------------
//          FETCH
//-------------------------------//-------
export async function getData(dondeVa, categoria="popular"){
    try {//////try catch
        const res = await fetch(
            `${apiConfig.baseURL}${categoria}?api_key=${apiConfig.ApiKey}&language=es-ES&page=1`);

            if (!res.ok) {throw new Error("No se pudo obtener data"+ res.status);
        } 
        const data = await res.json(); 
        //console.log(data);
        //console.log(data.results[1].id);
        return mostrarContenido(data, dondeVa);

        } catch (error) {console.error("Error en la petición:", error.message);
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------------------------------------------------------
///            fetch id
//-----------------------------------------------------------------------------------
export async function getID(movieid){

try {
    const res = await fetch (`${apiConfig.baseURL}${movieid}?api_key=${apiConfig.ApiKey}&language=es-ES&page=1`);

    if(!res.ok){ throw new Error (res.status);}
    const dataID = await res.json();
            //console.log(dataID.id);
        return dataID
} catch (error) {console.log(error.message);
    
}
}

export async function mostrarDetails(conteiner, movieId) {
    const movie = await getID(movieId);
    //console.log(movie); // aquí puedes ver toda la info: título, sinopsis, imagenes, etc.
  
    conteiner.innerHTML = `
      <img class="imgDetails" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">  
    <div class="infoDetails">
        <h2 class="titleDetails" >${movie.title}</h2>
        <p class="rateDetails">Valoracion: ${movie.vote_average} | Año: ${ movie.release_date.slice(0,4)}</p>
      <p class="desDetails">Sinopsis: <br>${movie.overview}</p>
      </div>
      
    `;
  }