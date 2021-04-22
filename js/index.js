const navigationToggle = document.querySelector('.navigation-toggle');
const navigationLinks = document.querySelectorAll('.navigation__link');

navigationToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('navigation-open');
});

navigationLinks.forEach(link =>{
    link.addEventListener('click', () =>{
        document.body.classList.remove('navigation-open');
    })
})
