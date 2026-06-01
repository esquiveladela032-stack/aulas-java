`use strict`;
//Criando/cofigurando objeto de opcoes para o slider

const opcoes = {
    type:'loop',
    autoplay:true,
    interval: 5000,
    pagination: false,

    //Design responsivo
    perPage:3,
    gap:"1rem",
    breakpoints:{
        800:{perPage:2},
        600:{perPage:1}
    }
    


};

// criando e guardando slider  em memoria
const slider = new Splide('.splide' , opcoes);


//ativando
slider.mount();