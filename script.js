const target = document.querySelectorAll('[data-animacao]');
const animClass = 'animate';
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


function animShow() {
    let initialDiv = document.getElementById('initial-div');
    let bestVersion = document.getElementById('best-version');
    let pricing = document.getElementById('pricing');
    let joinNow = document.getElementById('join-now');

    let landingZone = document.getElementById('landing-zone');

    initialDiv.classList.add(animClass);
    bestVersion.classList.add(animClass);
    pricing.classList.add(animClass);
    joinNow.classList.add(animClass);
    landingZone.classList.add(animClass);
}

function animScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3/4));
    target.forEach(function (element) {
        if (windowTop > element.offsetTop) {
            element.classList.add(animClass);
        }
    })
}

window.addEventListener('load', function() {
    setTimeout(animShow(), 0);
});

window.addEventListener('scroll', function() {
    setTimeout(animScroll(), 0);
});