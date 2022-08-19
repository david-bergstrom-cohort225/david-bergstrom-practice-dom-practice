//DOM Practice
let myName1 = document.getElementById('id-name');
console.log(myName1.innerText);
console.log(myName1.getAttribute('id-name'));

let myName2 = document.querySelector('#id-name');
console.dir(myName2.innerText);
myName2.innerText += ' is Cool!';


let itemList = document.querySelectorAll("li")
    .forEach(element => {
        console.dir(element.innerText);
    });

const para = document.createElement("p");
para.innerText = "This is a paragraph";
document.getElementById("id-card").appendChild(para);