// скрипт будет выполнен, когда вся страница, со всеми подключениями, будут загружены
window.onload = () => {

// START-01 - Получить размеры блоков
//----------------------------------------------------------------------------------------------------------------------
    function GetSizeBlocks() {

        // .wrap-headbas, #wrapHeadBas - wrapHeaderBase
        this.headerW = document.getElementById('wrapHeadBas').offsetWidth
        this.headerH = document.getElementById('wrapHeadBas').offsetHeight

        // .human-img, #humImg - humanImage
        this.huW = document.getElementById('humImg').offsetWidth
        this.huH = document.getElementById('humImg').offsetHeight

        // .circles, #cir - circles
        this.cirW = document.getElementById('cir').offsetWidth
        this.cirH = document.getElementById('cir').offsetHeight

        // .human-info, #hmnInfo - humanInfo
        this.hmnInfoW = document.getElementById('hmnInfo').offsetWidth
        // .human-info__name, #hmnName - humanName
        this.hmnNameW = document.getElementById('hmnName').offsetWidth
        // .human-info__specialty, #hmnSpec - humanSpeciality
        this.hmnSpecW = document.getElementById('hmnSpec').offsetWidth

        // body, bodyW - bodyWidth, bodyH - bodyHeight
        this.bodyW = document.body.offsetWidth
        this.bodyH = document.body.offsetHeight
    }

// END-01
//----------------------------------------------------------------------------------------------------------------------


// START-02 - .human-info
//----------------------------------------------------------------------------------------------------------------------

    // размеры установленные в стилях
    // 500px    - width блока .human-info
    // 1060px   - height блока .wrap-headbas
    // 1060px   - width блока .wrap-headbas
    // 2.875em  - font-size блока .human-info__name
    // 120px    - bottom блока .human-info
    // 10px     - border-radius блока .human-info__name
    // 20px     - padding-left-right блока .human-info__name

    function defaultHumanInfo() {
        let getHmnInfo = new GetSizeBlocks()
        let posLeft = getHmnInfo.hmnInfoW

        document.getElementById('hmnInfo').style.left = '-' + posLeft + 'px'
        document.getElementById('hmnInfo').style.bottom = 190 + 'px'
        document.getElementById('hmnName').style.fontSize = 2.875 + 'em'
        document.getElementById('hmnName').style.borderTopLeftRadius = 10 + 'px'
        document.getElementById('hmnName').style.borderTopRightRadius = 10 + 'px'
        document.getElementById('hmnName').style.borderBottomLeftRadius = 0 + 'px'
        document.getElementById('hmnName').style.borderBottomRightRadius = 0 + 'px'
        document.getElementById('hmnAbout').style.display = 'inline-block'
        document.getElementById('hmnSpec').style.display = 'inline-block'
    }

    // bodyWH - bodyWidthHeight
    function resizeHumanInfo(bodyWH) {

        // вычисления для масштабирования блока .human-info__name
        let changeWidth = Math.round((500 * bodyWH) / 1060)
        let changePosBottom = Math.round((120 * bodyWH) / 1060)
        let changeFontSz = (2.875 * bodyWH) / 1060 // без округления, тк нужны сотые доли
        let changeBordRad = (10 * bodyWH) / 1060
        let changePadding = (20 * bodyWH) / 1060


        document.getElementById('hmnInfo').style.width = changeWidth + 'px'
        document.getElementById('hmnInfo').style.bottom = changePosBottom + 'px'
        document.getElementById('hmnName').style.fontSize = changeFontSz + 'em'
        document.getElementById('hmnName').style.borderRadius = changeBordRad + 'px'
        document.getElementById('hmnName').style.paddingLeft = changePadding + 'px'
        document.getElementById('hmnName').style.paddingRight = changePadding + 'px'
        document.getElementById('hmnAbout').style.display = 'none'
        document.getElementById('hmnSpec').style.display = 'none'

        // вычисление для центрирования блока .human-info
        let getHmnInfoUpdate = new GetSizeBlocks()
        let posCenter = getHmnInfoUpdate.hmnInfoW

        // убираем вообще отступ 'left', соответственно встанет по середине, как указано в стилях
        document.getElementById('hmnInfo').style.left = 0 + 'px'
    }


    function setPositionForHumanInfo() {

        let getHmnInfo = new GetSizeBlocks()

        if ((getHmnInfo.headerW <= 1060) && (getHmnInfo.headerH >= 1060)) {
            resizeHumanInfo(getHmnInfo.bodyW)
        }

        if ((getHmnInfo.headerW >= 1060) && (getHmnInfo.headerH <= 1060)) {
            resizeHumanInfo(getHmnInfo.bodyH)
        }

        if ((getHmnInfo.headerW <= 1060) && (getHmnInfo.headerH <= 1060) && (getHmnInfo.headerW < getHmnInfo.headerH)) {
            resizeHumanInfo(getHmnInfo.bodyW)
        }

        if ((getHmnInfo.headerW <= 1060) && (getHmnInfo.headerH <= 1060) && (getHmnInfo.headerW > getHmnInfo.headerH)) {
            resizeHumanInfo(getHmnInfo.bodyH)
        }

        // START-11 - Возврат к начальным значениям
        //----------------------------------------------------------------------------------------------------------
        if ((getHmnInfo.headerW >= 1060) && (getHmnInfo.headerH >= 1060)) {
            defaultHumanInfo()
        }
        // END-11
        //----------------------------------------------------------------------------------------------------------
    }

    setPositionForHumanInfo()



    function setPositionForHumanInfoResize() {

        addEventListener('resize', event => {

            let getHmnInfo = new GetSizeBlocks()

            if ((getHmnInfo.headerW <= 1060) && (getHmnInfo.headerH >= 1060)) {
                resizeHumanInfo(getHmnInfo.bodyW)
            }

            if ((getHmnInfo.headerW >= 1060) && (getHmnInfo.headerH <= 1060)) {
                resizeHumanInfo(getHmnInfo.bodyH)
            }

            if ((getHmnInfo.headerW <= 1060) && (getHmnInfo.headerH <= 1060) && (getHmnInfo.headerW < getHmnInfo.headerH)) {
                resizeHumanInfo(getHmnInfo.bodyW)
            }

            if ((getHmnInfo.headerW <= 1060) && (getHmnInfo.headerH <= 1060) && (getHmnInfo.headerW > getHmnInfo.headerH)) {
                resizeHumanInfo(getHmnInfo.bodyH)
            }

            // START-03 - Возврат к начальным значениям
            //----------------------------------------------------------------------------------------------------------
            if ((getHmnInfo.headerW >= 1060) && (getHmnInfo.headerH >= 1060)) {
                defaultHumanInfo()
            }
            // END-03
            //----------------------------------------------------------------------------------------------------------
        })
    }

    setPositionForHumanInfoResize()

// END-02
//----------------------------------------------------------------------------------------------------------------------


// START-04 - .circles
//----------------------------------------------------------------------------------------------------------------------
    // 190px   - bottom блока .circles
    // 920px   - width блока .circles
    // 920px   - height блока .circles
    // 1060px  - width блока .wrap-headbas
    // 1060px  - height блока .wrap-headbas


    // headerWH - headerWidthHeight
    function resizeCircles(headerWH) {
        let change = Math.round((900 * headerWH) / 1060)
        let changeBottom = Math.round((190 * headerWH) / 1060)

        document.getElementById('cir').style.width = change + 'px'
        document.getElementById('cir').style.height = change + 'px'
        document.getElementById('cir').style.bottom = changeBottom + 'px'
    }


    function setSizeForCirclesResize() {

        addEventListener('resize', event => {

            let getCir = new GetSizeBlocks()

            if ((getCir.headerW <= 1060) && (getCir.headerH >= 1060)) {
                resizeCircles(getCir.headerW)
            }

            if ((getCir.headerW >= 1060) && (getCir.headerH <= 1060)) {
                resizeCircles(getCir.headerH)
            }

            if ((getCir.headerW <= 1060) && (getCir.headerH <= 1060) && (getCir.headerW < getCir.headerH)) {
                resizeCircles(getCir.headerW)
            }

            if ((getCir.headerW <= 1060) && (getCir.headerH <= 1060) && (getCir.headerW > getCir.headerH)) {
                resizeCircles(getCir.headerH)
            }

            // START-05 - Возврат к начальным значениям
            //----------------------------------------------------------------------------------------------------------
            if ((getCir.headerW >= 1060) && (getCir.headerH >= 1060)) {
                document.getElementById('cir').style.width = 900 + 'px'
                document.getElementById('cir').style.height = 900 + 'px'
                document.getElementById('cir').style.bottom = 190 + 'px'
            }
            // END-05
            //----------------------------------------------------------------------------------------------------------
        })
    }

    setSizeForCirclesResize()


    function setSizeForCircles() {

        let getCir = new GetSizeBlocks()

        if ((getCir.headerW <= 1060) && (getCir.headerH >= 1060)) {
            resizeCircles(getCir.headerW)
        }

        if ((getCir.headerW >= 1060) && (getCir.headerH <= 1060)) {
            resizeCircles(getCir.headerH)
        }

        if ((getCir.headerW <= 1060) && (getCir.headerH <= 1060) && (getCir.headerW < getCir.headerH)) {
            resizeCircles(getCir.headerW)
        }

        if ((getCir.headerW <= 1060) && (getCir.headerH <= 1060) && (getCir.headerW > getCir.headerH)) {
            resizeCircles(getCir.headerH)
        }
    }

    setSizeForCircles()
// END-04
//----------------------------------------------------------------------------------------------------------------------


// START-06 - .human-img
//----------------------------------------------------------------------------------------------------------------------
    // 620px   - width блока .human-img
    // 900px   - height блока .human-img
    // 1060px  - width блока .wrap-headbas
    // 1060px  - height блока .wrap-headbas


    // headerW - текущая ширина .wrap-headbas
    function resizeHumImgWidth(headerW) {
        let changeW = Math.round((620 * headerW) / 1060)
        let changeH = Math.round((changeW * 900) / 620)

        document.getElementById('humImg').style.width = changeW + 'px'
        document.getElementById('humImg').style.height = changeH + 'px'
    }


    // headerH - текущая высота .wrap-headbas
    function resizeHumImgHeight(headerH) {
        let changeH = Math.round((900 * headerH) / 1060)
        let changeW = Math.round((changeH * 620) / 900)

        document.getElementById('humImg').style.width = changeW + 'px'
        document.getElementById('humImg').style.height = changeH + 'px'
    }


    // условия при изменении ширины и, или высоты экрана
    function setSizeForHumanImgResize() {

        addEventListener('resize', event => {

            let getHu = new GetSizeBlocks() // получить текущие размеры экрана
            // let abc = getHu.headerW / getHu.headerH

            if ((getHu.headerW <= 1060) && (getHu.headerH >= 1060)) {
                resizeHumImgWidth(getHu.headerW)
            }

            if ((getHu.headerH <= 1060) && (getHu.headerW >= 1060)) {
                resizeHumImgHeight(getHu.headerH)
            }

            if ((getHu.headerW <= 1060) && (getHu.headerH <= 1060) && (getHu.headerW < getHu.headerH)) {
                resizeHumImgWidth(getHu.headerW)
            }

            if ((getHu.headerW <= 1060) && (getHu.headerH <= 1060) && (getHu.headerW > getHu.headerH)) {
                resizeHumImgHeight(getHu.headerH)
            }

            // if ((getHu.headerW <= 1060) && (getHu.headerH <= 1060) && (abc >= 0.82) && (abc <= 1)) {
            //     resizeHumImgHeight(getHu.headerH)
            // }

            // START-07 - Возврат к начальным значениям
            //----------------------------------------------------------------------------------------------------------
            if ((getHu.headerW >= 1060) && (getHu.headerH >= 1060)) {
                document.getElementById('humImg').style.width = 620 + 'px'
                document.getElementById('humImg').style.height = 900 + 'px'
            }
            // END-07
            //----------------------------------------------------------------------------------------------------------
        })
    }

    setSizeForHumanImgResize()


    // условия при первой загрузке сайта
    function setSizeForHumanImg() {

        let getHu = new GetSizeBlocks()
        // let abc = getHu.headerW / getHu.headerH

        if ((getHu.headerW <= 1060) && (getHu.headerH >= 1060)) {
            resizeHumImgWidth(getHu.headerW)
        }

        if ((getHu.headerW >= 1060) && (getHu.headerH <= 1060)) {
            resizeHumImgHeight(getHu.headerH)
        }

        if ((getHu.headerW <= 1060) && (getHu.headerH <= 1060) && (getHu.headerW < getHu.headerH)) {
            resizeHumImgWidth(getHu.headerW)
        }

        if ((getHu.headerW <= 1060) && (getHu.headerH <= 1060) && (getHu.headerW > getHu.headerH)) {
            resizeHumImgHeight(getHu.headerH)
        }

        // if ((getHu.headerW <= 1060) && (getHu.headerH <= 1060) && (abc >= 0.82) && (abc <= 1)) {
        //     resizeHumImgHeight(getHu.headerH)
        // }
    }

    setSizeForHumanImg()
// END-06
//----------------------------------------------------------------------------------------------------------------------


// START-08 - Корректировка для media запросов, тк media запросы не работают из-за установки стилей в js
//----------------------------------------------------------------------------------------------------------------------

    function mediaRun() {
        window.addEventListener('resize', event => {

            // getPR - getPanelRight
            let getPR = new GetSizeBlocks()

            if (getPR.bodyW > 1024) {
                document.getElementById('panelBut').style.display = 'none'
                document.getElementById('panelRt').style.display = 'none'
            } else {
                document.getElementById('panelBut').style.display = 'block'
            }
        })
    }

    mediaRun()
// END-08
//----------------------------------------------------------------------------------------------------------------------

}


// START-09 - Закрыть, открыть правую панель
//----------------------------------------------------------------------------------------------------------------------
function openPanelRight() {
    document.getElementById('panelBut').style.display = 'none'
    document.getElementById('panelRt').style.display = 'block'
}


function closePanelRight() {
    document.getElementById('panelBut').style.display = 'block'
    document.getElementById('panelRt').style.display = 'none'
}

// END-09
//----------------------------------------------------------------------------------------------------------------------