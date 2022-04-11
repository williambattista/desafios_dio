// manipulação com Jquery
$('.owl-carousel').owlCarousel({
    loop:true, // efeito de loop 
    margin:10, // margem
    nav:false, // botão de navegação
    responsive:{ // o layout se adapta tela
        0:{
            items:1
        },
        600:{
            items:3.5
        },
        1000:{
            items:5.5
        }
    }
})