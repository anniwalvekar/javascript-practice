// let helloBtn = document.querySelector('button');
// helloBtn.addEventListener('click', ShowMsg);

// function ShowMsg() {
//     alert("hello World");
// }
let helloBtn = document.querySelector('button');
helloBtn.addEventListener('click', inputMsg);

function inputMsg() {
    let name = prompt('Enter name of student');
    helloBtn.textContent = 'Roll No.1:' +name;
}