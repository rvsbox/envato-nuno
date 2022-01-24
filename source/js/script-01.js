/* =====================================================================================================================
Template Name:    Nuno | Responsive One Page HTML Template
Template URI:     https://themeforest.net
Author:           rvsbox
Author URI:       https://themeforest.net/user/rvsbox
Version:          1.0.0
Created:          January 2022
File Description: Main js file of the template
===================================================================================================================== */


/* =====================================================================================================================
1.  Preloader                            |  #preloader
2.  Get element sizes                    |  GetSizeElement()
3.  Fixing the header when scrolling     |  changeHeaderRun(), #header
4.  Highlighting the active menu item    |  addRemoveActiveRun(), #nav, #navRight
5.  Scrolling animation                  |  #nav, #navRight, .btn-arrow
6.  Open, close side menu                |  сloseNavRight(), сloseNavRightDefault(), #navRight, #closeNavRight
7.  Three big circles                    |  setSizeCircle(), setSizeCircleDefault(), #circle
8.  Your big photo                       |  setSizePersonImg(), setSizePersonImgDefault(), #personImg
9.  Your information about yourself      |  setSizePersonInfo(), setSizePersonInfoDefault(), #personInfo
10. Section title                        |  setSizeBorderSection(), resizeSizeBorderSection(), .section-title
11. Сircle animation                     |  circleAnimation(), #circle
12. Owl Carousel library                 |  .owl-carousel
13. AutoFilter library                   |  .portfolio-items, .portfolio
14. Portfolio animation                  |  .art, .portfolio
===================================================================================================================== */

let header = document.getElementById('header')
let nav = document.getElementById('nav')
let navRight = document.getElementById('navRight')
let openNavRight = document.getElementById('openNavRight')
let closeNavRight = document.getElementById('closeNavRight')
let composition = document.getElementById('composition')
let compositionCapsule = document.getElementById('compositionCapsule')
let circle = document.getElementById('circle')



// скрипт будет выполнен, когда вся страница, со всеми подключениями будут загружены
window.onload = () => {
    preloader()
    setSizeBorderSection()
    resizeSizeBorderSection()
    changeHeaderRun()
    addRemoveActiveRun()
    сloseNavRight()
    сloseNavRightDefault()
    circleAnimation()
    portfolioAnimation()
}



/* ======== START - Preloader ======================================================================================= */
function preloader() {
    // с помощью if запускаем preloader только на cтранице index
    if (composition !== null) {
        setTimeout(() => {
                document.getElementById('preloader').style.display = 'none' // спрятать прелоадер
                document.body.style.overflow = 'visible' // показать ползунок

            }, 200 // после полной загрузки, подождать еще 0.2сек
        )
    }
}
/* ======== END - Preloader ========================================================================================= */



/* ======== START - Get element sizes =============================================================================== */
function GetSizeElement() {
    // внутренний размер окна — это ширина и высота области просмотра (вьюпорта)
    this.windowInnerW = window.innerWidth
    this.windowInnerH = window.innerHeight

    // размер экрана — это ширина и высота всего экрана: монитора или мобильного дисплея
    this.screenW = window.screen.width
    this.screenH = window.screen.height
}
/* ======== END - Get element sizes ================================================================================= */



/* ======== START - Composition scale =============================================================================== */
let windowInnerW, windowInnerH, compositionH, compositionW, screenH, screenW, scl
let startScaling = 1399
let minSizeScreen = 320


function getPositionComposition() {
    windowInnerW = window.innerWidth
    windowInnerH = window.innerHeight
    screenH = window.screen.height
    screenW = window.screen.width
    compositionH = compositionCapsule.clientHeight
    compositionW = compositionCapsule.clientWidth
}

getPositionComposition()

addEventListener('resize', () => {
    if ((screenW > startScaling) && (screenH > startScaling)) {
        getPositionComposition()
        compositionCapsule.style.transform = `translate(-50%, -100%)` + `scale(1)`
    }

    if ((screenW <= startScaling) || (screenH <= startScaling)) {
        getPositionComposition()

        if (screenW < screenH) {
            // от 1 до 0,6 изменение масштаба по горезонтали
            scl = 1-((((startScaling - screenW)*100)/(startScaling - minSizeScreen))*(1-0.2)/100)
            compositionCapsule.style.transform = `translate(-50%, -100%)` + `scale(${scl})`
        } else {
            // от 1 до 0,24 изменение масштаба по вертикали
            scl = 1-((((startScaling - screenH)*100)/(startScaling - minSizeScreen))*(1-0.18)/100)
            compositionCapsule.style.transform = `translate(-50%, -100%)` + `scale(${scl})`
        }

    }
})

function setPositionComposition() {
    if ((screenW <= startScaling) || (screenH <= startScaling)) {
        getPositionComposition()

        compositionCapsule.style.transform = `translate(-50%, -100%)` + `scale(${scl})`

        if (screenW < screenH) {
            scl = 1-((((startScaling - screenW)*100)/(startScaling - minSizeScreen))*(1-0.2)/100)
            compositionCapsule.style.transform = `translate(-50%, -100%)` + `scale(${scl})`
        } else {
            scl = 1-((((startScaling - screenH)*100)/(startScaling - minSizeScreen))*(1-0.18)/100)
            compositionCapsule.style.transform = `translate(-50%, -100%)` + `scale(${scl})`
        }
    }
}

setPositionComposition()
/* ======== END - Composition scale ================================================================================= */



/* ======== START - Fixing the header when scrolling (#header) ====================================================== */
function changeHeader() {
    if (pageYOffset > 10) {
        header.style.top = -16 + 'px'
        header.style.opacity = 95 + '%'
        navRight.style.top = 16 + 'px'
    } else {
        header.style.top = 0 + 'px'
        header.style.opacity = 100 + '%'
        navRight.style.top = 0 + 'px'
    }
}

// проверка на существование #header
function changeHeaderRun() {
    if (header !== null) {
        changeHeader() // чтобы при перезагрузке страницы правильно работала функция, если уже был скролл
        window.addEventListener('scroll', changeHeader) // срабатывание при скролле
    }
}
/* ======== END - Fixing the header when scrolling (#header) ======================================================== */



/* ======== START - Highlighting the active menu item (#nav, #navRight) ============================================= */
let border = window.innerHeight / 1.8 // установка границы срабатывания скрипта
let sectionsLength = document.getElementsByTagName('section').length
let sections = document.querySelectorAll('section');
let navLinks = document.getElementById('nav').querySelectorAll('li a')
let navRightLinks = document.getElementById('navRight').querySelectorAll('li a')

function addRemoveActive(target) {
    let top = sections[target].getBoundingClientRect().top
    let bottom = sections[target].getBoundingClientRect().bottom

    if ((top < border) && (bottom > border) && (sectionsLength > 1)) {
        for (let k = 0; k < sectionsLength; k++) {
            navLinks[k].classList.remove('nav__link--active')
            navRightLinks[k].classList.remove('nav-right__link--active')
        }

        navLinks[target].classList.add('nav__link--active')
        navRightLinks[target].classList.add('nav-right__link--active')
    }
}

function addRemoveActiveRun() {
    // добавляем активность для 1-го пункта меню при первой загрузке страницы
    if (sectionsLength > 1) {
        navLinks[0].classList.add('nav__link--active')
        navRightLinks[0].classList.add('nav-right__link--active')
    }

    window.addEventListener('scroll', function () {
        for (let i = 0; i < sectionsLength; i++) {
            addRemoveActive(i)
        }
    })
}
/* ======== END - Highlighting the active menu item (#nav, #navRight) =============================================== */



/* ======== START - Scrolling animation (#nav, #navRight, .btn-arrow, #sendMessage) ================================= */
// для навигации. #nav, #navRight
$('a.nav__link[href*="#"],a.nav-right__link[href*="#"]').on('click', function (e) {
    e.preventDefault()

    // анимация при прокрутке
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000, 'swing')

    // прятать боковое меню при нажатии на ссылку. Необходимо знать сайт в свернутом или развернутом состоянии
    if ($('#nav').css('display') === 'block') {
        $('#navRight').css('display', 'none')
        $('#openNavRight').css('display', 'none')
    } else {
        $('#navRight').css('display', 'none')
        $('#openNavRight').css('display', 'block')
    }
})

// для кнопки 'Order Now'. .btn-arrow
$('button.btn-arrow').on('click', function (e) {
    e.preventDefault()

    // анимация при прокрутке
    $('html, body').animate({
        scrollTop: $('#message').offset().top
    }, 1000, 'swing')
})

// для кнопки 'Send Message'. #sendMessage
$('button#sendMessage').on('click', function (e) {
    e.preventDefault()

    // анимация при прокрутке
    $('html, body').animate({
        scrollTop: $('#contactplus').offset().top
    }, 1000, 'swing')
})
/* ======== END - Scrolling animation (#nav, #navRight, .btn-arrow, #sendMessage) =================================== */



/* ======== START - Open, close side menu (#navRight, #closeNavRight) =============================================== */
openNavRight.addEventListener('click', openNav)
closeNavRight.addEventListener('click', closeNav)

function openNav() {
    openNavRight.style.display = 'none'
    navRight.style.display = 'block'
}

function closeNav() {
    openNavRight.style.display = 'block'
    navRight.style.display = 'none'
}

function сloseNavRight() {
    addEventListener('resize', event => {

        let getSizeElement = new GetSizeElement() // получить текущие размеры блоков

        if (getSizeElement.windowInnerW >= 1200) {
            nav.style.display = 'block'
            navRight.style.display = 'none'
            openNavRight.style.display = 'none'
        }
        if (getSizeElement.windowInnerW <= 1200) {
            document.getElementById('nav').style.display = 'none'
            openNavRight.style.display = 'block'

            // test
            console.log('test')
        }
    })
}

function сloseNavRightDefault() {
    let getSizeElement = new GetSizeElement() // получить текущие размеры блоков

    if (getSizeElement.windowInnerW >= 1200) {
        nav.style.display = 'block'
        navRight.style.display = 'none'
        openNavRight.style.display = 'none'
    }
    if (getSizeElement.windowInnerW <= 1200) {
        nav.style.display = 'none'
        openNavRight.style.display = 'block'
    }
}

document.addEventListener('click', function (e) {
    const target = e.target
    const itsNavRight = target == navRight || navRight.contains(target)
    const itsOpenNavRight = target == openNavRight || openNavRight.contains(target)
    const navRightActive = navRight.style.display == 'block'

    if (!itsNavRight && navRightActive && !itsOpenNavRight) {
        nav.style.display = 'none'
        navRight.style.display = 'none'
        openNavRight.style.display = 'block'
    }
})
/* ======== END - Open, close side menu (#navRight, #closeNavRight) ================================================= */



/* ======== START - Section title (.section-title) ================================================================== */
function setSizeBorderSection() {
    let k = document.getElementsByClassName('section-title__heading').length

    for (let i = 0; i <= (k - 1); i++) {
        let headingBaseWidth = document.getElementsByClassName('section-title__heading')[i].offsetWidth
        let headingBaseHeight = document.getElementsByClassName('section-title__heading')[i].offsetHeight

        if ((headingBaseWidth > 0) && (headingBaseHeight > 0)) {
            // тк border: 3px, то минус 6
            document.getElementsByClassName('section-title__border')[i].style.width = headingBaseWidth + 'px'
            document.getElementsByClassName('section-title__border')[i].style.height = headingBaseHeight + 'px'
        }
    }
}

function resizeSizeBorderSection() {
    addEventListener('resize', event => {
        let getSizeElement = new GetSizeElement() // получить текущие размеры блоков

        if (getSizeElement.windowInnerW <= 576) {
            setSizeBorderSection()
        }
        if (getSizeElement.windowInnerW >= 576) {
            setSizeBorderSection()
        }
    })
}

/* ======== END - Section title (.section-title) ==================================================================== */



/* ======== START - Сircle animation (#circle) ====================================================================== */
function circleAnimation() {
    const black3 = document.getElementById('circleSmallBlack');
    const white3 = document.getElementById('circleSmallWhite');
    const black2 = document.getElementById('circleMediumBlack');
    const white2 = document.getElementById('circleMediumWhite');
    const black1 = document.getElementById('circleLargeBlack');
    const white1 = document.getElementById('circleLargeWhite');
    let start3 = 0;
    let start2 = 0;
    let start1 = 0;
    let speed = 0.02;

    if ((white1 !== null) && (black1 !== null)) {
        (function layerPlay() {
            black3.style.r = 25 * Math.sin(start3) + 195 + 'px';
            white3.style.r = 25 * Math.sin(start3) + 195 + 'px';

            black2.style.r = 25 * Math.sin(start2) + 295 + 'px';
            white2.style.r = 25 * Math.sin(start2) + 295 + 'px';

            black1.style.r = 30 * Math.sin(start1) + 395 + 'px';
            white1.style.r = 30 * Math.sin(start1) + 395 + 'px';

            start3 += speed; // скорос

            if (start3 > 0.850) {
                start2 += speed;
            }

            if (start3 > 1.5) {
                start1 += speed;
            }

            requestAnimationFrame(layerPlay);
        })()
    }
}

/* ======== END - Сircle animation (#circle) ======================================================================== */



/* ======== START - Owl Carousel library (.owl-carousel) ============================================================ */
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        items: 2,
        dots: true,
        dotsData: true,
        responsive: {
            0: {
                items: 1,
            },
            1400: {
                items: 2
            }
        }
    })
})
/* ======== END - Owl Carousel library (.owl-carousel) ============================================================== */


/* ======== START - AutoFilter library (.portfolio-item, .portfolio) ================================================ */
$(function ($) {
    $.autofilter();
});
/* ======== END - AutoFilter library (.portfolio-item, .portfolio) ================================================== */


/* ======== START - Portfolio animation (.art, .portfolio) ========================================================== */
function portfolioAnimation() {
    const art = document.getElementsByClassName('art')
    const maskCircle = document.getElementsByClassName('mask-circle')
    let start = 0
    let speed = 8
    let start1 = 0
    let speed1 = 0.08
    let toggle = 0
    let requestId

    function layerPlay(i) {
        switch (toggle) {
            case 0:
                maskCircle[i].style.r = 220 - start + 'px'
                start += speed

                if (start >= 180) {
                    toggle = 1
                }

                // test
                // console.log('case-0')
                break

            case 1:
                maskCircle[i].style.r = -(10 * Math.sin(start1)) + 40 + 'px'
                start1 += speed1

                // test
                // console.log('case-1')
                break
        }

        // колбэк ()=>{layerPlay(i)} выглядит в таком виде, чтобы передать аргумент
        requestId = requestAnimationFrame(() => {
            layerPlay(i)
        });
    }

    function layerPlayChangeState(i) {
        toggle = 0
        start = 0
        start1 = 0
        maskCircle[i].style.r = 220 + 'px'
        cancelAnimationFrame(requestId) // выключаем анимацию
    }

    for (let i = 0; i < art.length; i++) {
        art[i].addEventListener('mouseenter', () => layerPlay(i))
        art[i].addEventListener('mouseleave', () => layerPlayChangeState(i))
    }
}
/* ======== END - Portfolio animation (.art, .portfolio) ============================================================ */