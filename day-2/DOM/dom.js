const div = document.getElementById("div");
div.textContent = "Document object model";
div.style.color = "red"
div.style.height = "200px"
div.style.width = "200px"
div.style.backgroundColor = "black"

const jims = document.querySelectorAll("li")
jims.forEach(function (item){
item.style.color = "red"
})

const text = document.querySelector("p");
text.textContent = "undaa"
text.remove();
const newDiv = document.createElement("div");
newDiv.textContent = "test";
newDiv.style.textAlign = "center";

document.body.appendChild(newDiv);

document.querySelector("img").scr = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/37/aa/3d/caption.jpg?w=800&h=800&s=1"

const message = document.getElementById("btn").addEventListener("click" , function () {
    const message = document.getElementById("message")
   message.textContent = "clicked"
})