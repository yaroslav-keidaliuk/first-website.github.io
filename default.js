// Created on iPad.

console.log("Hello, World!")

const anotherPageButton = document.getElementById('another-page-button');

anotherPageButton.addEventListener('click', ()=> {
    window.location.href = 'page2.html';
});