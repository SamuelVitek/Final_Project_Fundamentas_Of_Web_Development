import data from '../data/articles.json' assert { type: 'json' };

const arDate = document.getElementById('article-date');
const arTitle = document.getElementById('article-title');
const arText = document.getElementById('article-text');
const actualURL = new URL(window.location.href);
const id = actualURL.searchParams.get('articleId') - 1;

loadDetail(data[id].title, data[id].content, data[id].date);

function loadDetail(heading, text, date) {
    arDate.innerHTML = date;
    arTitle.innerHTML = heading;
    arText.innerHTML = text;
}
