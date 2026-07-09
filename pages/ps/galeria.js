const galerias = {

    cinefilos:[
        "ps/assets2/cinefilos1/01.jpg",
        "ps/assets2/cinefilos1/02.jpg",
        "ps/assets2/cinefilos1/03.jpg",
        "ps/assets2/cinefilos1/04.jpg",
    ],

    inspiracion:[
        
        "ps/assets2/inspiracion2/21.jpg",
        "ps/assets2/inspiracion2/22.jpg",
        "ps/assets2/inspiracion2/23.jpg",
        "ps/assets2/inspiracion3/24.jpg",
        "ps/assets2/inspiracion3/25.jpg",
        "ps/assets2/inspiracion3/27.jpg",
    ],

    expediente:[
        "ps/assets2/expediente/7.jpg",
        "ps/assets2/expediente/8.jpg",
        "ps/assets2/expediente/9.jpg",
        "ps/assets2/expediente/10.jpg",
        "ps/assets2/expediente/11.jpg",
        "ps/assets2/expediente/12.jpg",
        "ps/assets2/expediente/13.jpg",
        "ps/assets2/expediente/14.jpg"
    ],

    proceso:[
        "ps/assets2/proceso/16.jpg",
        "ps/assets2/proceso/18.jpg",
        "ps/assets2/proceso/19.jpg",
        "ps/assets2/proceso/20.jpg",
        "ps/assets2/proceso/21.jpg",
        "ps/assets2/proceso/22.jpg"
    ],

    modelado3d:[
        "ps/assets2/modelado3d/23.jpg",
        "ps/assets2/modelado3d/24.jpg",
        "ps/assets2/modelado3d/25.jpg",
        "ps/assets2/modelado3d/26.jpg"
    ],

    sobremi:[
        "ps/assets2/sobremi/300.jpg"
    ]

};

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab"); // "expediente"
    if (tab) {
        activarTab(tab); // tu función que abre la pestaña y carga el slider
    }
});

let categoria = "cinefilos";
let indice = 0;
let timer;

const img = document.getElementById("sliderImage");
const dots = document.getElementById("dots");

function cargarImagen(){

    img.src = galerias[categoria][indice];

    crearDots();
}

function crearDots(){

    dots.innerHTML = "";

    galerias[categoria].forEach((_,i)=>{

        const dot = document.createElement("div");

        dot.classList.add("dot");

        if(i===indice){
            dot.classList.add("active");
        }

        dot.onclick=()=>{

            indice=i;

            cargarImagen();
        };

        dots.appendChild(dot);
    });
}

function siguiente(){

    indice++;

    if(indice>=galerias[categoria].length){

        indice=0;
    }

    cargarImagen();
}

function anterior(){

    indice--;

    if(indice<0){

        indice=galerias[categoria].length-1;
    }

    cargarImagen();
}

document.querySelector(".derecha")
.addEventListener("click",siguiente);

document.querySelector(".izquierda")
.addEventListener("click",anterior);

document.querySelectorAll(".tab-btn")
.forEach(btn=>{

    btn.addEventListener("click",()=>{

        categoria = btn.dataset.tab;

        indice = 0;

        document
        .querySelectorAll(".tab-btn")
        .forEach(b=>b.classList.remove("active"));

        btn.classList.add("active");

        cargarImagen();
    });

});

const params = new URLSearchParams(window.location.search);

const tab = params.get("tab");

if(tab && galerias[tab]){

    categoria = tab;
}

document
.querySelector(`[data-tab="${categoria}"]`)
.classList.add("active");

cargarImagen();

timer = setInterval(siguiente,40000);
