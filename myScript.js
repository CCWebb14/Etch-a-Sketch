let newBox = 0;
let currentRow = 0;

const container = document.createElement("div");

document.body.appendChild(container);
container.classList.add('container');

let defined_size = 900;

let row_size = Math.sqrt(defined_size);

for(let i = 0; i<defined_size; i++){
    if (i === 0 || (i%(row_size) === 0)){
        currentRow = document.createElement("div");
        container.appendChild(currentRow);
        currentRow.classList.add('row');
    }
    newBox = document.createElement("div");
    currentRow.appendChild(newBox);
    newBox.classList.add('box');
}
