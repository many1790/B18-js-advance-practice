import './scss/style.scss'
import './api/apiFetch.js'

//-------------------------------------------------------------------------------
//        WORK    ZONE
//-------------------------------------------------------------------------------
const anchorElement = document.querySelector('#app');
////--CHECK FILE INSIDE DOCUMENT--anchorElement.textContent= "HELLO WORLD";
///--------------TOOL__BAR---SECTION------------------------------------
const tool__bar = document.createElement("nav");///creando nav
tool__bar.className= "movie-toolbar-wrapper";
tool__bar.textContent= "navBAR"
anchorElement.appendChild(tool__bar);///pintando nav
///////---------BTN---SECTION-----------------------------------------------
const btn1= document.createElement("button");
btn1.textContent="grid";
const btn2= document.createElement("button");
btn2.textContent="list";
btn1.className="tool__btn";
btn2.className="tool__btn";
tool__bar.appendChild(btn1);
tool__bar.appendChild(btn2);
////----------------BTN----SECTION-------------------------------------------
////---------------SELECT----SECTION--------------------------------------
const select1= document.createElement("select");
const option1= document.createElement("option");
option1.textContent="Popular";
const option2= document.createElement("option");
option2.textContent="Up coming";
const option3= document.createElement("option");
option3.textContent="Now playing";
const option4= document.createElement("option");
option4.textContent="Best rated";

select1.className="selector";
select1.appendChild(option1);
select1.appendChild(option2);
select1.appendChild(option3);
select1.appendChild(option4);

tool__bar.appendChild(select1)
///--------------TOOL__BAR---SECTION------------------------------------
////-----------CONTEINER-----SECTION-----------------------------------
////-----------CONTEINER-----SECTION-----------------------------------





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////  TODO---->:    ////ALGO COMO LO DE ABAJO
/*
<div ID="APP">/////-----------------------------------------------------0
//---------------------------------------------------------------------------------------
    <nav class=".app__nav">///------------------------------------------1
    //-----------------------------------------------------------------------------------
        <button id="btn__card">Crear card</button>///-------------------2
        <button id="btn__reset">Reset</button>//------------------------2
        <select name="select" id="select__movie">//---------------------2
        //-------------------------------------------------------------------------------
            <option value="">choose a option</option>//-----------------3
            <option value="popular">Popular</option>//------------------3
            <option value="upcoming">up coming</option>//---------------3
            <option value="now_playing">now playing</option>//----------3
            <option value="top_rated">best rated</option>//-------------3
            //---------------------------------------------------------------------------
        </select>//-----------------------------------------------------2
        //-------------------------------------------------------------------------------
    </nav class=".app__nav">//------------------------------------------1
///////------------------------------------------------------------------------------------
<div ID="app__A">//-----------------------------------------------------1
</div ID="app__A">//----------------------------------------------------1
//-----------------------------------------------------------------------------------------
</div ID="APP">//-------------------------------------------------------0
//-----------------------------------------------------------------------------------------
*/
