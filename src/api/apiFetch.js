import {apiConfig} from './apiConfig.js';



//------------------------------------
//          FETCH    SELECT  
//-------------------------------//-------

//         TODO--->: CONFIG TO #APP__



/////////////////////////////////////////////////////////////////////////////////////////
//select--------------------------->
export const selector= document.querySelector("#select__movie");
selector.addEventListener("change", event =>{
    if(event.target.value===""){
        return;
    }else {
        getData(divDinamic/*¿esto seria el anchorElement#app?*/ ,event.target.value/*value del select!*/)
    }
})

///select--------------------------->
/////////////////////////////////////////////////////////////////////////////////////////////
// fetch-------------------------->
export async function getData(dondeVa, categoria="popular")
 {
    try {//////try catch
        const res = await fetch(
            `${apiConfig.baseURL}${categoria}?api_key=${apiConfig.ApiKey}&language=es-ES&page=1`);/////res es el get de esa url
        if (!res.ok) {
            throw new Error("No se pudo obtener data"+ res.status);

        }////si no hay res lanza error
        const data = await res.json();//////data es igual a res en formato JSON//
        /*showMovies(data.results, container); ME FALTARIA ALGO COMO UNA FUNCION CREATE_CARDMOVIE -TODO-TODO-TODO-*/
        return mostrarContenido(data, dondeVa);///AHORA LA DATA LLAMA A LA FUNCION MOSTRAR CONTENIDO

        /* const divP = document.createElement("p");////creame un "P"
        divP.textContent = JSON.stringify(data, null, 2);////el contenido de ese divP es el data en formato.stringify
        div.appendChild(divP);/////appendChild de ese divP 
        */
    } catch (error) {
        console.error("Error en la petición:", error.message);
    }
}

//fetch------------------------------------------------->
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////