function createGrid(){
    for (i = 0; i < 16; i++){
        const container = document.querySelector("#gridContainer");
        const gridPiece = document.createElement('div');
        container.appendChild(gridPiece);
        gridPiece.classList.add('piece');
    };
};
