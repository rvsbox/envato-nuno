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
1.  Get element sizes                    |  GetSizeElement()
2.  Fixing the header when scrolling     |  changeHeaderRun(), #header
3.  Highlighting the active menu item    |  addRemoveActiveRun(), #nav, #navRight
4.  Scrolling animation                  |  #nav, #navRight, .btn-arrow
5.  Open, close side menu                |  сloseNavRight(), сloseNavRightDefault(), #navRight, #closeNavRight
6.  Three big circles                    |  setSizeCircle(), setSizeCircleDefault(), #circle
7.  Your big photo                       |  setSizePersonImg(), setSizePersonImgDefault(), #personImg
8.  Your information about yourself      |  setSizePersonInfo(), setSizePersonInfoDefault(), #personInfo
9.  Section title                        |  setSizeBorderSection(), resizeSizeBorderSection(), .section-title
10. Сircle animation                     |  circleAnimation(), #circle
11. Owl Carousel library                 |  .owl-carousel
12. AutoFilter library                   |  .portfolio-items, .portfolio
13. Art animation                        |  .art, .portfolio
===================================================================================================================== */


let header = document.getElementById('header')
let nav = document.getElementById('nav')
let navRight = document.getElementById('navRight')
let openNavRight = document.getElementById('openNavRight')
let closeNavRight = document.getElementById('closeNavRight')
let composition = document.getElementById('composition')
let circle = document.getElementById('circle')
let personImg = document.getElementById('personImg')
let personInfo = document.getElementById('personInfo')
let personName = document.getElementById('personName')
let personProfession = document.getElementById('personProfession')
let personDescription = document.getElementById('personDescription')


// скрипт будет выполнен, когда вся страница, со всеми подключениями будут загружены
window.onload = () => {
    preloader()
    setSizeCircleDefault()
    setSizePersonImgDefault()
    setSizePersonInfoDefault()
    setSizeCircle()
    setSizePersonImg()
    setSizePersonInfo()
    setSizeBorderSection()
    changeHeaderRun()
    addRemoveActiveRun()
    сloseNavRight()
    сloseNavRightDefault()
    resizeSizeBorderSection()
    circlePlay()
}


/* ======== START - Preloader ======================================================================================= */
function preloader() {
    setTimeout(() => {
            document.getElementById('preloader').style.display = 'none' // спрятать прелоадер
            document.body.style.overflow = 'visible' // показать ползунок
        }, 300 // после полной загрузки, подождать еще 0.3сек
    )
}

/* ======== END - Preloader ========================================================================================= */


/* ======== START - Get element sizes =============================================================================== */
function GetSizeElement() {
    if ((composition !== null) && (circle !== null) && (personImg !== null)) {
        this.compositionW = composition.offsetWidth
        this.compositionH = composition.offsetHeight

        this.circleW = circle.offsetWidth
        this.circleH = circle.offsetHeight

        this.personImgW = personImg.offsetWidth
        this.personImgH = personImg.offsetHeight
    }

    // внутренний размер окна — это ширина и высота области просмотра (вьюпорта)
    this.windowInnerW = window.innerWidth
    this.windowInnerH = window.innerHeight

    // размер экрана — это ширина и высота всего экрана: монитора или мобильного дисплея
    this.screenW = window.screen.width
    this.screenH = window.screen.height
}

/* ======== END - Get element sizes ================================================================================= */


/* ======== START - Fixing the header when scrolling (#header) ====================================================== */
function changeHeader() {
    if (pageYOffset > 10) {
        header.style.top = -16 + 'px'
        header.style.opacity = 95 + '%'
        navRight.height = 'calc(100vh + 16px)'
    } else {
        header.style.top = 0 + 'px'
        header.style.opacity = 100 + '%'
        navRight.style.height = 100 + 'vh'
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


/* ======== START - Three big circles (#circle) ===================================================================== */
// размеры блоков установленные в стилях, размеры блоков при 4k разрешении
// 314px   - bottom блока #circle
// 1400px  - width блока #circle
// 1400px  - height блока #circle
// 3600px  - width блока #composition
// 1900px  - height блока #composition
function defaultCircle() {
    if (circle !== null) {
        circle.style.width = 1400 + 'px'
        circle.style.height = 1400 + 'px'
        circle.style.bottom = 314 + 'px'
    }
}

function resizeCircle(windowInnerSize) {
    let change = Math.round((1400 * windowInnerSize) / 1900)
    let changeBottom = Math.round((314 * windowInnerSize) / 1900)

    if (circle !== null) {
        circle.style.width = change + 'px'
        circle.style.height = change + 'px'
        circle.style.bottom = changeBottom + 'px'
    }
}

let sizeCircle = (screenWidth, screenHeight) => {
    if ((screenWidth <= 1900) && (screenHeight >= 1900)) {
        resizeCircle(screenWidth)
    }
    if ((screenWidth >= 1900) && (screenHeight <= 1900)) {
        resizeCircle(screenHeight)
    }
    if ((screenWidth <= 1900) && (screenHeight <= 1900) && (screenWidth < screenHeight)) {
        resizeCircle(screenWidth)
    }
    if ((screenWidth <= 1900) && (screenHeight <= 1900) && (screenWidth > screenHeight)) {
        resizeCircle(screenWidth)
    }
    if ((screenWidth >= 1900) && (screenHeight >= 1900)) {
        defaultCircle()
    }
}

let sizeCircleDefault = (screenWidth, screenHeight) => {
    if ((screenWidth <= 1900) && (screenHeight >= 1900)) {
        resizeCircle(screenWidth)
    }
    if ((screenWidth >= 1900) && (screenHeight <= 1900)) {
        resizeCircle(screenHeight)
    }
    if ((screenWidth <= 1900) && (screenHeight <= 1900) && (screenWidth < screenHeight)) {
        resizeCircle(screenWidth)
    }
    if ((screenWidth <= 1900) && (screenHeight <= 1900) && (screenWidth > screenHeight)) {
        resizeCircle(screenHeight)
    }
}

// условия при изменении ширины и, или высоты экрана
function setSizeCircle() {
    addEventListener('resize', event => {
        let getSizeElement = new GetSizeElement() // получить текущие размеры элементов

        if (getSizeElement.windowInnerW < getSizeElement.screenW) {
            sizeCircle(getSizeElement.windowInnerW, getSizeElement.windowInnerH)
        } else {
            sizeCircle(getSizeElement.screenW, getSizeElement.screenH)
        }

        // original
        // if ((getSizeElement.windowInnerW <= 1900) && (getSizeElement.windowInnerH >= 1900)) {
        //     resizeCircle(getSizeElement.windowInnerW)
        // }
        // if ((getSizeElement.windowInnerW >= 1900) && (getSizeElement.windowInnerH <= 1900)) {
        //     resizeCircle(getSizeElement.windowInnerH)
        // }
        // if ((getSizeElement.windowInnerW <= 1900) && (getSizeElement.windowInnerH <= 1900) && (getSizeElement.windowInnerW < getSizeElement.windowInnerH)) {
        //     resizeCircle(getSizeElement.windowInnerW)
        // }
        // if ((getSizeElement.windowInnerW <= 1900) && (getSizeElement.windowInnerH <= 1900) && (getSizeElement.windowInnerW > getSizeElement.windowInnerH)) {
        //     resizeCircle(getSizeElement.windowInnerH)
        // }
        // if ((getSizeElement.windowInnerW >= 1900) && (getSizeElement.windowInnerH >= 1900)) {
        //     defaultCircle()
        // }
    })
}

// условия при первой загрузке сайта
function setSizeCircleDefault() {
    let getSizeElement = new GetSizeElement() // получить текущие размеры элементов

    if (getSizeElement.windowInnerW < getSizeElement.screenW) {
        sizeCircleDefault(getSizeElement.windowInnerW, getSizeElement.windowInnerH)
    } else {
        sizeCircleDefault(getSizeElement.screenW, getSizeElement.screenH)
    }

    // original
    // if ((getSizeElement.windowInnerW <= 1900) && (getSizeElement.windowInnerH >= 1900)) {
    //     resizeCircle(getSizeElement.windowInnerW)
    // }
    // if ((getSizeElement.windowInnerW >= 1900) && (getSizeElement.windowInnerH <= 1900)) {
    //     resizeCircle(getSizeElement.windowInnerH)
    // }
    // if ((getSizeElement.windowInnerW <= 1900) && (getSizeElement.windowInnerH <= 1900) && (getSizeElement.windowInnerW < getSizeElement.windowInnerH)) {
    //     resizeCircle(getSizeElement.windowInnerW)
    // }
    // if ((getSizeElement.windowInnerW <= 1900) && (getSizeElement.windowInnerH <= 1900) && (getSizeElement.windowInnerW > getSizeElement.windowInnerH)) {
    //     resizeCircle(getSizeElement.windowInnerH)
    // }
}

/* ======== END - Three big circles (#circle) ======================================================================= */


/* ======== START - Your photo (#personImg) ========================================================================= */
// размеры блоков установленные в стилях, размеры блоков при 4k разрешении
// 1020px  - width блока #personImg
// 1500px  - height блока #personImg
// 3600px  - width блока #composition
// 1900px  - height блока #composition
function defaultPersonImg() {
    if (personImg !== null) {
        personImg.style.width = 1020 + 'px'
        personImg.style.height = 1500 + 'px'
    }
}

// #composition - ширина
function resizePersonImgWidth(windowInnerSize) {
    let changeW = Math.round((1020 * windowInnerSize) / 1900)
    let changeH = Math.round((changeW * 1500) / 1020)

    if (personImg !== null) {
        personImg.style.width = changeW + 'px'
        personImg.style.height = changeH + 'px'
    }
}

// #composition - высота
function resizePersonImgHeight(windowInnerSize) {
    let changeH = Math.round((1500 * windowInnerSize) / 1900)
    let changeW = Math.round((changeH * 1020) / 1500)

    if (personImg !== null) {
        personImg.style.width = changeW + 'px'
        personImg.style.height = changeH + 'px'
    }
}

let sizePersonImg = (screenWidth, screenHeight) => {
    if ((screenWidth <= 1900) && (screenHeight >= 1900)) {
        resizePersonImgWidth(screenWidth)
    }
    if ((screenWidth >= 1900) && (screenHeight <= 1900)) {
        resizePersonImgHeight(screenHeight)
    }
    if ((screenWidth <= 1900) && (screenHeight <= 1900) && (screenWidth < screenHeight)) {
        resizePersonImgWidth(screenWidth)
    }
    if ((screenWidth <= 1900) && (screenHeight <= 1900) && (screenWidth > screenHeight)) {
        resizePersonImgHeight(screenHeight)
    }
    if ((screenWidth >= 1900) && (screenHeight >= 1900)) {
        defaultPersonImg()
    }
}

let sizePersonImgDefault = (screenWidth, screenHeight) => {
    if ((screenWidth <= 1900) && (screenHeight >= 1900)) {
        resizePersonImgWidth(screenWidth)
    }
    if ((screenWidth >= 1900) && (screenHeight <= 1900)) {
        resizePersonImgHeight(screenHeight)
    }
    if ((screenWidth <= 1900) && (screenHeight <= 1900) && (screenWidth < screenHeight)) {
        resizePersonImgWidth(screenWidth)
    }
    if ((screenWidth <= 1900) && (screenHeight <= 1900) && (screenWidth > screenHeight)) {
        resizePersonImgHeight(screenHeight)
    }
}

// условия при изменении ширины и, или высоты экрана
function setSizePersonImg() {
    addEventListener('resize', event => {
        let getSizeElement = new GetSizeElement() // получить текущие размеры блоков

        if (getSizeElement.windowInnerW < getSizeElement.screenW) {
            sizePersonImg(getSizeElement.windowInnerW, getSizeElement.windowInnerH)
        } else {
            sizePersonImg(getSizeElement.screenW, getSizeElement.screenH)
        }

        // original
        // if ((getSizeElement.windowInnerW <= 1900) && (getSizeElement.windowInnerH >= 1900)) {
        //     resizePersonImgWidth(getSizeElement.windowInnerW)
        // }
        // if ((getSizeElement.windowInnerH <= 1900) && (getSizeElement.windowInnerW >= 1900)) {
        //     resizePersonImgHeight(getSizeElement.windowInnerH)
        // }
        // if ((getSizeElement.windowInnerW <= 1900) && (getSizeElement.windowInnerH <= 1900) && (getSizeElement.windowInnerW < getSizeElement.windowInnerH)) {
        //     resizePersonImgWidth(getSizeElement.windowInnerW)
        // }
        // if ((getSizeElement.windowInnerW <= 1900) && (getSizeElement.windowInnerH <= 1900) && (getSizeElement.windowInnerW > getSizeElement.windowInnerH)) {
        //     resizePersonImgHeight(getSizeElement.windowInnerH)
        // }
        // if ((getSizeElement.windowInnerW >= 1900) && (getSizeElement.windowInnerH >= 1900)) {
        //     defaultPersonImg()
        // }
    })
}

// условия при первой загрузке сайта
function setSizePersonImgDefault() {
    let getSizeElement = new GetSizeElement() // получить текущие размеры блоков

    if (getSizeElement.windowInnerW < getSizeElement.screenW) {
        sizePersonImgDefault(getSizeElement.windowInnerW, getSizeElement.windowInnerH)
    } else {
        sizePersonImgDefault(getSizeElement.screenW, getSizeElement.screenH)
    }

    // original
    // if ((getSizeElement.windowInnerW <= 1900) && (getSizeElement.windowInnerH >= 1900)) {
    //     resizePersonImgWidth(getSizeElement.windowInnerW)
    // }
    // if ((getSizeElement.windowInnerH <= 1900) && (getSizeElement.windowInnerW >= 1900)) {
    //     resizePersonImgHeight(getSizeElement.windowInnerH)
    // }
    // if ((getSizeElement.windowInnerW <= 1900) && (getSizeElement.windowInnerH <= 1900) && (getSizeElement.windowInnerW < getSizeElement.windowInnerH)) {
    //     resizePersonImgWidth(getSizeElement.windowInnerW)
    // }
    // if ((getSizeElement.windowInnerW <= 1900) && (getSizeElement.windowInnerH <= 1900) && (getSizeElement.windowInnerW > getSizeElement.windowInnerH)) {
    //     resizePersonImgHeight(getSizeElement.windowInnerH)
    // }
}

/* ======== END - Your photo (#personImg) =========================================================================== */


/* ======== START - Your information about yourself (#personInfo) =================================================== */
// размеры блоков установленные в стилях, размеры блоков при 4k разрешении
// 770px  - width #personInfo
// 210%   - font-size, #personName
// 160%   - font-size, #personProfession
// 118%   - font-size, #personDescription
// 300px  - bottom, #personInfo
// 900px  - right, #personInfo
function defaultPersonInfo() {
    if ((personInfo !== null) && (personName !== null) && (personProfession !== null) && (personDescription !== null)) {
        personInfo.style.width = 770 + 'px'
        personInfo.style.bottom = 300 + 'px'
        personInfo.style.right = 900 + 'px'
        personName.style.fontSize = 210 + '%'
        personProfession.style.fontSize = 160 + '%'
        personDescription.style.fontSize = 118 + '%'
    }
}

// #personProfession, #personDescription
function defaultPersonInfoPlus() {
    if ((personProfession !== null) && (personDescription !== null)) {
        personProfession.style.display = 'block'
        personDescription.style.display = 'block'
        personProfession.style.borderBottomRightRadius = 0 + 'px'
        personProfession.style.borderBottomLeftRadius = 0 + 'px'
    }
}

// #personInfo, #personProfession, #personDescription
function resizePersonInfoMini() {
    if ((personInfo !== null) && (personProfession !== null) && (personDescription !== null)) {
        personInfo.style.right = 0 + 'px' // установить посередине
        personDescription.style.display = 'none'
        personProfession.style.borderBottomRightRadius = 0.5 + 'em'
        personProfession.style.borderBottomLeftRadius = 0.5 + 'em'
    }
}

function resizePersonInfo(windowInnerSize) {
    let change = Math.round((770 * windowInnerSize) / 1900)
    let changePersonName = Math.round((210 * windowInnerSize) / 1900)
    let changePersonProfession = Math.round((160 * windowInnerSize) / 1900)
    let changePersonDescription = Math.round((118 * windowInnerSize) / 1900)
    let changeBottom = Math.round((300 * windowInnerSize) / 1900)
    let changeLeft = Math.round((900 * windowInnerSize) / 1900)

    if ((personInfo !== null) && (personName !== null) && (personProfession !== null) && (personDescription !== null)) {
        personInfo.style.width = change + 'px'
        personInfo.style.bottom = changeBottom + 'px'
        personInfo.style.right = changeLeft + 'px'
        personName.style.fontSize = changePersonName + '%'
        personProfession.style.fontSize = changePersonProfession + '%'
        personDescription.style.fontSize = changePersonDescription + '%'
    }
}

let sizePersonInfo = (screenWidth, screenHeight) => {
    if ((screenWidth <= 1900) && (screenHeight >= 1900)) {
        resizePersonInfo(screenWidth)
    }
    if ((screenWidth >= 1900) && (screenHeight <= 1900)) {
        resizePersonInfo(screenHeight)
    }
    if ((screenWidth <= 1900) && (screenHeight <= 1900) && (screenWidth < screenHeight)) {
        resizePersonInfo(screenWidth)
    }
    if ((screenWidth <= 1900) && (screenHeight <= 1900) && (screenWidth > screenHeight)) {
        resizePersonInfo(screenHeight)
    }
    if ((screenWidth >= 1900) && (screenHeight >= 1900)) {
        defaultPersonInfo() // вернуться к настройкам стилей, установленным в style.css
    }
    if ((screenWidth <= 1200) && (screenHeight >= 1200)) {
        resizePersonInfoMini()
    }
    if ((screenHeight <= 1200) && (screenWidth >= 1200)) {
        resizePersonInfoMini()
    }
    if ((screenWidth <= 1200) && (screenHeight <= 1200) && (screenWidth < screenHeight)) {
        resizePersonInfoMini()
    }
    if ((screenWidth <= 1200) && (screenHeight <= 1200) && (screenWidth > screenHeight)) {
        resizePersonInfoMini()
    }
    if ((screenWidth >= 1200) && (screenHeight >= 1200)) {
        defaultPersonInfoPlus() // вернуться к настройкам стилей, установленным в style.css, для #personProfession, #personDescription
    }
}

let sizePersonInfoDefault = (screenWidth, screenHeight) => {
    if ((screenWidth <= 1900) && (screenHeight >= 1900)) {
        resizePersonInfo(screenWidth)
    }
    if ((screenHeight <= 1900) && (screenWidth >= 1900)) {
        resizePersonInfo(screenHeight)
    }
    if ((screenWidth <= 1900) && (screenHeight <= 1900) && (screenWidth < screenHeight)) {
        resizePersonInfo(screenWidth)
    }
    if ((screenWidth <= 1900) && (screenHeight <= 1900) && (screenWidth > screenHeight)) {
        resizePersonInfo(screenHeight)
    }
    if ((screenWidth >= 1900) && (screenHeight >= 1900) && (screenWidth < screenHeight)) {
        resizePersonInfo(screenWidth)
    }
    if ((screenWidth >= 1900) && (screenHeight >= 1900) && (screenWidth > screenHeight)) {
        resizePersonInfo(screenHeight)
    }
    // условия при первой загрузке сайта, для #personProfession, #personDescription
    if ((screenWidth <= 1200) && (screenHeight >= 1200)) {
        resizePersonInfoMini()
    }
    if ((screenHeight <= 1200) && (screenWidth >= 1200)) {
        resizePersonInfoMini()
    }
    if ((screenWidth <= 1200) && (screenHeight <= 1200) && (screenWidth < screenHeight)) {
        resizePersonInfoMini()
    }
    if ((screenWidth <= 1200) && (screenHeight <= 1200) && (screenWidth > screenHeight)) {
        resizePersonInfoMini()
    }
}

function setSizePersonInfo() {
    addEventListener('resize', event => {

        let getSizeElement = new GetSizeElement() // получить текущие размеры блоков

        if (getSizeElement.windowInnerW < getSizeElement.screenW) {
            sizePersonInfo(getSizeElement.windowInnerW, getSizeElement.windowInnerH)
        } else {
            sizePersonInfo(getSizeElement.screenW, getSizeElement.screenH)
        }

        // original
        // if ((getSizeElement.windowInnerW <= 1900) && (getSizeElement.windowInnerH >= 1900)) {
        //     resizePersonInfo(getSizeElement.windowInnerW)
        // }
        // if ((getSizeElement.windowInnerW >= 1900) && (getSizeElement.windowInnerH <= 1900)) {
        //     resizePersonInfo(getSizeElement.windowInnerH)
        // }
        // if ((getSizeElement.windowInnerW <= 1900) && (getSizeElement.windowInnerH <= 1900) && (getSizeElement.windowInnerW < getSizeElement.windowInnerH)) {
        //     resizePersonInfo(getSizeElement.windowInnerW)
        // }
        // if ((getSizeElement.windowInnerW <= 1900) && (getSizeElement.windowInnerH <= 1900) && (getSizeElement.windowInnerW > getSizeElement.windowInnerH)) {
        //     resizePersonInfo(getSizeElement.windowInnerH)
        // }
        // if ((getSizeElement.windowInnerW >= 1900) && (getSizeElement.windowInnerH >= 1900)) {
        //     defaultPersonInfo() // вернуться к настройкам стилей, установленным в style.css
        // }
        // if ((getSizeElement.windowInnerW <= 1200) && (getSizeElement.windowInnerH >= 1200)) {
        //     resizePersonInfoMini()
        // }
        // if ((getSizeElement.windowInnerH <= 1200) && (getSizeElement.windowInnerW >= 1200)) {
        //     resizePersonInfoMini()
        // }
        // if ((getSizeElement.windowInnerW <= 1200) && (getSizeElement.windowInnerH <= 1200) && (getSizeElement.windowInnerW < getSizeElement.windowInnerH)) {
        //     resizePersonInfoMini()
        // }
        // if ((getSizeElement.windowInnerW <= 1200) && (getSizeElement.windowInnerH <= 1200) && (getSizeElement.windowInnerW > getSizeElement.windowInnerH)) {
        //     resizePersonInfoMini()
        // }
        // if ((getSizeElement.windowInnerW >= 1200) && (getSizeElement.windowInnerH >= 1200)) {
        //     defaultPersonInfoPlus() // вернуться к настройкам стилей, установленным в style.css, для #personProfession, #personDescription
        // }
    })
}

// условия при первой загрузке сайта
function setSizePersonInfoDefault() {
    let getSizeElement = new GetSizeElement() // получить текущие размеры блоков

    if (getSizeElement.windowInnerW < getSizeElement.screenW) {
        sizePersonInfoDefault(getSizeElement.windowInnerW, getSizeElement.windowInnerH)
    } else {
        sizePersonInfoDefault(getSizeElement.screenW, getSizeElement.screenH)
    }

    // original
    // if ((getSizeElement.windowInnerW <= 1900) && (getSizeElement.windowInnerH >= 1900)) {
    //     resizePersonInfo(getSizeElement.windowInnerW)
    // }
    // if ((getSizeElement.windowInnerH <= 1900) && (getSizeElement.windowInnerW >= 1900)) {
    //     resizePersonInfo(getSizeElement.windowInnerH)
    // }
    // if ((getSizeElement.windowInnerW <= 1900) && (getSizeElement.windowInnerH <= 1900) && (getSizeElement.windowInnerW < getSizeElement.windowInnerH)) {
    //     resizePersonInfo(getSizeElement.windowInnerW)
    // }
    // if ((getSizeElement.windowInnerW <= 1900) && (getSizeElement.windowInnerH <= 1900) && (getSizeElement.windowInnerW > getSizeElement.windowInnerH)) {
    //     resizePersonInfo(getSizeElement.windowInnerH)
    // }
    // if ((getSizeElement.windowInnerW >= 1900) && (getSizeElement.windowInnerH >= 1900) && (getSizeElement.windowInnerW < getSizeElement.windowInnerH)) {
    //     resizePersonInfo(getSizeElement.windowInnerW)
    // }
    // if ((getSizeElement.windowInnerW >= 1900) && (getSizeElement.windowInnerH >= 1900) && (getSizeElement.windowInnerW > getSizeElement.windowInnerH)) {
    //     resizePersonInfo(getSizeElement.windowInnerH)
    // }
    // // условия при первой загрузке сайта, для #personProfession, #personDescription
    // if ((getSizeElement.windowInnerW <= 1200) && (getSizeElement.windowInnerH >= 1200)) {
    //     resizePersonInfoMini()
    // }
    // if ((getSizeElement.windowInnerH <= 1200) && (getSizeElement.windowInnerW >= 1200)) {
    //     resizePersonInfoMini()
    // }
    // if ((getSizeElement.windowInnerW <= 1200) && (getSizeElement.windowInnerH <= 1200) && (getSizeElement.windowInnerW < getSizeElement.windowInnerH)) {
    //     resizePersonInfoMini()
    // }
    // if ((getSizeElement.windowInnerW <= 1200) && (getSizeElement.windowInnerH <= 1200) && (getSizeElement.windowInnerW > getSizeElement.windowInnerH)) {
    //     resizePersonInfoMini()
    // }
}

/* ======== END - Your information about yourself (#personInfo) ===================================================== */


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


function circlePlay() {
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

    requestAnimationFrame(circlePlay);
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


/* ======== START - Art animation (.art, .portfolio) ================================================================ */
const art = document.getElementsByClassName('art')
const maskCircle = document.getElementsByClassName('mask-circle')
let str = 0 // start
let spd = 1 // speed
let str2 = 0
let spd2 = 0.1
let toggle = 0
let requestId

// вернуться к начальным размерам маски круга
function getDefault() {
    for (let i = 0; i < art.length; i++) {
        maskCircle[i].style.r = "220px"
    }
}

// function layerPlay(i) {
//     if (toggle) {
//         maskCircle[i].style.r = 220 - str + 'px'
//         str += spd
//
//         if (str >= 180) {
//             toggle = false
//         }
//     }
//
//     if (!toggle) {
//         maskCircle[i].style.r = -(10 * Math.sin(str2)) + 40 + 'px'
//         str2 += spd2
//
//         // test
//         // console.log(toggle)
//     }
//
//     // колбэк ()=>{layerPlay(i)} выглядит в таком виде, чтобы передать аргумент
//     requestId = requestAnimationFrame(() => {
//         layerPlay(i)
//     });
// }

function layerPlay(i) {
    switch (toggle) {
        case 0:
            maskCircle[i].style.r = 220 - str + 'px'
            str += spd

            if (str >= 180) {
                toggle = 1
            }
            // console.log('e')
            break

        case 1:
            maskCircle[i].style.r = -(10 * Math.sin(str2)) + 40 + 'px'
            str2 += spd2
            // console.log('q')
            break
    }

    // колбэк ()=>{layerPlay(i)} выглядит в таком виде, чтобы передать аргумент
    requestId = requestAnimationFrame(() => {
        layerPlay(i)
    });
}


function layerStop(requestId) {
    str = 0
    toggle = 0
    getDefault()

    // test
    console.log('stop')

    cancelAnimationFrame(requestId)
}


for (let i = 0; i < art.length; i++) {
    art[i].addEventListener('mouseover', () => layerPlay(i))
    art[i].addEventListener('mouseout', () => layerStop(requestId))

    // art[i].addEventListener('mouseover', () => hello(i))
    // art[i].addEventListener('mouseout', () => helloEnd(i))
}

// function hello(i) {
//     // layerPlay1()
//     console.log('hello ' + i)
// }
//
// function helloEnd(i) {
//     console.log('helloEnd ' + i)
// }


/* ======== END - Art animation (.art, .portfolio) ================================================================== */