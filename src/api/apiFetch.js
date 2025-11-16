import {apiConfig} from './apiConfig.js';
import {mostrarContenido}from'../create_cards.js';
//------------------------------------
//          FETCH-----general---------
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
};
/////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------------------------------------------------------
///            fetch id
//-----------------------------------------------------------------------------------
export async function getID(movieid){
try {
    const res = await fetch (`${apiConfig.baseURL}${movieid}?api_key=${apiConfig.ApiKey}&language=es-ES&page=1&append_to_response=credits`);

    if(!res.ok){ throw new Error (res.status);}
    const dataID = await res.json();
            
        return dataID
} catch (error) {console.log(error.message);
    
}
};