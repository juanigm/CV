addEventListener ('DOMContentLoaded', () => {
    const nav__btn = document.querySelector('.nav__btn');
    if(nav__btn){
        nav__btn.addEventListener('click', () => {
            const nav__ul = document.querySelector('.nav__ul-responsive');
            nav__ul.classList.toggle('show');
        });
    }
    else{
        console.log("Error");
    }
});
