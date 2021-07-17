const modal = document.querySelector('.modal');
const login = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');

login.addEventListener('click', () => {
    modal.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
    if(e.target == modal)
    {
        modal.style.display = 'none';
    }
})
