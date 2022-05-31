// Demo's JS here
window.addEventListener("load", function () {
    var owlOptions = {
        loop: true,
        margin: 10,
        autoplay: true,
        responsiveClass: true,
        rtl: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    };
    //.view-content
    $('.our-partners_slider ').owlCarousel(owlOptions);
}, false);


window.addEventListener("load", function () {
    var owlOptions = {
        center: true,
        items: 1,
        loop: true,
        margin: 10,
        rtl: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dots: false,
        responsive: {
            600: {
                items: 5
            }
        }
    };
    //.view-content
    jQuery('.p-photo-carousel').owlCarousel(owlOptions);
}, false);


window.addEventListener("load", function () {
    var owlOptions = {
        center: true,
        items: 1,
        loop: true,
        margin: 10,
        rtl: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dots: true,
        responsive: {
            600: {
                items: 1
            }
        }
    };
    //.view-content
    jQuery('.vedioandphoto-carousel').owlCarousel(owlOptions);
}, false);


window.addEventListener("load", function () {
    var owlOptions = {
        center: true,
        items: 1,
        loop: true,
        margin: 10,
        rtl: true,
        nav:true,
        navText: ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'],
        dots: false,
        responsive: {
            600: {
                items: 1
            }
        }
    };
    //.view-content
    jQuery('.twitter-slider').owlCarousel(owlOptions);
}, false);



window.addEventListener("load", function () {
    var owlOptions = {
        center: true,
        items: 1,
        loop: true,
        stagePadding: 10,
        rtl: true,
        dots: true,
        responsive: {
            600: {
                items: 3
            }
        }
    };
    //.view-content
    jQuery('.inner-p-slider').owlCarousel(owlOptions);
}, false);


window.addEventListener("load", function () {
    var owlOptions = {
        items: 1,
            loop: true,
            margin: 10,
            nav: true,
            rtl: true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dots: false,
        responsive: {
            600: {
                items: 1
            }
        }
    };
    //.view-content
    jQuery('.testimonail-carousel').owlCarousel(owlOptions);
}, false);


// Demo's JS here
//window.addEventListener("load", function () {
//    var owlOptions = {
//        items: 1,
//        rtl: true,
//        responsiveClass: true,
//    };
//    $('.top-section-slider').owlCarousel(owlOptions);
//}, false);







(function ($) {
    $.fn.fontResize = function (options) {
        var increaseCount = 0;
        var self = this;

        var changeFont = function (element, amount) {
            var baseFontSize = parseInt(element.css('font-size'), 10);
            var baseLineHeight = parseInt(element.css('line-height'), 10);
            element.css('font-size', (baseFontSize + amount) + 'px');
            element.css('line-height', (baseLineHeight + amount) + 'px');
        };

        options.increaseBtn.on('click', function (e) {
            e.preventDefault();
            if (increaseCount === 2) {
                return;
            }
            self.each(function (index, element) {
                changeFont($(element), 1);
            });
            increaseCount++;
        });

        options.decreaseBtn.on('click', function (e) {
            e.preventDefault();
            if (increaseCount === -2) {
                return;
            }
            self.each(function (index, element) {
                changeFont($(element), -1);
            });
            increaseCount--;
        });
    }
})(jQuery);



/*responsive menu*/
(function ($) {
    $(".responsive-icon").on('click', function () {
        $(this).parents('.responsive-menu').toggleClass('full-width');
        $(this).parents('body, html').toggleClass('no-scroll');
        $(this).parents('.responsive-menu').find('.nav-container').toggleClass('responsive-nav');
        $(this).toggleClass('close-btn');
    });
})(jQuery);




$(function () {
    $('body,h1,h2,h3,h4,h5,h6,p,ul,ol,a,input, .date, .button-special, .btn').fontResize({
        increaseBtn: $('#incfont'),
        decreaseBtn: $('#decfont')
    });
});


$(window).on('load', function () {
    setTimeout(removeLoader, 1000);
})

function removeLoader() {
    $("#preloader").fadeOut(500, function () {
        $("#preloader").remove();
    });
}




(function ($) {
    $('img[data-enlargeable]').addClass('img-enlargeable').click(function () {
        var src = $(this).attr('src');
        var modal;

        function removeModal() {
            modal.remove();
            $('body').off('keyup.modal-close');
        }
        modal = $('<div>').css({
            background: 'RGBA(0,0,0,.85) url(' + src + ') no-repeat center',
            backgroundSize: '60%',
            width: '100%',
            height: '100%',
            position: 'fixed',
            zIndex: '10000',
            top: '0',
            left: '0',
            cursor: 'zoom-out'
        }).click(function () {
            removeModal();
        }).appendTo('body');
        //handling ESC
        $('body').on('keyup.modal-close', function (e) {
            if (e.key === 'Escape') {
                removeModal();
            }
        });
    });

})(jQuery);
