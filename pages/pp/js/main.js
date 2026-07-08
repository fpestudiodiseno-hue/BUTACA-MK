/* ===================================================== */
/* CARRUSELES AUTOMATICOS */
/* ===================================================== */

const sliders = document.querySelectorAll(".slider");

sliders.forEach(slider => {

    const images = slider.querySelectorAll("img");

    let current = 0;

    setInterval(() => {

        images[current].classList.remove("active");

        current++;

        if(current >= images.length){
            current = 0;
        }

        images[current].classList.add("active");

    }, 4000);

});