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


// random rgb color generate
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
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

            let opacityCounter = 0;
            square.addEventListener('mouseover', function(){
    
            this.style.backgroundColor = random_rgba();
            this.style.opacity = opacityCounter;
            opacityCounter += 0.1;
            opacityCounter = Math.min(opacityCounter, 1);

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