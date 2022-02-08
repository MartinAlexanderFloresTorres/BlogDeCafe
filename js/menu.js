const menudespegable = document.querySelector(".menubar");
const navegacion = document.querySelector(".nav");
const bg = document.querySelector('.bg');

menudespegable.addEventListener("click", () => {
    menudespegable.classList.toggle("active");
    navegacion.classList.toggle('active');
});
document.addEventListener('scroll', () =>{
    const valor_scroll = window.scrollY;
    if (valor_scroll > 100) {
        bg.style.backgroundColor = "#000000";
    } else {
        bg.style.backgroundColor = "#0000003f";
    }
})
