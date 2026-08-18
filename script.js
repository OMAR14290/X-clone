const menu = document.querySelector(".menu");

const sidebar = document.querySelector(".side1");


menu.addEventListener("click", ShowMenu);


function ShowMenu(){
     sidebar.classList.toggle("open");
}

