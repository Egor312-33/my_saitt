
const news1 = document.querySelector('#news1');
const menu1 = document.querySelector('#menu1');

news1.addEventListener('mouseover', () => {
    if (menu1.classList.contains('disp') == true){
        menu1.classList.remove('disp');
    } else {
        menu1.classList.add('disp');
    }
})
const news2 = document.querySelector('#news2');
const menu2 = document.querySelector('#menu2');

news2.addEventListener('mouseover', () => {
    if (menu2.classList.contains('disp') == true){
        menu2.classList.remove('disp');
    } else {
        menu2.classList.add('disp');
    }
})
const news3 = document.querySelector('#news3');
const menu3 = document.querySelector('#menu3');

news3.addEventListener('mouseover', () => {
    if (menu3.classList.contains('disp') == true){
        menu3.classList.remove('disp');
    } else {
        menu3.classList.add('disp');
    }
})