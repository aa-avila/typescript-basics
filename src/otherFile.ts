console.log('this is other ts file');

//with "strictNullChecks": true
//op1:
// const button = document.querySelector('myBtn')!; //<- ahi '!' le dice a TS que confíe en mí, que no será null.
// button.addEventListener('click', () => {
//   alert('You pressed the button!');
// });

//op2 (better):
const button = document.querySelector('#myBtn');
if (button) {
  button.addEventListener('click', () => {
    alert('You pressed the button!');
  });
}

//with "strictNullChecks": false
/*
const button = document.querySelector('myBtn');
button.addEventListener('click', () => {
  alert('You pressed the button!');
});
// esta opcion no esta tan buena porque desactiva el null check
*/
