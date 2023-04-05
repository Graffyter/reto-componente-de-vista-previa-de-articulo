const share = document.querySelector('.shareActive');
const button = document.querySelector('.button');

button.addEventListener('click', showShare);

function showShare(){
    share.classList.toggle('inactive')
}
