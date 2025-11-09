import{apiConfig}from"./api/apiConfig.js"
import './scss/style.scss'
import './api/apiFetch.js'

//-------------------------------------------------------------------------------
//        WORK    ZONE
//-------------------------------------------------------------------------------
const anchorElement = document.querySelector('#app');
///--------------HEADER---SECTION------------------------------------
const header = document.createElement("header");
header.className= "movie-toolbar-wrapper";
anchorElement.appendChild(header);

const btn1= document.createElement("img");
btn1.setAttribute("src","../public/grid-layout.svg");
const btn2= document.createElement("img");
btn2.setAttribute("src","../public/list-layout.svg");
btn1.className="tool__btn";
btn2.className="tool__btn";

header.appendChild(btn1);
header.appendChild(btn2);

const select1= document.createElement("select");
select1.className="selector"
const option1= document.createElement("option");
option1.textContent="Popular";
option1.value = "popular";
const option2= document.createElement("option");
option2.textContent="Up coming";
option2.value = "upcoming";
const option3= document.createElement("option");
option3.textContent="Now playing";
option3.value = "now_playing"
const option4= document.createElement("option");
option4.textContent="Best rated";
option4.value = "top_rated";


select1.appendChild(option1);
select1.appendChild(option2);
select1.appendChild(option3);
select1.appendChild(option4);

header.appendChild(select1)

////-----------CONTEINER-----SECTION-----------------------------------

const conteinerElement= document.createElement("main");
conteinerElement.id="main__box";
//conteinerElement.classname="movie__grid";
//conteinerElement.className="movie__list"
anchorElement.appendChild(conteinerElement);

///GRID---conteiner----
const sectionA = document.createElement("section");
sectionA.className="section__A";
////LIST----conteiner-----
const sectionB = document.createElement("section");
sectionB.className="section__B";
////DETAILS----conteiner-------
const sectionC = document.createElement("section");
sectionC.className="section__C";



////---------EVENTOS-------------------------------
btn1.addEventListener("click", () => {
    conteinerElement.innerHTML = "";
    conteinerElement.appendChild(sectionA);
  });
  

btn2.addEventListener("click", () => {
    conteinerElement.innerHTML = "";
    conteinerElement.appendChild(sectionB);
  });
  
  
select1.addEventListener("change", event =>{
    if(event.target.value===""){
        return;
    }else {
        getData(sectionA,event.target.value);
    }
})


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------
//          FETCH------SELECT  
//-------------------------------//-------



/////////////////////////////////////////////////////////////////////////////////////////////
// fetch-------------------------->
export async function getData(dondeVa, categoria="popular")
 {
    try {//////try catch
        const res = await fetch(
            `${apiConfig.baseURL}${categoria}?api_key=${apiConfig.ApiKey}&language=es-ES&page=1`);
        if (!res.ok) {
            throw new Error("No se pudo obtener data"+ res.status);

        }        const data = await res.json(); 
        return mostrarContenido(data, dondeVa);///AHORA LA DATA LLAMA A LA FUNCION MOSTRAR CONTENIDO

        ////////////
    } catch (error) {
        console.error("Error en la petición:", error.message);
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////TODO TODO TODO TODO 
////funcion crear carta 
export function mostrarContenido(movies, dondeVa){

    if(!movies || movies.length === 0){
        dondeVa.textContent= "no hay nada que mostrar";
        return;
    }else{
        dondeVa.innerHTML="";
    }
        movies.results.forEach(movie => {///////SUPER IMPORTANTE EL PUTO RESULTS
            const cardData= crearCarta(movie);
            dondeVa.appendChild(cardData);
            
        });
    }
    
    
    ///funcion para crear los cards
    
    /////////////////////////////////////////////////////////////////////////////
    export function crearCarta(movie){
        const cardElement = document.createElement("div");
        cardElement.className= "main__card";
    
    
    const cardImg= document.createElement("div");
    cardImg.className= "movie-poster";
    cardImg.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    cardImg.alt = movie.title;
    
    
    const cardTitle= document.createElement("h2");
    cardTitle.className="movie-title"
    cardTitle.textContent= movie.title;//AQUI IRIA EL VALOR DEL FOReACH.TITLE
    
    const cardDetails= document.createElement("p");
    cardDetails.className="movie-overview";
    cardDetails.textContent=movie.overview;
    
    cardElement.appendChild(cardImg);
    cardElement.appendChild(cardTitle);
    cardElement.appendChild(cardDetails);
    
    return cardElement;
    }
//fetch------------------------------------------------->
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////