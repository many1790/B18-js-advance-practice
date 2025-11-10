
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
        console.log(data);
        return mostrarContenido(data, dondeVa);

        } catch (error) {console.error("Error en la petición:", error.message);
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////
