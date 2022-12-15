import data from '../data/articles.json' assert { type: 'json' };

const container = document.getElementById('articles');

const json = JSON.parse(JSON.stringify(data));
const loadTitles = (data) => {
    for (let i = 0; i < data.length; i++) {
        updateUI(data[i].id, data[i].title, data[i].date);
    }
}

const onClick = (event) => {
    const id = event.target.id;
    let url = new URL(location.protocol + '//' + location.host + '/Final_Project/' + 'detail.html');
    url.searchParams.append('articleId', id);
    // noinspection JSValidateTypes
    window.location.href = url;
}

loadTitles(json);

function updateUI(id, heading, date) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('row', 'h-100', 'justify-content-between', 'work-block');

    const dateDiv = document.createElement('div');
    dateDiv.classList.add('col-4', 'pt-4');

    const dateParagraph = document.createElement('p');
    dateParagraph.classList.add('my-auto', 'blog-date');

    const headingDiv = document.createElement('div');
    headingDiv.classList.add('col-8', 'pt-4', 'pb-4');

    const headingParagraph = document.createElement('a');
    headingParagraph.classList.add('post-title');
    headingParagraph.id = id;

    headingParagraph.addEventListener('click', onClick);

    // noinspection EqualityComparisonWithCoercionJS
    if (id == json.length) {
        wrapper.classList.remove('work-block');
    }

    container.appendChild(wrapper);
    wrapper.appendChild(dateDiv);
    dateDiv.appendChild(dateParagraph);
    wrapper.appendChild(headingDiv);
    headingDiv.appendChild(headingParagraph);

    dateParagraph.innerHTML = date;
    headingParagraph.innerHTML = heading;
}