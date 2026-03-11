const div = document.getElementById("div");
div.textContent = "Document Object Model";
div.style.color = "red";
div.style.height = "200px";
div.style.width = "200px";
div.style.backgroundColor = "pink"

const fruits = document.querySelectorAll("li");
fruits.forEach(function (item) {
    item.style.color = "green"
})

const text = document.querySelector("p");
text.textContent = "this is random text";
text.remove();

const newDiv = document.createElement("div");
newDiv.textContent = "create element";
document.body.appendChild(newDiv);


document.querySelector("img").src = "https://img.freepik.com/free-photo/chocolate-cake-with-whipped-cream-fruits_140725-2715.jpg?semt=ais_hybrid&w=740&q=80";

document.getElementById("btn").addEventListener("click", function () {
    const message = document.getElementById("message")
    message.textContent = "clicked"
})