const accordion_button  = document.querySelectorAll('.accordion__header');
const accordion_item  = document.querySelectorAll('.accordion__item');

for(let i = 0; i<accordion_button.length;  i++){
    accordion_button[i].addEventListener('click', () => {
        accordion_item[i].classList.toggle('active');
    })
}


