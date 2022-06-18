$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active')
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Full Stack Developer", "Designer", "Youtuber"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Full Stack Developer", "Designer", "Youtuber"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoPlayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    $('.sendEmail').click(function() {
        var tempParams = {
            from_name: $('.sname').val(),
            from_email: $('.semail').val(),
            to_name: 'Lipun Kumar Patel',
            subject: $('.ssubject').val(),
            message: $('.smessage').val()
        };

        if (tempParams.from_name && tempParams.from_email && tempParams.to_name && tempParams.subject && tempParams.message) {
            emailjs.send('Lipun619','template_8jxzhqq',tempParams)
            .then(function(res){
                debugger;
                if (res.text.toLowerCase() == 'ok') {
                    swal("Awesome😍", "Your message has been sent successfully!", "success");
                    $('.sname').val("");
                    $('.semail').val("");
                    $('.ssubject').val("");
                    $('.smessage').val("");
                } else {
                    swal("Sorry😞", "We could not deliver your message!", "error");
                    console.log(res)
                }
            });
        } else {
            swal("Wait😠", "Please fill the details to send email!", "warning");
        }
    });
});