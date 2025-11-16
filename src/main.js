import'./scss/auxStyle.scss'
import './scss/style.scss'
import { getData } from './api/apiFetch.js'

export const anchorElement = document.querySelector('#app');
const header = document.createElement("header");
header.className= "tool__bar";
anchorElement.appendChild(header);

export const btn1= document.createElement("img");
btn1.setAttribute("src","../public/grid-layout.svg");
export const btn2= document.createElement("img");
btn2.setAttribute("src","../public/list-layout.svg");
export const btn3= document.createElement("img");
btn3.setAttribute("src","../public/left-arrow.svg");
btn3.style.display="none";
btn1.className="tool__btn1";
btn2.className="tool__btn2";
btn3.className="tool__back";
header.appendChild(btn1);
header.appendChild(btn2);
header.appendChild(btn3);

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


export const conteinerElement= document.createElement("main");
conteinerElement.id="movie-list-container";
conteinerElement.className="movie-grid";
anchorElement.appendChild(conteinerElement);

export const conteinerDetails= document.createElement("div");
conteinerDetails.id ="details";
conteinerDetails.className="details__conteiner"
anchorElement.appendChild(conteinerDetails);

btn1.addEventListener("click", () => {
    conteinerElement.className = "movie-grid";
  });
    btn2.addEventListener("click", () => {
    conteinerElement.className = "movie__list";
  });  
  
  select1.addEventListener("change", event =>{
    if(event.target.value===""){
        return;
    }else {
        getData(conteinerElement,event.target.value);
    }
})

btn3.addEventListener("click",()=>{
    conteinerDetails.style.display="none";
    btn1.style.display="block";
    btn2.style.display="block";
    btn3.style.display="none";
    conteinerElement.style.display="grid";
});

getData(conteinerElement);