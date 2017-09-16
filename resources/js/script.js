$('document').ready(function () {
    
    /* For The sticky Navigation */
    
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
        
    }, { offset: '90px'
    });
    
    /* Scroll On Buttons */
    
    $('#js--scroll-to-signup').click(function (){
       $('html, body').animate({scrollTop: $('#js--section-form').offset().top}, 1000)        
    });
    
    $('#js--about-us').click(function (){
       $('html, body').animate({scrollTop: $('#js--about-section').offset().top}, 1000)        
    });
    
    $('#js--our-mission').click(function (){
       $('html, body').animate({scrollTop: $('#js--our-mission-section').offset().left}, 1000)
    });
    
    $('#js--contact-us').click(function (){
       $('html, body').animate({scrollTop: $('#js--contact-us-section').offset().top}, 1000)        
    });
    
    $('#js--home').click(function (){
       $('html, body').animate({scrollTop: $('#js--home-section').offset().top}, 1000)        
    });
    
});