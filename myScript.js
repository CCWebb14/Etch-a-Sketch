let newBox = 0;

const container = document.createElement("div");

document.body.appendChild(container);
container.classList.add('container');

for(let i = 0; i<16; i++){
    newBox = document.createElement("div");
    container.appendChild(newBox);
    newBox.classList.add('box');
}
