const gridContainer = document.querySelector('.grid-container');


function changeGridResolution(){
    gridContainer.innerHTML = '';
    let gridResolution = prompt("enter grid resolution");

    //Grid Resolution setter
    for(let i=0; i<gridResolution; ++i){
        let gridHolder = '<div class="grid">';
        for(let x=0; x<gridResolution; ++x){
            gridHolder+='<div class="grid-tile"></div>'
        }
    gridHolder+='</div>';
    gridContainer.innerHTML+=gridHolder;
    }

    const gridTiles = document.querySelectorAll('.grid-tile');


    console.log("grid-tile count: " + gridTiles.length);
    gridTiles.forEach(tile =>{
        tile.addEventListener('mouseover', function() {
            tile.classList.add('hovered');
        })
    });
}



