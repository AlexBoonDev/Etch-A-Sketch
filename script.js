// VARIABLES //

let gridSize = 16;
let pieceSize = 608/gridSize;
let currentAttribute = "height: " + pieceSize + "px; width: " + pieceSize + "px; background-color: white;";
const container = document.querySelector('#gridContainer');


// FUNCTIONS //

function createGrid(){

    pieceSize = (608/gridSize);
    currentAttribute = "height: " + pieceSize + "px; width: " + pieceSize + "px; background-color: white;";

    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    };

    for (i = 0; i < (gridSize**2); i++){
        const gridPiece = document.createElement('div');
        container.appendChild(gridPiece);
        gridPiece.classList.add('piece');
        gridPiece.setAttribute('style', currentAttribute);    
    };

};

createGrid();

// MOUSEOVER //

let x = document.querySelectorAll('.piece');   

x.forEach((piece) => {
    piece.addEventListener('mouseover', (e) => {
        piece.style.backgroundColor = "black"; 
    });
});

  // BUTTONS //
  
document.querySelector('.clearButton');
  clearButton.addEventListener('click', (e) => {
    x.forEach((piece) => {
        piece.setAttribute('style', currentAttribute); 
    });
});

document.querySelector('.sizeButton');
  sizeButton.addEventListener('click', (e) => {
    gridSize = prompt("Choose the height/width of the grid");
    createGrid();
});