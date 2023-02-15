const testimonial = [
    {
        name: "Rick E.",
        photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        text:"his is unbelievable. After using Testiminial Generator my buisness skyrocketed! his is unbelievable. After using Testiminial Generator my buisness skyrocketed!"
        
    },
    {
        name: "Jack F.",
        photoUrl:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        text:"Fantastic, I'm totally blown away by Testimonial Generator. Fantastic, I'm totally blown away by Testimonial Generator",
        
    },
    {
        name: "Arvind E..",
        photoUrl:"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        text:"I wish I would have thought of it first. Thank You! Apple did exactly what you said it does. Apple has really helped our business.",
        
    },
];

const imgEl= document.querySelector("img");
const textEl=document.querySelector(".text");
const usernameEl=document.querySelector(".username");

let idx= 0;

updateTestimonial();

function updateTestimonial(){
    const{ name, photoUrl,text} = testimonial[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++; 
    if(idx === testimonial.length){
        idx =0;
    }
    setTimeout(()=>{
        updateTestimonial()
    },10000);
}
