window.onload = () => {
    const forrest = document.getElementById("trees");

    setTimeout(() => {
        forrest.setAttribute('visible', 'false');
        console.log("The elements have disappeared.");
    }, 10000);

    // Debugging to check if assets are loaded
    document.querySelector('a-scene').addEventListener('loaded', () => {
        console.log('A-Frame scene loaded');
    });

    document.querySelector('#treeModel').addEventListener('loaded', () => {
        console.log('Tree model loaded');
    });

    document.querySelector('#grassTexture').addEventListener('loaded', () => {
        console.log('Grass texture loaded');
    });

    document.querySelector('#forestSound').addEventListener('loaded', () => {
        console.log('Forest sound loaded');
    });
};