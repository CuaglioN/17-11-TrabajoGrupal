'use strict'
const grande    = document.querySelector('.grande');
const punto     = document.querySelectorAll('.punto');
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{
        let posicion  = i;
        let operacion = posicion * -50;
        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`;

        punto.forEach( ( cadaPunto , i )=>{
            punto[i].classList.remove('activo');
        })
        punto[i].classList.add('activo');

    })
})
