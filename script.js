
function createGrid(){
    for (i = 0; i < 256; i++){
        const container = document.querySelector('#gridContainer');
        const gridPiece = document.createElement('div');
        container.appendChild(gridPiece);
        gridPiece.classList.add('piece');
    };
};

createGrid();

const x = document.querySelectorAll('.piece');   
x.forEach((piece) => {
    piece.addEventListener('mouseover', (e) => {
        piece.setAttribute('style', 'background-color: black');    
    });
  });


document.querySelector('.clearButton');
  clearButton.addEventListener('click', (e) => {
    x.forEach((piece) => {
            piece.setAttribute('style', 'background-color: white');   
            });
});
