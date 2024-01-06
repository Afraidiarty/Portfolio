function showTooltip(text, element) {
    var tooltip = $('#tooltip');
    tooltip.html(text);
    tooltip.css({
        left: (element.offsetLeft + element.offsetWidth + 20) + 'px',
        top: (element.offsetTop - 5) + 'px'
    });
    tooltip.stop().fadeIn();
}

function hideTooltip() {
    var tooltip = $('#tooltip');
    tooltip.stop().fadeOut();
}

var typed = new Typed("#IAM", {
    strings: ["Ivan", "Fullstack Developer", "Web Designer", "UX/UI Designer"  , "Coder"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
});

var typed = new Typed("#IAMMOBILE", {
    strings: ["Ivan", "Fullstack Developer", "Web Designer", "UX/UI Designer"  , "Coder"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
});

document.getElementById('viewMore').addEventListener('click', function() {
    document.getElementById('modal').classList.toggle('active-modal');
});

document.querySelector('.services_modal_close').addEventListener('click', function() {
    document.getElementById('modal').classList.remove('active-modal');
});



document.getElementById('viewMore_1').addEventListener('click', function() {
    document.getElementById('modal_1').classList.toggle('active-modal');
    
});

document.querySelector('.services_modal_close_1').addEventListener('click', function() {
    document.getElementById('modal_1').classList.remove('active-modal');
});


document.getElementById('viewMore_2').addEventListener('click', function() {
    
    document.getElementById('modal_2').classList.toggle('active-modal');
});

document.querySelector('.services_modal_close_2').addEventListener('click', function() {
    document.getElementById('modal_2').classList.remove('active-modal');
});

// mobile

document.getElementById('viewMore_mobile').addEventListener('click', function() {
    document.getElementById('modal_mobile').classList.toggle('active-modal');
});

document.querySelector('.services_modal_close_mobile').addEventListener('click', function() {
    document.getElementById('modal_mobile').classList.remove('active-modal');
});



document.getElementById('viewMore_1_mobile').addEventListener('click', function() {
    document.getElementById('modal_1_mobile').classList.toggle('active-modal');
    
});

document.querySelector('.services_modal_close_1_mobile').addEventListener('click', function() {
    document.getElementById('modal_1_mobile').classList.remove('active-modal');
});


document.getElementById('viewMore_2_mobile').addEventListener('click', function() {
    
    document.getElementById('modal_2_mobile').classList.toggle('active-modal');
});



document.querySelector('.services_modal_close_2_mobile').addEventListener('click', function() {
    document.getElementById('modal_2_mobile').classList.remove('active-modal');
});

    let currentSlide = 0;
    let isAnimating = false;
    const slides = $('.slide');
    const totalSlides = slides.length;

    function nextSlide() {
        if (isAnimating) {
            return;
        }

        isAnimating = true;

        $(slides[currentSlide]).fadeOut(500, function () {
            $(this).removeClass('active');
            currentSlide = (currentSlide + 1) % totalSlides;
            $(slides[currentSlide]).fadeIn(500, function () {
                isAnimating = false;
            }).addClass('active');
        });
    }

    function clickHandler() {
        document.getElementById('Photoshop').style.visibility = (document.getElementById('Photoshop').style.visibility === 'visible') ? 'hidden' : 'visible';
    
        document.getElementById('Figma').style.visibility = (document.getElementById('Figma').style.visibility === 'visible') ? 'hidden' : 'visible';
    }
    
    document.getElementById('UX_UI-arrow').addEventListener('click', clickHandler);
    

    function clickHandlerBack() {

        document.getElementById('php').style.visibility = (document.getElementById('php').style.visibility === 'visible') ? 'hidden' : 'visible';
    
        document.getElementById('mysql').style.visibility = (document.getElementById('mysql').style.visibility === 'visible') ? 'hidden' : 'visible';
        
        document.getElementById('laravel').style.visibility = (document.getElementById('laravel').style.visibility === 'visible') ? 'hidden' : 'visible';
    }
    
    document.getElementById('backend-arrow').addEventListener('click', clickHandlerBack);


    function clickHandlerFront() {

        document.getElementById('html').style.visibility = (document.getElementById('html').style.visibility === 'visible') ? 'hidden' : 'visible';
    
        document.getElementById('css').style.visibility = (document.getElementById('css').style.visibility === 'visible') ? 'hidden' : 'visible';
        
        document.getElementById('js').style.visibility = (document.getElementById('js').style.visibility === 'visible') ? 'hidden' : 'visible';
        
        document.getElementById('jquery').style.visibility = (document.getElementById('jquery').style.visibility === 'visible') ? 'hidden' : 'visible';

    }
    
    document.getElementById('front-arrow').addEventListener('click', clickHandlerFront);
    
    function CustomModal(){
        var modal = document.querySelector('.customise-theme');
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
    }

    document.getElementById('CustomModal').addEventListener('click',CustomModal);




    function CloseModalTheme(){
        var modal = document.querySelector('.customise-theme');
        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';
    }


    function CustomModalB(){
        var modal = document.querySelector('.customise-theme-mobile');
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
    }

    document.getElementById('CustomModalB').addEventListener('click',CustomModalB);

    
    window.addEventListener('mousedown', function(event) {
        var modal = document.querySelector('.customise-theme');
        if (event.target == modal) {
            CloseModalTheme();
        }
    });

    function CloseModalThemeMobile(){
        var modal = document.querySelector('.customise-theme-mobile');
        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';
    }

    window.addEventListener('mousedown', function(event) {
        var modal = document.querySelector('.customise-theme-mobile');
        if (event.target == modal) {
            CloseModalThemeMobile();
        }
    });

    function changeThemeDim(theme, cardimTheme) {
        console.log(cardimTheme);
        document.body.className = theme;
        document.getElementById('sidebarTheme').classList.toggle(theme);
    
        var cardThemeElements = document.querySelectorAll('#cardTheme');
        cardThemeElements.forEach(function(element) {
            element.classList.toggle(cardimTheme);
        });
    }
    
    function changeThemeDark(){
        document.body.classList.remove('dim-theme');
        document.getElementById('sidebarTheme').classList.remove('dim-theme');
        var cardThemeElements = document.querySelectorAll('#cardTheme');
        cardThemeElements.forEach(function(element) {
            element.classList.remove('card_dim_Theme');
        });
    }
        function Green(color,btn1_Green,GreenCube,background_cube_top){
            console.log(color);
            document.getElementById('IAM').classList.toggle(color);
            document.getElementById('btn1').classList.toggle('btn1_Green');
            document.getElementById('top').classList.toggle('background_cube_top');


            document.getElementById('viewMore').classList.toggle(color);
            document.getElementById('viewMore_1').classList.toggle(color);
            document.getElementById('viewMore_2').classList.toggle(color);




            var CubeColor = document.querySelectorAll('#GreenCube');
            console.log(CubeColor);
            CubeColor.forEach(function(element){
                element.classList.toggle('GreenCube');
            });

            var CubeColor = document.querySelectorAll('#CLRS');
            console.log(CubeColor);
            CubeColor.forEach(function(element){
                element.classList.toggle('TextGreen');
            });

        }

    function Standart(){
        document.getElementById('IAM').classList.remove('TextGreen');
        document.getElementById('btn1').classList.remove('btn1_Green');
        document.getElementById('top').classList.remove('background_cube_top');
        var CubeColor = document.querySelectorAll('#GreenCube');

        document.getElementById('viewMore').classList.remove('TextGreen');
        document.getElementById('viewMore_1').classList.remove('TextGreen');
        document.getElementById('viewMore_2').classList.remove('TextGreen');

        document.getElementById('CLRS').classList.remove('TextGreen');

        var TextGreen = document.querySelectorAll('#CLRS');


        TextGreen.forEach(function(element){
            element.classList.remove('TextGreen');
        });



        CubeColor.forEach(function(element){
            element.classList.remove('GreenCube');
        });
    }

    function CloseModalContact(){
        var modal = document.getElementById('contact');
        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';
    }

    function contactMe(){
        document.getElementById('contact').style.visibility = 'visible';
        document.getElementById('contact').style.opacity = '1';
        
    }

document.getElementById('btn1').addEventListener('click', contactMe);


    
window.addEventListener('mousedown', function(event) {
    
    var modal = document.getElementById('contact');
    if (event.target == modal) {
        CloseModalContact();
    }
});

function CloseModalContactMobile(){
    var modal = document.getElementById('contactMob');
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
}

function contactMetMobile(){
    console.log('f');
    document.getElementById('contactMob').style.visibility = 'visible';
    document.getElementById('contactMob').style.opacity = '1';
    
}

var btns = document.getElementsByClassName('btn1');

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', contactMetMobile);
}

window.addEventListener('mousedown', function(event) {
    
    var modal = document.getElementById('contactMob');
    if (event.target == modal) {
        CloseModalContactMobile();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('.right-content-btn');
    let content = document.querySelector('.right-content');
    let body = document.getElementsByTagName('body')[0];

    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            content.classList.toggle('active');
        });
    });

    body.addEventListener('click', function() {
        if (content.classList.contains('active')) {
            content.classList.remove('active');
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById('loader');
    const loaderAfter = document.getElementById('loader-after');

    loader.classList.remove('is-hidden');

    setTimeout(function () {
      loader.classList.add('is-hidden');
      
      loaderAfter.classList.remove('is-hidden');
    }, 1000);
  });
