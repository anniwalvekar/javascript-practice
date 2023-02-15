const containerEl = document.querySelector(".container");

window.addEventListener("mousemove", (Event) =>{
    // console.log(Event);
    containerEl.innerHTML = ` <div class="mouse-event">
    ${Event.clientX}
    <h4>Mouse X Position</h4>
    </div>
    <div class="mouse-event">
    ${Event.clientY}
    <h4>Mouse Y Position</h4>
   </div>`
});