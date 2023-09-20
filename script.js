'use strict';
const showModelBtns = document.querySelectorAll('.show-modal');
const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');
const hidden = () => {
    model.classList.add('hidden');
    overlay.classList.add('hidden');

}
for (let i = 0; i < showModelBtns.length; i++) {
    showModelBtns[i].addEventListener('click', () => {
        model.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
}
close.addEventListener('click', hidden);
overlay.addEventListener('click', hidden);
document.addEventListener('keydown', (ev) => {
    console.log(ev.key);
    if (ev.key === 'Escape' && !model.classList.contains('hidden')) {
        hidden();
    }
})