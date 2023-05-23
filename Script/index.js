$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
});
$(document).ready(function() {
    $('#toggle').click(function() {
        $('nav').slideToggle();
    })
})