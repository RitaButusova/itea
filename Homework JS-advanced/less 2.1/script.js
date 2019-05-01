let button = document.querySelector(".add");

let box = document.querySelector(".box");
box.style.width = 200 + "px";
box.style.minHeight = 200 + "px";

button.onclick = () => {
    let element = document.createElement("div");
    element.setAttribute("style","color:black;");
    element.innerText = "Element";
    element.style.background = "green";
    element.style.width = 100 + "px";
    element.style.height = 50 + "px";
    element.style.marginBottom = 10 + "px";
    box.appendChild(element);
}