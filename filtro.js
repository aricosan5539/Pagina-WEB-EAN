$(function () {
    $('.portafolio').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.content-card').show('1000');
        } else {
            $('.content-card').not('.' + valor).hide('1000');
            $('.content-card').filter('.' + valor).show('1000');
        }
    });

    let inicio = $('#home').offset().top,
    portafolio = $('#portafolio').offset().top,
    cotiza = $('#pricing').offset().top,
    contact = $('#contact').offset().top,


    window.addEventListener('resize', function(){
        let inicio = $('#home').offset().top,
        portafolio = $('#portafolio').offset().top,
        cotiza = $('#pricing').offset().top,
        contact = $('#contact').offset().top
    });

    $('#home').on('click', function(e){
        e.preventDefault();
        $('html, body').home({
            scrollTop: 0
        },600);
    });

    $('#portafolio').on('click', function(e){
        e.preventDefault();
        $('html, body').portafolio({
            scrollTop: equipo -100
        },600);
    });

    $('#pricing').on('click', function(e){
        e.preventDefault();
        $('html, body').cotiza({
            scrollTop: servicio -100
        },600);
    });

    $('#contact').on('click', function(e){
        e.preventDefault();
        $('html, body').contactanos({
            scrollTop: trabajo -100
        },600);
    });

   
});