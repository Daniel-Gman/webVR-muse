window.onload = () => {
    const forrest = document.getElementById("trees");
    const boat = document.getElementById("boat");
    const ocean = document.getElementById("ocean");
    const lumber = document.getElementById("lumberyard");
    const plane = document.getElementById("plane");
    const nyc = document.getElementById("city");
    console.log(ocean);

    setTimeout(() => {
        plane.setAttribute('visible', 'false');
        ocean.setAttribute('visible', 'true');
        forrest.setAttribute('visible', 'false');
        boat.setAttribute('visible', 'true');
        console.log(boat);
        boat.setAttribute('animation', {
            property: 'position',
            to: '28 0 -2',
            dur: 20000,
            easing: 'linear'
        });
        console.log("The boat is now floating.");

        // Set a timeout to hide the boat and ocean after the animation completes
        setTimeout(() => {
            boat.setAttribute('visible', 'false');
            ocean.setAttribute('visible', 'false');
            plane.setAttribute('visible', 'true');
            forrest.setAttribute('visible', 'false');
            lumber.setAttribute('visible', 'true');
            console.log("The boat and ocean are now hidden.");

            // Set another timeout to hide the lumber and other elements after 10 seconds
            setTimeout(() => {
                lumber.setAttribute('visible', 'false');
                plane.setAttribute('visible', 'false');
                forrest.setAttribute('visible', 'false');
                nyc.setAttribute('visible', 'true');
                console.log(nyc)
                console.log("The lumber and other elements are now hidden.");
            }, 10000); // Hide after 10 seconds
        }, 20000); // Initial animation duration
    }, 20000); // Initial delay
};



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
