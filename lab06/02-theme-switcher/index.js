/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const changeTheme = (theme) => {
   document.querySelector('body').className = theme;
};

document.querySelector('#default').addEventListener('click', () => changeTheme(''));
document.querySelector('#ocean').addEventListener('click', () => changeTheme('ocean'));
document.querySelector('#desert').addEventListener('click', () => changeTheme('desert'));
document.querySelector('#high-contrast').addEventListener('click', () => changeTheme('high-contrast'));