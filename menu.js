const navSlide = () => {
    // Henter hvilke funktioner der skal koreleres med i CSS
    const burgermenu = document.querySelector('.burgermenu');
    const navigation = document.querySelector('.nav-links');
    const navilinks = document.querySelectorAll('.nav-links li')

    // Toggler classes mellem nav-links og nav-active med effekt af at burgermenu skjules/aktiveres
    burgermenu.addEventListener('click',()=>{
        navigation.classList.toggle('nav-active');

        // Animerer links.
        navilinks.forEach((link, index) => {
            if(link.style.animation){
               link.style.animation = ''
           }else{
                link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.2}s`;
           }
        });
        // Animerer burgermenu
        burgermenu.classList.toggle('toggle');
    });
}

navSlide();