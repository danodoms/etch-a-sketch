const container = document.querySelector('.container');
const gridTile = document.querySelectorAll('.grid-tile');


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


gridTile.addEventListener('click', function () {
    gridTile.classList.add('hovered');
});

