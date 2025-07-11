$(document).ready(function () {

    $(window).on('scroll', function(){
    var triggerPoint = $('.home .hero').offset().top - $(window).height() + 10;
    if($(window).scrollTop() > triggerPoint){
        $('.home .hero .text1').addClass('animate');
        $('.home .hero .text2').addClass('animate');
    }});


    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('.fa-bars').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');

        // highlight nav links on scroll
        $('section').each(function () {
            let top = $(window).scrollTop();
            let id = $(this).attr('id');
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            if (top >= offset && top < offset + height) {
                $('.header nav ul li a').removeClass('active');
                $('.header nav ul li a[href="#' + id + '"]').addClass('active');
            }
        });
    });

    $('.count').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },
        {
            duration: 5000,
            easing: 'swing',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum + '+');
            }
        });
    });

    $('.project').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // Smooth scroll
    $('nav ul li a').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 700);
    });

    // fade in animation on scroll
    $(window).scroll(function(){
        $('.service .box, .project .box, .contact-box').each(function(){
            var top_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if(bottom_of_window > top_of_element){
                $(this).addClass('visible');
            }
        });
    });
     

    window.addEventListener('scroll', function() {
    const boxes = document.querySelectorAll('.service .box, .project .box, .contact-box');
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });

    
});

});
