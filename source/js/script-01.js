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
        this.personHeading1W = document.getElementById('personHeading1').offsetWidth
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

            // console.log(getSizeBlock.compositionH) // test

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

            // console.log(getSizeBlock.compositionH) // test

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
    function resizePersonInfo(compositionSize) {
        let change = Math.round((709 * compositionSize) / 1900)
        let changePersonHeading1 = Math.round((210 * compositionSize) / 1900)
        let changePersonHeading2 = Math.round((130 * compositionSize) / 1900)

        document.getElementById('personInfo').style.width = change + 'px'
        document.getElementById('personHeading1').style.fontSize = changePersonHeading1 + '%'
        document.getElementById('personHeading2').style.fontSize = changePersonHeading2 + '%'
    }


    function setSizePersonInfo() {
          addEventListener('resize', event => {

            let getSizeBlock = new GetSizeBlock() // получить текущие размеры блоков

            if (getSizeBlock.compositionW <= 1900) {
                resizePersonInfo(getSizeBlock.compositionW)

                // let change = Math.round((1500 * compositionSize) / 1900)
                // let changeW = Math.round((changeH * 1020) / 1500)
                //
                // document.getElementById('personImg').style.width = changeW + 'px'
                // document.getElementById('personImg').style.height = changeH + 'px'

                // document.getElementById('personInfo').style.left = 100 + 'px'
                // console.log('lala') // test
            }
        })
    }

    setSizePersonInfo()

    /* ======== END - #personInfo ==================================================================================== */
}