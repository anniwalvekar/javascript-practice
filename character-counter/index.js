const textareaE1 = document.getElementById("textarea");

const totaltextE1 = document.getElementById("total-text");

const remaintextE1 = document.getElementById("remain-text");

textareaE1.addEventListener("keyup", ()=>{
    updateCounter();
});
updateCounter();

function updateCounter(){
   totaltextE1.innerText = textareaE1.value.length;
   remaintextE1.innerText = textareaE1.getAttribute("maxLength") - textareaE1.value.length;
}