function renderHeader(index) {
    document.getElementById('header').textContent = index.toString();
}

function renderState() {
    renderHeader((window.history.state && window.history.state.index) || 'Index');
}

console.log('Initializing...');
renderState();

window.addEventListener('popstate', () => {
    console.log(`popstate: ${window.location.href}`);
    renderState();
});


// window.history.replaceState({ index: 0 }, null);
document.getElementById('redirect').onclick = function () {
    window.location = '/logout';
};

document.getElementById('forward').onclick = function () {
    const currentIndex = (window.history.state && window.history.state.index + 1) || 0;
    window.history.pushState({ index: currentIndex }, null, `/${currentIndex}`);
    console.log(`Pushing state ${currentIndex}`);
    renderHeader(currentIndex);
};
