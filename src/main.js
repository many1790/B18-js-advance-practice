import './scss/style.scss'
import { getData } from './api/apiFetch.js'
import './events.js';
import'./create_cards.js'
//-------------------------------------------------------------------------------
//        WORK    ZONE
//-------------------------------------------------------------------------------
const anchorElement = document.querySelector('#app');


///--------------HEADER---SECTION------------------------------------
const header = document.createElement("header");
header.className= "movie-toolbar-wrapper";
anchorElement.appendChild(header);

export const btn1= document.createElement("img");
btn1.setAttribute("src","../public/grid-layout.svg");
export const btn2= document.createElement("img");
btn2.setAttribute("src","../public/list-layout.svg");
btn1.className="tool__btn";
btn2.className="tool__btn";

header.appendChild(btn1);
header.appendChild(btn2);

export const select1= document.createElement("select");
select1.className="selector"
const option1= document.createElement("option");
option1.textContent="Popular";
const option2= document.createElement("option");
option2.textContent="Up coming";
const option3= document.createElement("option");
option3.textContent="Now playing";
const option4= document.createElement("option");
option4.textContent="Best rated";

option1.value = "popular";
option2.value = "upcoming";
option3.value = "now_playing";
option4.value = "top_rated";

select1.appendChild(option1);
select1.appendChild(option2);
select1.appendChild(option3);
select1.appendChild(option4);

header.appendChild(select1)

//////////////////////////////////////////////////////////////////////////////
////-----------CONTEINER-----SECTION-----------------------------------

const conteinerElement= document.createElement("main");
conteinerElement.id="movie-list-container";
conteinerElement.className="movie-grid";
anchorElement.appendChild(conteinerElement);


////---------EVENTOS-------------------------------

//---------------grid----------------------------------------
btn1.addEventListener("click", () => {
    conteinerElement.className = "movie-grid";
  });
  
  //----------------list--------------------------------------
  btn2.addEventListener("click", () => {
    conteinerElement.className = "movie__list";
  });
    
  //----------select------------------------------------------
select1.addEventListener("change", event =>{
    if(event.target.value===""){
        return;
    }else {
        getData(conteinerElement,event.target.value);
    }
})


getData(conteinerElement);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
