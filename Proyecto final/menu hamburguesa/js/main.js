/*::::Alerta::::*/

Swal.fire ({
    title: "Bienvenido",
    text: "Aceptas Nuestras Terminos y Condiciones",
    icon: 'question',
    confirmButtonText: 'Acceptar',
    backdrop: false,
    toast: true,
    position: 'top-end',
    allowOutsideClick:false,
	allowEscapeKey:false,
	allowEnterKey:false,
	stopKeydownPropagation:false,
})

/* ::::Menu Hamburguesa:::: */

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

/* ::::Slider Semi manual::::*/

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s ease";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s ease-in";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next();
})

btnLeft.addEventListener('click', function(){
    Prev();
})

setInterval(function(){
    Next();
}, 5000)

/*::::Search::::*/

const buscar = document.querySelector("#buscar")
const buscador = document.querySelector("#Buscador")

buscar.addEventListener('click', () =>{
    let buscador = document.getElementById('Buscador');
    let currentDisplay = buscador.style.display;

    if (currentDisplay == 'none') {
        buscador.style.display = 'block';
    } else {
        buscador.style.display = 'none' ;
    }
} )


