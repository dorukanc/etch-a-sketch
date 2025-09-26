const container = document.getElementById('container');

for(let i=1; i<=16; i++){
    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);

    for(let j=1; j<=16; j++){
        const square = document.createElement('div');
        square.className = 'square';  
        row.appendChild(square);  
        console.log('append square');    
    }
}
