window.onload = () => {
    const forrest = document.getElementById("trees");
    const boat = document.getElementById("boat");
    const ocean = document.getElementById("ocean")
    console.log(ocean)
    setTimeout(() => {
        ocean.setAttribute('visible', 'true');
        forrest.setAttribute('visible', 'false');
        boat.setAttribute('visible', 'true');
        console.log(boat)
        ocean.setAttribute('visible', 'true');
        boat.setAttribute('animation', {
            property: 'position',
            to: '28 0 -2',
            dur: 10000,
            easing: 'linear'
        });
        console.log("The boat is now floating.");
    }, 10000);
}





// Debugging to check if assets are loaded
document.querySelector('a-scene').addEventListener('loaded', () => {
    console.log('A-Frame scene loaded');
});

document.querySelector('#treeModel').addEventListener('loaded', () => {
    console.log('Tree model loaded');
});

document.querySelector('#ocean').addEventListener('loaded', () => {
    console.log('ocean loaded')
})

document.querySelector('#grassTexture').addEventListener('loaded', () => {
    console.log('Grass texture loaded');
});

document.querySelector('#forestSound').addEventListener('loaded', () => {
    console.log('Forest sound loaded');
});
