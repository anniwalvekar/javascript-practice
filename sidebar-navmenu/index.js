const bars =document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const closebutton = document.querySelector(".fa-xmark");


bars.addEventListener("click",()=>{
 sidebar.classList.toggle("show-sidebar");
});

closebutton.addEventListener("click",()=>{
   sidebar.classList.remove("show-sidebar"); 
});