import data from '../data/articles.json' assert { type: 'json' };

const json = JSON.parse(JSON.stringify(data));
const arDate = document.getElementById('article-date');
const arTitle = document.getElementById('article-title');
const arText = document.getElementById('article-text');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const actualURL = new URL(window.location.href);
let id = actualURL.searchParams.get('articleId');

const pageRefresh = () => {
    if (id == 1) {
        prev.style.visibility = 'hidden';
    } else if (id == json.length) {
        next.style.visibility = 'hidden';
    } else {
        next.style.visibility = 'visible';
        prev.style.visibility = 'visible';
    }
}

loadDetail(data[id - 1].title, data[id - 1].content, data[id - 1].date);
window.onload = pageRefresh();

function loadDetail(heading, text, date) {
    arDate.innerHTML = date;
    arTitle.innerHTML = heading;
    arText.innerHTML = text;
}

next.onclick = function nextPost() {
    id++;
    actualURL.searchParams.set('articleId', id);
    history.pushState(null, "", actualURL);
    pageRefresh();
    loadDetail(data[id - 1].title, data[id - 1].content, data[id - 1].date);
}

prev.onclick = function prevPost() {
    id--;
    actualURL.searchParams.set('articleId', id);
    history.pushState(null, "", actualURL);
    pageRefresh();
    loadDetail(data[id - 1].title, data[id - 1].content, data[id - 1].date);
}

