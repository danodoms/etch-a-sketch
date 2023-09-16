const container = document.querySelector('.container');



for(let i=0; i<4; ++i){
    container.innerHTML += `
    <div class="grid">
        <div class="grid-tile"></div>
        <div class="grid-tile"></div>
        <div class="grid-tile"></div>
        <div class="grid-tile"></div>
    </div>
    `;
}

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

