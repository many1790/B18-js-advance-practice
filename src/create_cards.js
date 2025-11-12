import{anchorElement} from "./main.js";
import{conteinerElement} from"./main.js";
import{conteinerDetails} from "./main.js";
import { mostrarDetails } from "./api/apiFetch.js";
//----------------------------------------------------------------------------------
////funcion mostrar "CREARCARTA" ///-----------------------NOT--CLEAR---------------
//-----------------------------------------------------------------------------------
export function mostrarContenido(movies, dondeVa){

    if(!movies || movies.length === 0){////comprobracion
        dondeVa.textContent= "no hay nada que mostrar";
        return;
    }else{
        dondeVa.innerHTML="";////vacialo
    }
        movies.results.forEach(movie => {///////SUPER IMPORTANTE EL PUTO RESULTS
            const cardData= crearCarta(movie);////se declara una connstante para poder llamarla despues
            dondeVa.appendChild(cardData);///en dondeVa pintame crearCard con la data del forEach
            
        });
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------------------------------------    
    ///funcion para crear los cards///////--------------------ALL CLEAR-----------
//----------------------------------------------------------------------------------
    
/////////////////////////////////////////////////////////////////////////////

export function crearCarta(movie){///funcion crear carta
        const cardElement = document.createElement("div");/// creamos el cardElement/div".main__card"
        cardElement.className= "main__card";
        cardElement.dataset.id = movie.id;
    
    const cardImg= document.createElement("img");///creamos el img/"movie__poster"
    cardImg.className= "movie__poster";
    cardImg.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;///url imagen
    cardImg.alt = movie.title;///si no se ve
    
    const cardTitle= document.createElement("h2");/// creamos el title
    cardTitle.className="movie-title";
    cardTitle.textContent= movie.title;
    
    const cardRating= document.createElement("q");
    cardRating.className="movie__rating";
    cardRating.textContent= movie.vote_average;

    const cardYear= document.createElement("q");
    cardYear.className="movie__year";
    cardYear.textContent=movie.release_date.slice(0,4);

    const cardDetails= document.createElement("p");//descripcion
    cardDetails.className="movie-overview";
    cardDetails.textContent=movie.overview;
    
    cardElement.appendChild(cardImg);
    cardElement.appendChild(cardTitle);
    cardElement.appendChild(cardRating);
    cardElement.appendChild(cardYear);
    cardElement.appendChild(cardDetails);
    
    
   


    cardImg.addEventListener("click", ()=>{
        conteinerElement.style.display="none";
        conteinerDetails.style.display="flex";
        mostrarDetails(conteinerDetails, movie.id);
    
    })
    return cardElement;////devolvemos una card con los appendChild*3
    };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////