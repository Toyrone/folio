import style from './scss/main.scss';

function showYear() {
    if (document.getElementById('copy-year')) {
        const elem = document.getElementById('copy-year');
        const dateTime = new Date();
        elem.innerHTML = dateTime.getFullYear();
    }
}

showYear();
