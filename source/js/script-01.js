// скрипт будет выполнен, когда вся страница, со всеми подключениями будут загружены
window.onload = () => {

    /* ======== START - Get block sizes ============================================================================= */
    function GetSizeBlock() {
        // #composition
        this.compositionW = document.getElementById('composition').offsetWidth
        this.compositionH = document.getElementById('composition').offsetHeight

        // #circle
        this.circleW = document.getElementById('circle').offsetWidth
        this.circleH = document.getElementById('circle').offsetHeight

        // #personImg
        this.personImgW = document.getElementById('personImg').offsetWidth
        this.personImgH = document.getElementById('personImg').offsetHeight

        // #personHeading1
        this.personHeading1W = document.getElementById('personH1').offsetWidth

        // параметры области видимости (viewport)
        this.windowInnerWidth = window.innerWidth
    }

    // GetSizeBlock() // test

    // console.log(compositionW, compositionH) // test
    // console.log(circleW, circleH) // test
    // console.log(personImgW, personImgH) // test
    /* ======== END - Get block sizes =============================================================================== */


    /* ======== START - #circle ===================================================================================== */
    // размеры блоков установленные в стилях, размеры блоков при 4k разрешении
    // 314px   - bottom блока #circle
    // 1400px  - width блока #circle
    // 1400px  - height блока #circle
    // 3600px  - width блока #composition 
    // 1900px  - height блока #composition

    function defaultCircle() {
        document.getElementById('circle').style.width = 1400 + 'px'
        document.getElementById('circle').style.height = 1400 + 'px'
        document.getElementById('circle').style.bottom = 314 + 'px'
    }

    function resizeCircle(compositionSize) {
        let change = Math.round((1400 * compositionSize) / 1900)
        let changeBottom = Math.round((314 * compositionSize) / 1900)

        document.getElementById('circle').style.width = change + 'px'
        document.getElementById('circle').style.height = change + 'px'
        document.getElementById('circle').style.bottom = changeBottom + 'px'
    }


    // условия при изменении ширины и, или высоты экрана
    function setSizeCircle() {
        addEventListener('resize', event => {
            let getSizeBlock = new GetSizeBlock() // получить текущие размеры блоков

            if ((getSizeBlock.compositionW <= 1900) && (getSizeBlock.compositionH >= 1900)) {
                resizeCircle(getSizeBlock.compositionW)
            }
            if ((getSizeBlock.compositionW >= 1900) && (getSizeBlock.compositionH <= 1900)) {
                resizeCircle(getSizeBlock.compositionH)
            }
            if ((getSizeBlock.compositionW <= 1900) && (getSizeBlock.compositionH <= 1900) && (getSizeBlock.compositionW < getSizeBlock.compositionH)) {
                resizeCircle(getSizeBlock.compositionW)
            }
            if ((getSizeBlock.compositionW <= 1900) && (getSizeBlock.compositionH <= 1900) && (getSizeBlock.compositionW > getSizeBlock.compositionH)) {
                resizeCircle(getSizeBlock.compositionH)
            }
            if ((getSizeBlock.compositionW >= 1900) && (getSizeBlock.compositionH >= 1900)) {
                defaultCircle()
            }
        })
    }

    setSizeCircle()

    // условия при первой загрузке сайта
    function setSizeCircleDefault() {
        let getSizeBlock = new GetSizeBlock() // получить текущие размеры блоков

        if ((getSizeBlock.compositionW <= 1900) && (getSizeBlock.compositionH >= 1900)) {
            resizeCircle(getSizeBlock.compositionW)
        }
        if ((getSizeBlock.compositionW >= 1900) && (getSizeBlock.compositionH <= 1900)) {
            resizeCircle(getSizeBlock.compositionH)
        }
        if ((getSizeBlock.compositionW <= 1900) && (getSizeBlock.compositionH <= 1900) && (getSizeBlock.compositionW < getSizeBlock.compositionH)) {
            resizeCircle(getSizeBlock.compositionW)
        }
        if ((getSizeBlock.compositionW <= 1900) && (getSizeBlock.compositionH <= 1900) && (getSizeBlock.compositionW > getSizeBlock.compositionH)) {
            resizeCircle(getSizeBlock.compositionH)
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
        document.getElementById('personImg').style.width = 1020 + 'px'
        document.getElementById('personImg').style.height = 1500 + 'px'
    }

    // #composition - ширина
    function resizePersonImgWidth(compositionSize) {
        let changeW = Math.round((1020 * compositionSize) / 1900)
        let changeH = Math.round((changeW * 1500) / 1020)

        document.getElementById('personImg').style.width = changeW + 'px'
        document.getElementById('personImg').style.height = changeH + 'px'
    }

    // #composition - высота
    function resizePersonImgHeight(compositionSize) {
        let changeH = Math.round((1500 * compositionSize) / 1900)
        let changeW = Math.round((changeH * 1020) / 1500)

        document.getElementById('personImg').style.width = changeW + 'px'
        document.getElementById('personImg').style.height = changeH + 'px'
    }

    // условия при изменении ширины и, или высоты экрана
    function setSizePersonImg() {
        addEventListener('resize', event => {
            let getSizeBlock = new GetSizeBlock() // получить текущие размеры блоков

            if ((getSizeBlock.compositionW <= 1900) && (getSizeBlock.compositionH >= 1900)) {
                resizePersonImgWidth(getSizeBlock.compositionW)
            }
            if ((getSizeBlock.compositionH <= 1900) && (getSizeBlock.compositionW >= 1900)) {
                resizePersonImgHeight(getSizeBlock.compositionH)
            }
            if ((getSizeBlock.compositionW <= 1900) && (getSizeBlock.compositionH <= 1900) && (getSizeBlock.compositionW < getSizeBlock.compositionH)) {
                resizePersonImgWidth(getSizeBlock.compositionW)
            }
            if ((getSizeBlock.compositionW <= 1900) && (getSizeBlock.compositionH <= 1900) && (getSizeBlock.compositionW > getSizeBlock.compositionH)) {
                resizePersonImgHeight(getSizeBlock.compositionH)
            }
            if ((getSizeBlock.compositionW >= 1900) && (getSizeBlock.compositionH >= 1900)) {
                defaultPersonImg()
            }
        })
    }

    setSizePersonImg()

    // условия при первой загрузке сайта
    function setSizePersonImgDefault() {
        let getSizeBlock = new GetSizeBlock() // получить текущие размеры блоков

        if ((getSizeBlock.compositionW <= 1900) && (getSizeBlock.compositionH >= 1900)) {
            resizePersonImgWidth(getSizeBlock.compositionW)
        }
        if ((getSizeBlock.compositionH <= 1900) && (getSizeBlock.compositionW >= 1900)) {
            resizePersonImgHeight(getSizeBlock.compositionH)
        }
        if ((getSizeBlock.compositionW <= 1900) && (getSizeBlock.compositionH <= 1900) && (getSizeBlock.compositionW < getSizeBlock.compositionH)) {
            resizePersonImgWidth(getSizeBlock.compositionW)
        }
        if ((getSizeBlock.compositionW <= 1900) && (getSizeBlock.compositionH <= 1900) && (getSizeBlock.compositionW > getSizeBlock.compositionH)) {
            resizePersonImgHeight(getSizeBlock.compositionH)
        }
    }

    setSizePersonImgDefault()
    /* ======== END - #personImg ==================================================================================== */


    /* ======== START - #personInfo ================================================================================= */
    // размеры блоков установленные в стилях, размеры блоков при 4k разрешении
    // 718px  - width #personInfo
    // 210%   - font-size, #personH1
    // 130%   - font-size, #personH2
    // 118%   - font-size, #personDescription
    // 300px  - bottom, #personInfo
    // 1000px - right, #personInfo

    function defaultPersonInfo() {
        document.getElementById('personInfo').style.width = 718 + 'px'
        document.getElementById('personH1').style.fontSize = 210 + '%'
        document.getElementById('personH2').style.fontSize = 130 + '%'
        document.getElementById('personDescription').style.fontSize = 118 + '%'
        document.getElementById('personInfo').style.bottom = 300 + 'px'
        document.getElementById('personInfo').style.right = 1000 + 'px'
    }

    // #personH2, #personDescription
    function defaultPersonInfoPlus() {
        document.getElementById('personH2').style.display = 'block'
        document.getElementById('personDescription').style.display = 'block'
        document.getElementById('personH1').style.borderBottomRightRadius = 0 + 'px'
        document.getElementById('personH1').style.borderBottomLeftRadius = 0 + 'px'
    }

    // #personH2, #personDescription
    function resizePersonInfoMini() {
        document.getElementById('personH2').style.display = 'none'
        document.getElementById('personDescription').style.display = 'none'
        document.getElementById('personH1').style.borderBottomRightRadius = 0.5 + 'em'
        document.getElementById('personH1').style.borderBottomLeftRadius = 0.5 + 'em'
    }

    function resizePersonInfo(compositionSize) {
        let change = Math.round((718 * compositionSize) / 1900)
        let changePersonH1 = Math.round((210 * compositionSize) / 1900)
        let changePersonH2 = Math.round((130 * compositionSize) / 1900)
        let changePersonDescription = Math.round((118 * compositionSize) / 1900)
        let changeBottom = Math.round((300 * compositionSize) / 1900)
        let changeLeft = Math.round((1000 * compositionSize) / 1900)


        document.getElementById('personInfo').style.width = change + 'px'
        document.getElementById('personH1').style.fontSize = changePersonH1 + '%'
        document.getElementById('personH2').style.fontSize = changePersonH2 + '%'
        document.getElementById('personDescription').style.fontSize = changePersonDescription + '%'
        document.getElementById('personInfo').style.bottom = changeBottom + 'px'
        document.getElementById('personInfo').style.right = changeLeft + 'px'
    }


    function setSizePersonInfo() {
        addEventListener('resize', event => {

            let getSizeBlock = new GetSizeBlock() // получить текущие размеры блоков

            if ((getSizeBlock.compositionW <= 1900) && (getSizeBlock.compositionH >= 1900)) {
                resizePersonInfo(getSizeBlock.compositionW)

                console.log('lala') // test
            }
            if ((getSizeBlock.compositionW >= 1900) && (getSizeBlock.compositionH <= 1900)) {
                resizePersonInfo(getSizeBlock.compositionH)
            }
            if ((getSizeBlock.compositionW <= 1900) && (getSizeBlock.compositionH <= 1900) && (getSizeBlock.compositionW < getSizeBlock.compositionH)) {
                resizePersonInfo(getSizeBlock.compositionW)
            }
            if ((getSizeBlock.compositionW <= 1900) && (getSizeBlock.compositionH <= 1900) && (getSizeBlock.compositionW > getSizeBlock.compositionH)) {
                resizePersonInfo(getSizeBlock.compositionH)
            }
            if ((getSizeBlock.compositionW >= 1900) && (getSizeBlock.compositionH >= 1900)) {
                defaultPersonInfo() // вернуться к настройкам стилей, установленным в style.css
            }

            // условие, если у #personInfo ширина, высота меньше 1200px, для #personH2, #personDescription
            if ((getSizeBlock.compositionW <= 1200) && (getSizeBlock.compositionH >= 1200)) {
                resizePersonInfoMini()
            }
            if ((getSizeBlock.compositionH <= 1200) && (getSizeBlock.compositionW >= 1200)) {
                resizePersonInfoMini()
            }
            if ((getSizeBlock.compositionW <= 1200) && (getSizeBlock.compositionH <= 1200) && (getSizeBlock.compositionW < getSizeBlock.compositionH)) {
                resizePersonInfoMini()
            }
            if ((getSizeBlock.compositionW <= 1200) && (getSizeBlock.compositionH <= 1200) && (getSizeBlock.compositionW > getSizeBlock.compositionH)) {
                resizePersonInfoMini()
            }
            if ((getSizeBlock.compositionW >= 1200) && (getSizeBlock.compositionH >= 1200)) {
                defaultPersonInfoPlus() // вернуться к настройкам стилей, установленным в style.css, для #personH2, #personDescription
            }
        })
    }

    setSizePersonInfo()

    // условия при первой загрузке сайта
    function setSizePersonInfoDefault() {
        let getSizeBlock = new GetSizeBlock() // получить текущие размеры блоков

        if ((getSizeBlock.compositionW <= 1900) && (getSizeBlock.compositionH >= 1900)) {
            resizePersonInfo(getSizeBlock.compositionW)
        }
        if ((getSizeBlock.compositionH <= 1900) && (getSizeBlock.compositionW >= 1900)) {
            resizePersonInfo(getSizeBlock.compositionH)
        }
        if ((getSizeBlock.compositionW <= 1900) && (getSizeBlock.compositionH <= 1900) && (getSizeBlock.compositionW < getSizeBlock.compositionH)) {
            resizePersonInfo(getSizeBlock.compositionW)
        }
        if ((getSizeBlock.compositionW <= 1900) && (getSizeBlock.compositionH <= 1900) && (getSizeBlock.compositionW > getSizeBlock.compositionH)) {
            resizePersonInfo(getSizeBlock.compositionH)


        }

        // условия при первой загрузке сайта, для #personH2, #personDescription
        if ((getSizeBlock.compositionW <= 1200) && (getSizeBlock.compositionH >= 1200)) {
            resizePersonInfoMini()
        }
        if ((getSizeBlock.compositionH <= 1200) && (getSizeBlock.compositionW >= 1200)) {
            resizePersonInfoMini()
        }
        if ((getSizeBlock.compositionW <= 1200) && (getSizeBlock.compositionH <= 1200) && (getSizeBlock.compositionW < getSizeBlock.compositionH)) {
            resizePersonInfoMini()
        }
        if ((getSizeBlock.compositionW <= 1200) && (getSizeBlock.compositionH <= 1200) && (getSizeBlock.compositionW > getSizeBlock.compositionH)) {
            resizePersonInfoMini()
        }
    }

    setSizePersonInfoDefault()
    /* ======== END - #personInfo =================================================================================== */


    /* ======== START - #navRight =================================================================================== */
    document.getElementById('openNavRight').addEventListener('click', openNavRight)
    document.getElementById('closeNavRight').addEventListener('click', closeNavRight)

    function openNavRight() {
        document.getElementById('openNavRight').style.display = 'none'
        document.getElementById('navRight').style.display = 'block'
    }

    function closeNavRight() {
        document.getElementById('openNavRight').style.display = 'block'
        document.getElementById('navRight').style.display = 'none'
    }

    function setCloseNavRight() {
        addEventListener('resize', event => {

            let getSizeBlock = new GetSizeBlock() // получить текущие размеры блоков

            if (getSizeBlock.windowInnerWidth >= 1200) {
                document.getElementById('nav').style.display = 'block'
                document.getElementById('navRight').style.display = 'none'
                document.getElementById('openNavRight').style.display = 'none'
            }
            if (getSizeBlock.windowInnerWidth <= 1200) {
                document.getElementById('nav').style.display = 'none'
                document.getElementById('openNavRight').style.display = 'block'
            }
        })
    }

    setCloseNavRight()

    function setCloseNavRightDefault() {
        let getSizeBlock = new GetSizeBlock() // получить текущие размеры блоков

        if (getSizeBlock.windowInnerWidth >= 1200) {
            document.getElementById('nav').style.display = 'block'
            document.getElementById('navRight').style.display = 'none'
            document.getElementById('openNavRight').style.display = 'none'
        }
        if (getSizeBlock.windowInnerWidth <= 1200) {
            document.getElementById('nav').style.display = 'none'
            document.getElementById('openNavRight').style.display = 'block'
        }
    }

    setCloseNavRightDefault()
    /* ======== END - #navRight ===================================================================================== */


    /* ======== START - #headingSection ============================================================================= */

    function setSizeBorderSection() {

        let k = document.getElementsByClassName('heading-section').length

        for (let i = 0; i <= (k - 1); i++) {

            let headingBaseW = document.getElementsByClassName('heading-section')[i].offsetWidth
            let headingBaseH = document.getElementsByClassName('heading-section')[i].offsetHeight

            if ((headingBaseW > 0) && (headingBaseH > 0)) {

                // тк border: 3px, то минус 6
                document.getElementsByClassName('border-section')[i].style.width = headingBaseW - 6 + 'px'
                document.getElementsByClassName('border-section')[i].style.height = headingBaseH - 6 + 'px'
            }
        }
    }

    setSizeBorderSection()
    /* ======== END - #headingSection =============================================================================== */
}