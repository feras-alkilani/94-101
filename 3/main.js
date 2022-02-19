document.getElementsByTagName("p")[0].remove();

var s = document.getElementsByTagName("div")[0];
console.log(s.classList.value);


const newItem = document.createElement("div");

newItem.innerText = "Start";
document.body.appendChild(newItem);

s.insertBefore(newItem, s.childNodes[0]);



const jara = document.createElement("div");
jara.innerText = "End";
document.body.appendChild(jara);




