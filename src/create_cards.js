import{conteinerElement} from"./main.js";
import{conteinerDetails} from "./main.js";
import { getID } from "./api/apiFetch.js";
import { btn1 } from "./main.js";
import { btn2 } from "./main.js";
import { btn3 } from "./main.js";
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
        conteiner.style.setProperty(
            "--bg-img",
            `url("https://image.tmdb.org/t/p/w500${movie.poster_path}")`
          );
    }


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
    
    const cardInfo= document.createElement("div");
    cardInfo.className="cardInfo";

    const cardTitle= document.createElement("h2");/// creamos el title
    cardTitle.className="movie-title";
    cardTitle.textContent= movie.title;
    //////////////////////////////////////////////
    const rate_year= document.createElement("div");
    rate_year.className="div__year";
    const cardRating= document.createElement("p");
    cardRating.className="movie__rating";
    cardRating.textContent= `Rating: ${movie.vote_average} | ${movie.release_date.slice(0,4)}`;

    const cardYear= document.createElement("p");
    cardYear.className="movie__year";
    
////////////////////////////////////////////////
    const cardDetails= document.createElement("p");//descripcion
    cardDetails.className="movie-overview";
    cardDetails.textContent=movie.overview;
    
    
    rate_year.appendChild(cardRating);
    rate_year.appendChild(cardYear);

    cardInfo.appendChild(cardTitle);
    cardInfo.appendChild(rate_year);
    cardInfo.appendChild(cardDetails);

    cardElement.appendChild(cardImg);
    cardElement.appendChild(cardInfo);
    
    
    
    
   


    cardImg.addEventListener("click", ()=>{
        conteinerElement.style.display="none";
        conteinerDetails.style.display="flex";
        btn3.style.display="block";
        btn1.style.display="none";
        btn2.style.display="none";
        mostrarDetails(conteinerDetails, movie.id);
    
    })
    return cardElement;////devolvemos una card con los appendChild*3
    };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////