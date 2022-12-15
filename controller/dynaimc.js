const nav = document.querySelectorAll('.nav-link');
const segments = document.querySelectorAll('.segment');
let segmentOffset = [];

const removeActive = () => {
    let elem;

    for (elem of document.getElementsByClassName('active')) {
        elem.classList.remove('active');
    }
}

segments.forEach.call(segments, function (div) {
        segmentOffset.push(div.offsetTop - 162);
    }
)

window.onscroll = () => {
    let position = document.documentElement.scrollTop || document.body.scrollTop;

    for (let i in segmentOffset) {
        if (segmentOffset[i] <= position) {
            removeActive();
            nav[i].classList.add('active');
        } else if (segmentOffset[0] > position) {
            nav[0].classList.remove('active');
        }
    }
}

