const bpdy = document.body;

const test = document.getElementById("id"); // берет первый встретившийся элемент
const test1 = document.querySelector(".class"); //берет первый элемент который встретит

const buttons = document.getElementsByClassName("btn");
const buttons12 = document.getElementsByTagName("tag");
const buttons2 = document.querySelectorAll(".class"); //берет все элементы

const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

function clicker (){
    console.log("click");
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
});

//button.onclick = clicker; //вызовет функцию по клику

div.addEventListener("click", clicker);
//div.removeEventListener("click", clicker);

form.addEventListener("click", clicker);
//form.removeEventListener("click", clicker);

button.addEventListener("click", clicker);
//button.removeEventListener("click", clicker);

//bpdy.style.backgroundColor = "green";

console.dir(form);