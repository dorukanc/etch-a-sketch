const container = document.getElementById('container');
const adjust = document.getElementById('adjust');

// init grid 16 * 16 default
generateGrid(16, 16);


function getUserInput(){
    let colSize = parseInt(prompt('Please enter the col size:', '16'), 10) || 16; // add default vals
    let rowSize = parseInt(prompt('Please enter the row size:', '16'), 10) || 16; 

    colSize = Math.max(1, Math.min(100, isNaN(colSize) ? 16 : colSize));
    rowSize = Math.max(1, Math.min(100, isNaN(colSize) ? 16 : rowSize));

    return {colSize, rowSize};
}


function generateGrid(colSize, rowSize){
    for(let i=1; i<=colSize; i++){
        const col = document.createElement('div');
        col.className = 'col';
        container.appendChild(col);

        for(let j=1; j<=rowSize; j++){
            const square = document.createElement('div');
            square.className = 'square';  
            col.appendChild(square);  

            square.addEventListener('mouseover', function(){
            this.style.backgroundColor = 'lightblue';
            });

            console.log('append square');    
        }
    }
}

adjust.addEventListener('click', function(){
    let userInput = getUserInput();
    container.replaceChildren(); // remove existing grid
    generateGrid(userInput.colSize, userInput.rowSize);
});