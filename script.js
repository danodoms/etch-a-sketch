const container = document.querySelector('.container');


let gridWidth = 100;
let gridHeight = 100;

//Grid Resolution setter
for(let i=0; i<gridHeight; ++i){
    let gridHolder = '<div class="grid">';
    for(let x=0; x<gridWidth; ++x){
        gridHolder+='<div class="grid-tile"></div>'
    }
    gridHolder+='</div>';
    container.innerHTML+=gridHolder;
}





// container.innerHTML += `
// <div class="grid">
//     <div class="grid-tile"></div>
//     <div class="grid-tile"></div>
//     <div class="grid-tile"></div>
//     <div class="grid-tile"></div>
// </div>
// `;




const gridTiles = document.querySelectorAll('.grid-tile');

// grids.forEach(tile => {
//     tile.addEventListener('mouseover', function () {
//       tile.classList.add('hovered');
//       console.log("hovered");
//     });
// });

console.log("grid-tile count: " + gridTiles.length);
gridTiles.forEach(tile =>{
    tile.addEventListener('mouseover', function() {
        tile.classList.add('hovered');
    })
});

