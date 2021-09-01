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
        // this.personHeading1W = document.getElementById('personName').offsetWidth

        // параметры области видимости (viewport)
        this.windowInnerW = window.innerWidth
        this.windowInnerH = window.innerHeight
    }

    // GetSizeBlock() // test

    // console.log(windowInnerW, windowInnerH) // test
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

    function resizeCircle(windowInnerSize) {
        let change = Math.round((1400 * windowInnerSize) / 1900)
        let changeBottom = Math.round((314 * windowInnerSize) / 1900)

        document.getElementById('circle').style.width = change + 'px'
        document.getElementById('circle').style.height = change + 'px'
        document.getElementById('circle').style.bottom = changeBottom + 'px'
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
    // 740px  - width #personInfo
    // 210%   - font-size, #personName
    // 130%   - font-size, #personProfession
    // 118%   - font-size, #personDescription
    // 300px  - bottom, #personInfo
    // 900px - right, #personInfo

    function defaultPersonInfo() {
        document.getElementById('personInfo').style.width = 740 + 'px'
        document.getElementById('personName').style.fontSize = 210 + '%'
        document.getElementById('personProfession').style.fontSize = 130 + '%'
        document.getElementById('personDescription').style.fontSize = 118 + '%'
        document.getElementById('personInfo').style.bottom = 300 + 'px'
        document.getElementById('personInfo').style.right = 900 + 'px'
    }

    // #personProfession, #personDescription
    function defaultPersonInfoPlus() {
        document.getElementById('personProfession').style.display = 'block'
        document.getElementById('personDescription').style.display = 'block'
        document.getElementById('personName').style.borderBottomRightRadius = 0 + 'px'
        document.getElementById('personName').style.borderBottomLeftRadius = 0 + 'px'
    }

    // #personProfession, #personDescription
    function resizePersonInfoMini() {
        document.getElementById('personProfession').style.display = 'none'
        document.getElementById('personDescription').style.display = 'none'
        document.getElementById('personName').style.borderBottomRightRadius = 0.5 + 'em'
        document.getElementById('personName').style.borderBottomLeftRadius = 0.5 + 'em'
        document.getElementById('personInfo').style.right = 0 + 'px'
    }

    function resizePersonInfo(compositionSize) {
        let change = Math.round((740 * compositionSize) / 1900)
        let changepersonName = Math.round((210 * compositionSize) / 1900)
        let changepersonProfession = Math.round((130 * compositionSize) / 1900)
        let changePersonDescription = Math.round((118 * compositionSize) / 1900)
        let changeBottom = Math.round((300 * compositionSize) / 1900)
        let changeLeft = Math.round((900 * compositionSize) / 1900)


        document.getElementById('personInfo').style.width = change + 'px'
        document.getElementById('personName').style.fontSize = changepersonName + '%'
        document.getElementById('personProfession').style.fontSize = changepersonProfession + '%'
        document.getElementById('personDescription').style.fontSize = changePersonDescription + '%'
        document.getElementById('personInfo').style.bottom = changeBottom + 'px'
        document.getElementById('personInfo').style.right = changeLeft + 'px'
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

            // условие, если у #personInfo ширина, высота меньше 1200px, для #personProfession, #personDescription
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

            if (getSizeBlock.windowInnerW >= 1200) {
                document.getElementById('nav').style.display = 'block'
                document.getElementById('navRight').style.display = 'none'
                document.getElementById('openNavRight').style.display = 'none'
            }
            if (getSizeBlock.windowInnerW <= 1200) {
                document.getElementById('nav').style.display = 'none'
                document.getElementById('openNavRight').style.display = 'block'
            }
        })
    }

    setCloseNavRight()

    function setCloseNavRightDefault() {
        let getSizeBlock = new GetSizeBlock() // получить текущие размеры блоков

        if (getSizeBlock.windowInnerW >= 1200) {
            document.getElementById('nav').style.display = 'block'
            document.getElementById('navRight').style.display = 'none'
            document.getElementById('openNavRight').style.display = 'none'
        }
        if (getSizeBlock.windowInnerW <= 1200) {
            document.getElementById('nav').style.display = 'none'
            document.getElementById('openNavRight').style.display = 'block'
        }
    }

    setCloseNavRightDefault()
    /* ======== END - #navRight ===================================================================================== */


    /* ======== START - .title-section ============================================================================== */

    function setSizeBorderSection() {

        let k = document.getElementsByClassName('title-section__heading').length

        for (let i = 0; i <= (k - 1); i++) {

            let headingBaseW = document.getElementsByClassName('title-section__heading')[i].offsetWidth
            let headingBaseH = document.getElementsByClassName('title-section__heading')[i].offsetHeight

            if ((headingBaseW > 0) && (headingBaseH > 0)) {

                // тк border: 3px, то минус 6
                document.getElementsByClassName('title-section__border')[i].style.width = headingBaseW - 6 + 'px'
                document.getElementsByClassName('title-section__border')[i].style.height = headingBaseH - 6 + 'px'
            }
        }
    }

    setSizeBorderSection()
    /* ======== END - .title-section ================================================================================ */
}