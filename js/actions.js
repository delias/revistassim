$(document).ready(function() {

    $(".portada").hover(function () {

        $(this).toggleClass('portadahover');
        $('.nueva').toggleClass('nuevahover');
        $('.flecha').toggleClass('flechahover');

    })
})