// скрипт будет выполнен, когда вся страница, со всеми подключениями будут загружены
window.onload = () => {

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


    /* ======== START - Get block sizes ============================================================================= */
    function GetSizeBlock() {
        if ((composition !== null) && (circle !== null) && (personImg !== null)) {
            this.compositionW = composition.offsetWidth
            this.compositionH = composition.offsetHeight

            this.circleW = circle.offsetWidth
            this.circleH = circle.offsetHeight

            this.personImgW = personImg.offsetWidth
            this.personImgH = personImg.offsetHeight
        }

        // параметры области видимости (viewport)
        this.windowInnerW = window.innerWidth
        this.windowInnerH = window.innerHeight
    }

    // console.log(document.getElementById('composition')) // test

    /* ======== END - Get block sizes =============================================================================== */


    /* ======== START - Fixing the header when scrolling. #header =================================================== */
    function miniHeader() {
        if (pageYOffset > 100) {
            document.getElementById('header').style.top = -16 + 'px'
            document.getElementById('header').style.opacity = 95 + '%'
            document.getElementById('navRight').style.height = 'calc(100vh + 16px)'
        } else {
            document.getElementById('header').style.top = 0 + 'px'
            document.getElementById('header').style.opacity = 100 + '%'
            document.getElementById('navRight').style.height = 100 + 'vh'
        }
    }

    miniHeader() // чтобы при перезагрузке страницы правильно работала функция, если уже был скролл

    window.addEventListener('scroll', miniHeader) // срабатывание при скролле
    /* ======== END - Fixing the header when scrolling. #header ===================================================== */


    /* ======== START - Highlighting the active menu item. #nav, #navRight ========================================== */
    let border = window.innerHeight / 1.8 // установка границы срабатывания скрипта
    let sectionsLength = document.getElementsByTagName('section').length
    let sections = document.querySelectorAll('section');
    let navLinks = document.getElementById('nav').querySelectorAll('li a')
    let navRightLinks = document.getElementById('navRight').querySelectorAll('li a')

    // условие для отдельной страницы portfolio, где всего одна section
    if (sections > 1) {
        navLinks[0].classList.add('nav__link--active')
        navRightLinks[0].classList.add('nav-right__link--active')
    }

    function addRemoveActive(target) {
        let top = sections[target].getBoundingClientRect().top
        let bottom = sections[target].getBoundingClientRect().bottom

        if ((top < border) && (bottom > border) && (sections > 1)) {
            for (let k = 0; k < sectionsLength; k++) {
                navLinks[k].classList.remove('nav__link--active')
                navRightLinks[k].classList.remove('nav-right__link--active')
            }

            navLinks[target].classList.add('nav__link--active')
            navRightLinks[target].classList.add('nav-right__link--active')
        }
    }

    window.addEventListener('scroll', function () {
        for (let i = 0; i < sectionsLength; i++) {
            addRemoveActive(i)
        }
    })
    /* ======== END - Highlighting the active menu item. #nav, #navRight ============================================ */


    /* ======== START - Scroll animation for nav and 'Order Now' buttons. #nav, #navRight, .btn-arrow =============== */
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
    $('button.btn-arrow[href*="#"]').on('click', function (e) {
        e.preventDefault()

        // анимация при прокрутке
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000, 'swing')
    })
    /* ======== END - Scroll animation for nav and 'Order Now' buttons. #nav, #navRight, .btn-arrow ================= */


    /* ======== START - Open, close right nav. #navRight, #closeNavRight ============================================ */
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

    function setCloseNavRight() {
        addEventListener('resize', event => {

            let getSizeBlock = new GetSizeBlock() // получить текущие размеры блоков

            if (getSizeBlock.windowInnerW >= 1200) {
                nav.style.display = 'block'
                navRight.style.display = 'none'
                openNavRight.style.display = 'none'
            }
            if (getSizeBlock.windowInnerW <= 1200) {
                document.getElementById('nav').style.display = 'none'
                openNavRight.style.display = 'block'
            }
        })
    }

    setCloseNavRight()

    function setCloseNavRightDefault() {
        let getSizeBlock = new GetSizeBlock() // получить текущие размеры блоков

        if (getSizeBlock.windowInnerW >= 1200) {
            nav.style.display = 'block'
            navRight.style.display = 'none'
            openNavRight.style.display = 'none'
        }
        if (getSizeBlock.windowInnerW <= 1200) {
            nav.style.display = 'none'
            openNavRight.style.display = 'block'
        }
    }

    setCloseNavRightDefault()
    /* ======== END - Open, close right nav. #navRight, #closeNavRight ============================================== */


    /* ======== START - #circle ===================================================================================== */
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

    // условия при изменении ширины и, или высоты экрана
    function setSizeCircle() {
        addEventListener('resize', event => {
            let getSizeBlock = new GetSizeBlock() // получить текущие размеры блоков

            if ((getSizeBlock.windowInnerW <= 1900) && (getSizeBlock.windowInnerH >= 1900)) {
                resizeCircle(getSizeBlock.windowInnerW)
            }
            if ((getSizeBlock.windowInnerW >= 1900) && (getSizeBlock.windowInnerH <= 1900)) {
                resizeCircle(getSizeBlock.windowInnerH)
            }
            if ((getSizeBlock.windowInnerW <= 1900) && (getSizeBlock.windowInnerH <= 1900) && (getSizeBlock.windowInnerW < getSizeBlock.windowInnerH)) {
                resizeCircle(getSizeBlock.windowInnerW)
            }
            if ((getSizeBlock.windowInnerW <= 1900) && (getSizeBlock.windowInnerH <= 1900) && (getSizeBlock.windowInnerW > getSizeBlock.windowInnerH)) {
                resizeCircle(getSizeBlock.windowInnerH)
            }
            if ((getSizeBlock.windowInnerW >= 1900) && (getSizeBlock.windowInnerH >= 1900)) {
                defaultCircle()
            }
        })
    }

    setSizeCircle()

    // условия при первой загрузке сайта
    function setSizeCircleDefault() {
        let getSizeBlock = new GetSizeBlock() // получить текущие размеры блоков

        if ((getSizeBlock.windowInnerW <= 1900) && (getSizeBlock.windowInnerH >= 1900)) {
            resizeCircle(getSizeBlock.windowInnerW)
        }
        if ((getSizeBlock.windowInnerW >= 1900) && (getSizeBlock.windowInnerH <= 1900)) {
            resizeCircle(getSizeBlock.windowInnerH)
        }
        if ((getSizeBlock.windowInnerW <= 1900) && (getSizeBlock.windowInnerH <= 1900) && (getSizeBlock.windowInnerW < getSizeBlock.windowInnerH)) {
            resizeCircle(getSizeBlock.windowInnerW)
        }
        if ((getSizeBlock.windowInnerW <= 1900) && (getSizeBlock.windowInnerH <= 1900) && (getSizeBlock.windowInnerW > getSizeBlock.windowInnerH)) {
            resizeCircle(getSizeBlock.windowInnerH)
        }
    }

    setSizeCircleDefault()
    /* ======== END - #circle ======================================================================================= */


    /* ======== START - #personImg ================================================================================== */
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

    // условия при изменении ширины и, или высоты экрана
    function setSizePersonImg() {
        addEventListener('resize', event => {
            let getSizeBlock = new GetSizeBlock() // получить текущие размеры блоков

            if ((getSizeBlock.windowInnerW <= 1900) && (getSizeBlock.windowInnerH >= 1900)) {
                resizePersonImgWidth(getSizeBlock.windowInnerW)
            }
            if ((getSizeBlock.windowInnerH <= 1900) && (getSizeBlock.windowInnerW >= 1900)) {
                resizePersonImgHeight(getSizeBlock.windowInnerH)
            }
            if ((getSizeBlock.windowInnerW <= 1900) && (getSizeBlock.windowInnerH <= 1900) && (getSizeBlock.windowInnerW < getSizeBlock.windowInnerH)) {
                resizePersonImgWidth(getSizeBlock.windowInnerW)
            }
            if ((getSizeBlock.windowInnerW <= 1900) && (getSizeBlock.windowInnerH <= 1900) && (getSizeBlock.windowInnerW > getSizeBlock.windowInnerH)) {
                resizePersonImgHeight(getSizeBlock.windowInnerH)
            }
            if ((getSizeBlock.windowInnerW >= 1900) && (getSizeBlock.windowInnerH >= 1900)) {
                defaultPersonImg()
            }
        })
    }

    setSizePersonImg()

    // условия при первой загрузке сайта
    function setSizePersonImgDefault() {
        let getSizeBlock = new GetSizeBlock() // получить текущие размеры блоков

        if ((getSizeBlock.windowInnerW <= 1900) && (getSizeBlock.windowInnerH >= 1900)) {
            resizePersonImgWidth(getSizeBlock.windowInnerW)
        }
        if ((getSizeBlock.windowInnerH <= 1900) && (getSizeBlock.windowInnerW >= 1900)) {
            resizePersonImgHeight(getSizeBlock.windowInnerH)
        }
        if ((getSizeBlock.windowInnerW <= 1900) && (getSizeBlock.windowInnerH <= 1900) && (getSizeBlock.windowInnerW < getSizeBlock.windowInnerH)) {
            resizePersonImgWidth(getSizeBlock.windowInnerW)
        }
        if ((getSizeBlock.windowInnerW <= 1900) && (getSizeBlock.windowInnerH <= 1900) && (getSizeBlock.windowInnerW > getSizeBlock.windowInnerH)) {
            resizePersonImgHeight(getSizeBlock.windowInnerH)
        }
    }

    setSizePersonImgDefault()
    /* ======== END - #personImg ==================================================================================== */


    /* ======== START - #personInfo ================================================================================= */
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

    function setSizePersonInfo() {
        addEventListener('resize', event => {

            let getSizeBlock = new GetSizeBlock() // получить текущие размеры блоков

            if ((getSizeBlock.windowInnerW <= 1900) && (getSizeBlock.windowInnerH >= 1900)) {
                resizePersonInfo(getSizeBlock.windowInnerW)
            }
            if ((getSizeBlock.windowInnerW >= 1900) && (getSizeBlock.windowInnerH <= 1900)) {
                resizePersonInfo(getSizeBlock.windowInnerH)
            }
            if ((getSizeBlock.windowInnerW <= 1900) && (getSizeBlock.windowInnerH <= 1900) && (getSizeBlock.windowInnerW < getSizeBlock.windowInnerH)) {
                resizePersonInfo(getSizeBlock.windowInnerW)
            }
            if ((getSizeBlock.windowInnerW <= 1900) && (getSizeBlock.windowInnerH <= 1900) && (getSizeBlock.windowInnerW > getSizeBlock.windowInnerH)) {
                resizePersonInfo(getSizeBlock.windowInnerH)
            }
            if ((getSizeBlock.windowInnerW >= 1900) && (getSizeBlock.windowInnerH >= 1900)) {
                defaultPersonInfo() // вернуться к настройкам стилей, установленным в style.css
            }
            if ((getSizeBlock.windowInnerW <= 1200) && (getSizeBlock.windowInnerH >= 1200)) {
                resizePersonInfoMini()
            }
            if ((getSizeBlock.windowInnerH <= 1200) && (getSizeBlock.windowInnerW >= 1200)) {
                resizePersonInfoMini()
            }
            if ((getSizeBlock.windowInnerW <= 1200) && (getSizeBlock.windowInnerH <= 1200) && (getSizeBlock.windowInnerW < getSizeBlock.windowInnerH)) {
                resizePersonInfoMini()
            }
            if ((getSizeBlock.windowInnerW <= 1200) && (getSizeBlock.windowInnerH <= 1200) && (getSizeBlock.windowInnerW > getSizeBlock.windowInnerH)) {
                resizePersonInfoMini()
            }
            if ((getSizeBlock.windowInnerW >= 1200) && (getSizeBlock.windowInnerH >= 1200)) {
                defaultPersonInfoPlus() // вернуться к настройкам стилей, установленным в style.css, для #personProfession, #personDescription
            }
        })
    }

    setSizePersonInfo()

    // условия при первой загрузке сайта
    function setSizePersonInfoDefault() {
        let getSizeBlock = new GetSizeBlock() // получить текущие размеры блоков

        if ((getSizeBlock.windowInnerW <= 1900) && (getSizeBlock.windowInnerH >= 1900)) {
            resizePersonInfo(getSizeBlock.windowInnerW)
        }
        if ((getSizeBlock.windowInnerH <= 1900) && (getSizeBlock.windowInnerW >= 1900)) {
            resizePersonInfo(getSizeBlock.windowInnerH)
        }
        if ((getSizeBlock.windowInnerW <= 1900) && (getSizeBlock.windowInnerH <= 1900) && (getSizeBlock.windowInnerW < getSizeBlock.windowInnerH)) {
            resizePersonInfo(getSizeBlock.windowInnerW)
        }
        if ((getSizeBlock.windowInnerW <= 1900) && (getSizeBlock.windowInnerH <= 1900) && (getSizeBlock.windowInnerW > getSizeBlock.windowInnerH)) {
            resizePersonInfo(getSizeBlock.windowInnerH)
        }
        if ((getSizeBlock.windowInnerW >= 1900) && (getSizeBlock.windowInnerH >= 1900) && (getSizeBlock.windowInnerW < getSizeBlock.windowInnerH)) {
            resizePersonInfo(getSizeBlock.windowInnerW)
        }
        if ((getSizeBlock.windowInnerW >= 1900) && (getSizeBlock.windowInnerH >= 1900) && (getSizeBlock.windowInnerW > getSizeBlock.windowInnerH)) {
            resizePersonInfo(getSizeBlock.windowInnerH)
        }
        // условия при первой загрузке сайта, для #personProfession, #personDescription
        if ((getSizeBlock.windowInnerW <= 1200) && (getSizeBlock.windowInnerH >= 1200)) {
            resizePersonInfoMini()
        }
        if ((getSizeBlock.windowInnerH <= 1200) && (getSizeBlock.windowInnerW >= 1200)) {
            resizePersonInfoMini()
        }
        if ((getSizeBlock.windowInnerW <= 1200) && (getSizeBlock.windowInnerH <= 1200) && (getSizeBlock.windowInnerW < getSizeBlock.windowInnerH)) {
            resizePersonInfoMini()
        }
        if ((getSizeBlock.windowInnerW <= 1200) && (getSizeBlock.windowInnerH <= 1200) && (getSizeBlock.windowInnerW > getSizeBlock.windowInnerH)) {
            resizePersonInfoMini()
        }
    }

    setSizePersonInfoDefault()
    /* ======== END - #personInfo =================================================================================== */


    /* ======== START - anime.js, svg, #circle ====================================================================== */
    // #circleLargeWhite
    // #circleLargeBlack
    // #circleMediumWhite
    // #circleMediumBlack
    // #circleSmallWhite
    // #circleSmallBlack

    let layer_1 = () => {
        // tl - timeLine
        let tl = anime.timeline({
            easing: 'easeInOutQuad', duration: 3000, loop: true, direction: 'alternate'
        })
        tl.add({targets: '#circleSmallWhite', r: 170})
            .add({targets: '#circleSmallBlack', r: 170}, '-=3000')
    }

    let layer_2 = () => {
        let tl = anime.timeline({
            easing: 'easeInOutQuad', duration: 3000, loop: true, direction: 'alternate'
        })
        tl.add({targets: '#circleMediumWhite', r: 270})
            .add({targets: '#circleMediumBlack', r: 270}, '-=3000')
    }

    let layer_3 = () => {
        let tl = anime.timeline({
            easing: 'easeInOutQuad', duration: 3000, loop: true, direction: 'alternate'
        })
        tl.add({targets: '#circleLargeWhite', r: 370})
            .add({targets: '#circleLargeBlack', r: 370}, '-=3000')
    }

    const startLayers = ms => {
        return new Promise(resolve => {
            setTimeout(() => resolve(), ms)
        })
    }

    // последовательность запуска слоев
    startLayers(0).then(layer_1)
    startLayers(700).then(layer_2)
    startLayers(1600).then(layer_3)
    /* ======== END - anime.js, svg, #circle ======================================================================== */


    /* ======== START - .title-section ============================================================================== */
    function setSizeBorderSection() {
        let k = document.getElementsByClassName('title-section__heading').length

        for (let i = 0; i <= (k - 1); i++) {
            let headingBaseWidth = document.getElementsByClassName('title-section__heading')[i].offsetWidth
            let headingBaseHeight = document.getElementsByClassName('title-section__heading')[i].offsetHeight

            if ((headingBaseWidth > 0) && (headingBaseHeight > 0)) {
                // тк border: 3px, то минус 6
                document.getElementsByClassName('title-section__border')[i].style.width = headingBaseWidth + 'px'
                document.getElementsByClassName('title-section__border')[i].style.height = headingBaseHeight + 'px'
            }
        }
    }

    setSizeBorderSection()

    function resizeSizeBorderSection() {
        addEventListener('resize', event => {
            let getSizeBlock = new GetSizeBlock() // получить текущие размеры блоков

            if (getSizeBlock.windowInnerW <= 576) {
                setSizeBorderSection()
            }
            if (getSizeBlock.windowInnerW >= 576) {
                setSizeBorderSection()
            }
        })
    }

    resizeSizeBorderSection()
    /* ======== END - .title-section ================================================================================ */


    /* ======== START - .owl-carousel =============================================================================== */
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
    /* ======== END - .owl-carousel ================================================================================= */


    /* ======== START - .portfolio-items, isotope.js ================================================================ */
    let $grid = $('.portfolio-items').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
        getSortData: {
            name: function (element) {
                return $(element).text();
            }
        }
    });

    $('.btn-filter').on('click', function () {
        let value = $(this).attr('data-filter');
        $grid.isotope({
            filter: value
        });

        $('.btn-filter').removeClass('btn-filter--active');
        $(this).addClass('btn-filter--active');
    })
    /* ======== END - .portfolio-items, isotope.js ================================================================== */
}