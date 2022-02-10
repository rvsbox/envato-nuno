/* =====================================================================================================================
Template Name:    Nuno - Responsive One Page HTML Template
Template URI:     https://themeforest.net
Author:           rvsbox
Author URI:       https://themeforest.net/user/rvsbox
Version:          1.0.0
Created:          February 2022
File Description: Main js file of the template
===================================================================================================================== */


/* =====================================================================================================================
1.  Preloader                            |  #preloader
2.  Get element sizes                    |  GetSizeElement()
3.  Composition scale                    |  #composition
4.  Fixing the header when scrolling     |  changeHeaderRun(), #header
5.  Highlighting the active menu item    |  addRemoveActiveRun(), #nav, #navRight
6.  Scrolling animation                  |  #nav, #navRight, .btn-arrow
7.  Open, close side menu                |  сloseNavRight(), сloseNavRightDefault(), #navRight, #closeNavRight
8.  Section title                        |  setSizeBorderSection(), resizeSizeBorderSection(), .section-title
9.  Сircle animation                     |  circleAnimation(), #circle
10. Owl Carousel library                 |  .owl-carousel
11. AutoFilter library                   |  autofilter.js, .portfolio-items, .portfolio
12. Portfolio animation                  |  .art, .portfolio
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


/* ======== START - 1. Preloader ==================================================================================== */
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
/* ======== END - 1. Preloader ====================================================================================== */


/* ======== START - 2. Get element sizes ============================================================================ */
function GetSizeElement() {
    // внутренний размер окна — это ширина и высота области просмотра (вьюпорта)
    this.windowInnerW = window.innerWidth
    this.windowInnerH = window.innerHeight

    // размер экрана — это ширина и высота всего экрана: монитора или мобильного дисплея
    this.screenW = window.screen.width
    this.screenH = window.screen.height

    // this.compositionCapsuleW = compositionCapsule.clientWidth
    // this.compositionCapsuleH = compositionCapsule.clientHeight
}
/* ======== END - 2. Get element sizes ============================================================================== */


/* ======== START - 3. Composition scale ============================================================================ */
let scl
let maxSizeScaling = 1399 // максимальный размер экрана до которого масштабируется композиция
let minSizeScreen = 320 // минимальный размер экрана до которого масштабируется композиция

function conditionsForScreen() {
    let getSizeElement = new GetSizeElement()

    if ((getSizeElement.screenW <= maxSizeScaling) || (getSizeElement.screenH <= maxSizeScaling)) {

        if (getSizeElement.screenW < getSizeElement.screenH) {
            // от 1 до 0,6 изменение масштаба по горезонтали
            scl = 1 - ((((maxSizeScaling - getSizeElement.screenW) * 100) / (maxSizeScaling - minSizeScreen)) * (1 - 0.2) / 100)
            compositionCapsule.style.transform = `translate(-50%, -100%)` + `scale(${scl})`
        } else {
            // от 1 до 0,24 изменение масштаба по вертикали
            scl = 1 - ((((maxSizeScaling - getSizeElement.screenH) * 100) / (maxSizeScaling - minSizeScreen)) * (1 - 0.18) / 100)
            compositionCapsule.style.transform = `translate(-50%, -100%)` + `scale(${scl})`
        }
    }
}

function conditionsForWindowInner() {
    let getSizeElement = new GetSizeElement()

    if ((getSizeElement.windowInnerW <= maxSizeScaling) || (getSizeElement.windowInnerH <= maxSizeScaling)) {

        if (getSizeElement.windowInnerW < getSizeElement.windowInnerH) {
            // от 1 до 0,6 изменение масштаба по горезонтали
            scl = 1 - ((((maxSizeScaling - getSizeElement.windowInnerW) * 100) / (maxSizeScaling - minSizeScreen)) * (1 - 0.2) / 100)
            compositionCapsule.style.transform = `translate(-50%, -100%)` + `scale(${scl})`
        } else {
            // от 1 до 0,24 изменение масштаба по вертикали
            scl = 1 - ((((maxSizeScaling - getSizeElement.windowInnerH) * 100) / (maxSizeScaling - minSizeScreen)) * (1 - 0.18) / 100)
            compositionCapsule.style.transform = `translate(-50%, -100%)` + `scale(${scl})`
        }
    }
}

function setPositionCompositionEvent() {
    addEventListener('resize', () => {
        let getSizeElement = new GetSizeElement()

        if ((getSizeElement.screenW > maxSizeScaling) && (getSizeElement.screenH > maxSizeScaling)) {
            compositionCapsule.style.transform = `translate(-50%, -100%)` + `scale(1)`
        }

        if ((getSizeElement.screenW < getSizeElement.windowInnerW) || (getSizeElement.screenH < getSizeElement.windowInnerH)) {
            conditionsForScreen()
        } else {
            conditionsForWindowInner()
        }
    })
}


function setPositionComposition() {
    let getSizeElement = new GetSizeElement()

    if ((getSizeElement.screenW < getSizeElement.windowInnerW) || (getSizeElement.screenH < getSizeElement.windowInnerH)) {
        conditionsForScreen()
    } else {
        conditionsForWindowInner()
    }
}


if (composition !== null) {
    setPositionComposition()
    setPositionCompositionEvent()
}
/* ======== END - 3. Composition scale ============================================================================== */


/* ======== START - 4. Fixing the header when scrolling (#header) =================================================== */
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

/* ======== END - 4. Fixing the header when scrolling (#header) ===================================================== */


/* ======== START - 5. Highlighting the active menu item (#nav, #navRight) ========================================== */
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

/* ======== END - 5. Highlighting the active menu item (#nav, #navRight) ============================================ */


/* ======== START - 6. Scrolling animation (#nav, #navRight, .btn-arrow, #sendMessage) ============================== */
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
/* ======== END - 6. Scrolling animation (#nav, #navRight, .btn-arrow, #sendMessage) ================================ */


/* ======== START - 7. Open, close side menu (#navRight, #closeNavRight) ============================================ */
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
/* ======== END - 7. Open, close side menu (#navRight, #closeNavRight) ============================================== */


/* ======== START - 8. Section title (.section-title) =============================================================== */
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

/* ======== END - 8. Section title (.section-title) ================================================================= */


/* ======== START - 9. Сircle animation (#circle) =================================================================== */
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
/* ======== END - 9. Сircle animation (#circle) ===================================================================== */


/* ======== START - 10. Owl Carousel library (.owl-carousel) ======================================================== */
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
/* ======== END - 10. Owl Carousel library (.owl-carousel) ========================================================== */


/* ======== START - 11. AutoFilter library (.portfolio-item, .portfolio) ============================================ */
$(function ($) {
    $.autofilter();
});
/* ======== END - 11. AutoFilter library (.portfolio-item, .portfolio) ============================================== */


/* ======== START - 12. Portfolio animation (.art, .portfolio) ====================================================== */
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

                break

            case 1:
                maskCircle[i].style.r = -(10 * Math.sin(start1)) + 40 + 'px'
                start1 += speed1

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
/* ======== END - 12. Portfolio animation (.art, .portfolio) ======================================================== */