const defined_size = prompt("Please enter a square number. Ex. 4, 9, 16... Max 10 000", 10000);

if(defined_size > 10000){
    throw new Error('Too large of a size');
}


if(!isInt((Math.sqrt(defined_size)))){
    throw new Error('Non square number entered');
}

function isInt(n) {
    return n % 1 === 0;
}

let newBox = 0;
let currentRow = 0;

const resetHolder = document.createElement("div");
document.body.appendChild(resetHolder);
resetHolder.classList.add('resetHolder');

const resetButton = document.createElement("button");
resetHolder.appendChild(resetButton);
resetButton.classList.add('resetButton');
resetButton.innerText = "RESET";

let container = document.createElement("div");
document.body.appendChild(container);
container.classList.add('container');

let row_size = Math.sqrt(defined_size);

buildGrid();

resetButton.addEventListener('click', resetGrid);

let boxes = document.querySelectorAll('.box');

boxes.forEach(box => box.addEventListener('mouseover', enableBox));
boxes.forEach(box => box.addEventListener('click', enableBoxClick));


function buildGrid(){
    

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
}

function enableBox(e){
    if(e.buttons == 1 || e.buttons == 3){
        let ranColor = Math.floor(Math.random()*16777215).toString(16);
        if (this.classList.contains('enabled')){
            if (this.style.backgroundColor == 'unset'){
                this.style.backgroundColor = "#" + ranColor;
            }
            else {
                newColor = shadeRGBColor(this.style.backgroundColor, -0.2);
                this.style.backgroundColor = newColor;
            }
        }
        else {
            this.classList.add('enabled');
            this.style.backgroundColor = "#" + ranColor;
        }
    }
}

function enableBoxClick(e){

    let ranColor = Math.floor(Math.random()*16777215).toString(16);
    if (this.classList.contains('enabled')){
        if (this.style.backgroundColor == 'unset'){
            this.style.backgroundColor = "#" + ranColor;
        }
        else {
            newColor = shadeRGBColor(this.style.backgroundColor, -0.2);
            this.style.backgroundColor = newColor;
        }
    }
    else {
        this.classList.add('enabled');
        this.style.backgroundColor = "#" + ranColor;
    }

}

// https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)
function shadeRGBColor(color, percent) {
    var f=color.split(","),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=parseInt(f[0].slice(4)),G=parseInt(f[1]),B=parseInt(f[2]);
    return "rgb("+(Math.round((t-R)*p)+R)+","+(Math.round((t-G)*p)+G)+","+(Math.round((t-B)*p)+B)+")";
}

function resetGrid(){
    boxes.forEach(box => box.classList.remove('enabled'));
    boxes.forEach(box => box.style.backgroundColor = "unset");
}