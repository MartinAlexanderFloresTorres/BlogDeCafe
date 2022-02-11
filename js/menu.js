const menudespegable = document.querySelector(".menubar");
const navegacion = document.querySelector(".nav");
const bg = document.querySelector(".bg");

menudespegable.addEventListener("click", () => {
    menudespegable.classList.toggle("active");
    navegacion.classList.toggle("active");
});
document.addEventListener("scroll", () => {
    const valor_scroll = window.scrollY;
    if (valor_scroll > 100) {
        bg.style.backgroundColor = "#000000";
    } else {
        bg.style.backgroundColor = "#0000003f";
    }
});

// menu de color

const tema_iconos = document.querySelector(".tema-iconos");
const body = document.querySelector('body');

tema_iconos.addEventListener("click", () => {
    tema_iconos.classList.toggle('active');
    body.classList.toggle('claro');

    if (!body.classList.contains('claro')) {
        localStorage.setItem('modo', 'oscuro')
    } else {
        localStorage.setItem('modo', 'claro');
    }
});

const getmodo = localStorage.getItem('modo');

if (getmodo === ('claro')) {
    body.classList.toggle('claro');
    tema_iconos.classList.toggle('active');
} else {
    body.classList.remove('claro');
    tema_iconos.classList.remove('active');
}