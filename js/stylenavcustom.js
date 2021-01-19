const navSlide= ()=> {
    const burger = document.querySelector('.burgercustom');
    const nav = document.querySelector('.nav-linkscustom');

    const navLinks = document.querySelectorAll('.nav-linkscustom li');
    //toggle nav
    burger.addEventListener('click',()=> {
        nav.classList.toggle('nav-activecustom');
        
        //animate links
        navLinks.forEach((link,index)=> {
            if(link.style.animation) {
            link.style.animation = ''
        } 
            else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`;
        }
    });

    //burger animation
    burger.classList.toggle('toggle');
    
    });

}
navSlide();

