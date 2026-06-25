const galerias = {

    cinefilos:[
        "assets2/cinefilos1/01.jpg",
        "assets2/cinefilos1/02.jpg",
        "assets2/cinefilos1/03.jpg",
        "assets2/cinefilos1/04.jpg",
        "assets2/cinefilos2/4.jpg",
        "assets2/cinefilos2/5.jpg",
        "assets2/cinefilos2/8.jpg",
        "assets2/cinefilos2/9.jpg",
        "assets2/cinefilos2/10.jpg",
        "assets2/cinefilos2/11.jpg",
        "assets2/cinefilos2/12.jpg"
    ],

    inspiracion:[
        "assets2/inspiracion1/15.jpg",
        "assets2/inspiracion1/16.jpg",
        "assets2/inspiracion1/17.jpg",
        "assets2/inspiracion2/21.jpg",
        "assets2/inspiracion2/22.jpg",
        "assets2/inspiracion2/23.jpg",
        "assets2/inspiracion3/24.jpg",
        "assets2/inspiracion3/25.jpg",
        "assets2/inspiracion3/27.jpg",
    ],

    expediente:[
        "assets2/expediente/1.jpg",
        "assets2/expediente/2.jpg",
        "assets2/expediente/3.jpg",
        "assets2/expediente/4.jpg",
        "assets2/expediente/5.jpg",
        "assets2/expediente/6.jpg",
        "assets2/expediente/7.jpg",
        "assets2/expediente/8.jpg",
        "assets2/expediente/9.jpg",
        "assets2/expediente/10.jpg",
        "assets2/expediente/11.jpg",
        "assets2/expediente/12.jpg",
        "assets2/expediente/13.jpg",
        "assets2/expediente/14.jpg",
        "assets2/expediente/15.jpg",
        "assets2/expediente/16.jpg",
        "assets2/expediente/17.jpg",
        "assets2/expediente/18.jpg",
        "assets2/expediente/19.jpg",
        "assets2/expediente/20.jpg",
        "assets2/expediente/21.jpg",
        "assets2/expediente/22.jpg",
        "assets2/expediente/23.jpg",
        "assets2/expediente/24.jpg",
        "assets2/expediente/25.jpg",
    ],

    proceso:[
        "assets/proceso/1.jpg",
        "assets/proceso/2.jpg"
    ],

    modelado3d:[
        "assets2/modelado3d/01.jpg",
        "assets2/modelado3d/02.jpg",
        "assets2/modelado3d/03.jpg",
        "assets2/modelado3d/04.jpg"
    ],

    sobremi:[
        "assets/sobremi/1.jpg",
        "assets/sobremi/2.jpg"
    ]

};

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

timer = setInterval(siguiente,5000);