const kits =["crash","kick","share","tom"];

const containerEl = document.querySelector(".container");

kits.forEach((kit) =>{
 const btnEl = document.createElement("button");
 btnEl.classList.add("btn");
 btnEl.innerText = kit;
 btnEl.style.backgroundImage = "url(images/" + kit + ".png)";
 containerEl.appendChild(btnEl);
 const audioEl = document.createElement("audio");
 audioEl.src = "music/" + kit + ".mp3";
 containerEl.appendChild(audioEl);

btnEl.addEventListener("click", ()=>{
    audioEl.play();
});
 window.addEventListener("keydown", (Event)=>{
    if(Event.key === kit.slice(0,1)){
        audioEl.play();
        btnEl.style.transform = "scale(.9)";
        setTimeout(()=>{
            btnEl.style.transform = "scale(1)";
        },100)
    };
 });

}); 

// window.addEventListener("keydown", (Event)=>{
//     if(Event.key === kit.slice(0,1)){
//         audioEl.play();
// btnEl.style.transform = "scale(.9)"; for scale the button background.
//     }; this is use for when we press the 1st letter of button on keyboard ..activate that button and play music
//  });

// btnEl.style.transform = "scale(.9)";
//         setTimeout(()=>{
//             btnEl.style.transform = "scale(1)";
//         },100)
//     }; this is use for button comes in actual position


