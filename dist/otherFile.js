"use strict";
console.log('this is other ts file');
const button = document.querySelector('#myBtn');
if (button) {
    button.addEventListener('click', () => {
        alert('You pressed the button!');
    });
}
