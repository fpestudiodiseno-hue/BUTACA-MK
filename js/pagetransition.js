/* ======================================= */
/* TRANSICIÓN ENTRE PÁGINAS */
/* ======================================= */

window.addEventListener("load",()=>{

    requestAnimationFrame(()=>{

        document.body.classList.add("page-loaded");

    });

});

const overlay = document.getElementById("page-transition");

document.querySelectorAll("a").forEach(link=>{

    const href = link.getAttribute("href");

    if(!href) return;

    if(href.startsWith("#")) return;

    if(href.startsWith("mailto:")) return;

    if(href.startsWith("tel:")) return;

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        document.body.classList.remove("page-loaded");

        document.body.classList.add("page-leaving");

        overlay.classList.add("active");

        setTimeout(()=>{

            window.location.href = href;

        },50);

    });

});