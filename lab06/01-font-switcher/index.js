let pSize = 20;
let header = 32;
const makeBigger = () => {
   // alert('make bigger!');
   pSize += 4;
   header += 4;
   document.querySelector('p').style.fontSize = `${pSize}px`;
   document.querySelector('h1').style.fontSize = `${header}px`;
};

const makeSmaller = () => {
   // alert('make smaller!');
   pSize -= 4;
   header -= 4;
   document.querySelector('p').style.fontSize = `${pSize}px`;
   document.querySelector('h1').style.fontSize = `${header}px`;
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

