const tabs = document.querySelector(".tab");
const btns = document.querySelector(".button");

tabs.addEventListener("click", (Event) => {
  
    const id = Event.target.dataset.id

    if (id) {
        btns.forEach((btn)=>{
            btn.classList.remove("live")
        })
        Event.target.classList.add("live")
    }
});