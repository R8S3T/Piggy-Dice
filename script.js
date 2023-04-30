function getBaseSize() {
    const currentPage = window.location.pathname.split('/').pop();
    switch (currentPage) {
        case 'game.html':
            return { width: 1547.5, height: 1185 };
        case 'points.html':
            return { width: 1447.5, height: 1185 };
        case 'index.html':
        default:
            return { width: 1832.77, height: 978.54 };
    }
}

function resizeGame() {
    const gameContainer = document.getElementById('game-container');
    const baseSize = getBaseSize();
    const scaleFactor = Math.min(window.innerWidth / baseSize.width, window.innerHeight / baseSize.height);
    gameContainer.style.transform = `translate(-50%, -50%) scale(${scaleFactor})`;
}

window.addEventListener('resize', resizeGame);
window.addEventListener('load', resizeGame);
