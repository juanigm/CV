addEventListener ('DOMContentLoaded', () => {
    const nav__btn = document.querySelector('.nav__btn');
    const nav__items = document.querySelectorAll('.resp');
    if(nav__btn && nav__items){
        const nav__ul = document.querySelector('.nav__ul-responsive');
        nav__btn.addEventListener('click', () => {
            nav__ul.classList.toggle('show');
        });

        for(var i = 0; i < nav__items.length; i++){
            nav__items[i].addEventListener('click', () =>{
                nav__ul.classList.toggle('show');
            });
        }
    }
    else{
        console.log("Error");
    }
});