// скрипт будет выполнен, когда вся страница, со всеми подключениями будут загружены
window.onload = () => {

    /* ======== START - Get block sizes ============================================================================= */

    function GetSizeBlocks() {

        // .header__sub, #headerSub - wrapHeaderBase
        this.headerW = document.getElementById('headerSub').offsetWidth
        this.headerH = document.getElementById('headerSub').offsetHeight

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

        // .title-section__bg, #titleBg - titleBackground
        this.headingBaseW = document.getElementById('headingBase').offsetWidth
        this.headingBaseH = document.getElementById('headingBase').offsetHeight

        // .title-section__border, #headingBord - headingBorder
        this.headingBordW = document.getElementById('headingBord').offsetWidth
        this.headingBordH = document.getElementById('headingBord').offsetHeight
    }

    /* ======== END - Get block sizes =============================================================================== */



    /* ======== START - .human-info ================================================================================= */

    // размеры установленные в стилях
    // 500px    - width блока .human-info
    // 1060px   - width блока .wrap-headbas
    // 1000px   - height блока .wrap-headbas
    // 2.875em  - font-size блока .human-info__name
    // 120px    - bottom блока .human-info
    // 10px     - border-radius блока .human-info__name
    // 20px     - padding-left-right блока .human-info__name

    function defaultHumanInfo() {
        let getHmnInfo = new GetSizeBlocks()
        let posLeft = getHmnInfo.hmnInfoW

        document.getElementById('hmnInfo').style.width = 500 + 'px'
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

    // headerWH - headerWidthHeight
    function resizeHumanInfo(headerWH) {

        // вычисления для масштабирования блока .human-info__name
        // должно было быть для headerW - 1060, headerH - 1000, но чтобы не усложнять алгоритм оставляем как есть
        let changeWidth = Math.round((500 * headerWH) / 1060)
        let changePosBottom = Math.round((120 * headerWH) / 1060)
        let changeFontSz = (2.875 * headerWH) / 1060 // без округления, тк нужны сотые доли
        let changeBordRad = (10 * headerWH) / 1060
        let changePadding = (20 * headerWH) / 1060


        document.getElementById('hmnInfo').style.width = changeWidth + 'px'
        document.getElementById('hmnInfo').style.bottom = changePosBottom + 'px'
        document.getElementById('hmnName').style.fontSize = changeFontSz + 'em'
        document.getElementById('hmnName').style.borderRadius = changeBordRad + 'px'
        document.getElementById('hmnName').style.paddingLeft = changePadding + 'px'
        document.getElementById('hmnName').style.paddingRight = changePadding + 'px'
        document.getElementById('hmnAbout').style.display = 'none'
        document.getElementById('hmnSpec').style.display = 'none'

        // убираем вообще отступ 'left', соответственно встанет по середине, как указано в стилях
        document.getElementById('hmnInfo').style.left = 0 + 'px'
    }


    function setPositionForHumanInfo() {

        let getHmnInfo = new GetSizeBlocks()

        if ((getHmnInfo.headerW <= 1060) && (getHmnInfo.headerH >= 1000)) {
            resizeHumanInfo(getHmnInfo.headerW)
        }

        if ((getHmnInfo.headerW >= 1060) && (getHmnInfo.headerH <= 1000)) {
            resizeHumanInfo(getHmnInfo.headerH)
        }

        if ((getHmnInfo.headerW <= 1060) && (getHmnInfo.headerH <= 1000) && (getHmnInfo.headerW < getHmnInfo.headerH)) {
            resizeHumanInfo(getHmnInfo.headerW)
        }

        if ((getHmnInfo.headerW <= 1060) && (getHmnInfo.headerH <= 1000) && (getHmnInfo.headerW > getHmnInfo.headerH)) {
            resizeHumanInfo(getHmnInfo.headerH)
        }

        // -------- START - Возврат к начальным значениям --------------------------------------------------------------
        if ((getHmnInfo.headerW >= 1060) && (getHmnInfo.headerH >= 1000)) {
            defaultHumanInfo()
        }
        // -------- END - Возврат к начальным значениям ----------------------------------------------------------------

    }

    setPositionForHumanInfo()



    function setPositionForHumanInfoResize() {

        addEventListener('resize', event => {

            let getHmnInfo = new GetSizeBlocks()

            if ((getHmnInfo.headerW <= 1060) && (getHmnInfo.headerH >= 1000)) {
                resizeHumanInfo(getHmnInfo.headerW)
            }

            if ((getHmnInfo.headerW >= 1060) && (getHmnInfo.headerH <= 1000)) {
                resizeHumanInfo(getHmnInfo.headerH)
            }

            if ((getHmnInfo.headerW <= 1060) && (getHmnInfo.headerH <= 1000) && (getHmnInfo.headerW < getHmnInfo.headerH)) {
                resizeHumanInfo(getHmnInfo.headerW)
            }

            if ((getHmnInfo.headerW <= 1060) && (getHmnInfo.headerH <= 1000) && (getHmnInfo.headerW > getHmnInfo.headerH)) {
                resizeHumanInfo(getHmnInfo.headerH)
            }

            // -------- START - Возврат к начальным значениям ----------------------------------------------------------
            if ((getHmnInfo.headerW >= 1060) && (getHmnInfo.headerH >= 1000)) {
                defaultHumanInfo()
            }
            // -------- END - Возврат к начальным значениям ------------------------------------------------------------
        })
    }

    setPositionForHumanInfoResize()

    /* ======== END - .human-info =================================================================================== */



    /* ======== START - .circles ==================================================================================== */

    // размеры установленные в стилях
    // 140px   - bottom блока .circles
    // 920px   - width блока .circles
    // 920px   - height блока .circles
    // 1060px  - width блока .wrap-headbas
    // 1060px  - height блока .wrap-headbas


    // headerWH - headerWidthHeight
    function resizeCircles(headerWH) {
        let change = Math.round((920 * headerWH) / 1060)
        let changeBottom = Math.round((140 * headerWH) / 1060)

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

            // -------- START - Возврат к начальным значениям ----------------------------------------------------------
            if ((getCir.headerW >= 1060) && (getCir.headerH >= 1060)) {
                document.getElementById('cir').style.width = 920 + 'px'
                document.getElementById('cir').style.height = 920 + 'px'
                document.getElementById('cir').style.bottom = 140 + 'px'
            }
            // -------- END - Возврат к начальным значениям ------------------------------------------------------------
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

    /* ======== END - .circles ====================================================================================== */



    /* ======== START - .human-img ================================================================================== */

    // размеры установленные в стилях
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

            // -------- START - Возврат к начальным значениям ----------------------------------------------------------
            if ((getHu.headerW >= 1060) && (getHu.headerH >= 1060)) {
                document.getElementById('humImg').style.width = 620 + 'px'
                document.getElementById('humImg').style.height = 900 + 'px'
            }
            // -------- END - Возврат к начальным значениям ------------------------------------------------------------
        })
    }

    setSizeForHumanImgResize()


    // условия при первой загрузке сайта
    function setSizeForHumanImg() {

        let getHu = new GetSizeBlocks()

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

    }

    setSizeForHumanImg()

    /* ======== END - .human-img ==================================================================================== */



    /* ======== START - .nav-right-open, #navRightOpen ============================================================== */

    // Корректировка для media запросов, тк media запросы не работают из-за установки стилей в js
    function mediaRun() {
        window.addEventListener('resize', event => {

            // getPR - getPanelRight
            // let getPR = new GetSizeBlocks()

            if (window.innerWidth > 1024) {
                document.getElementById('navRightOpen').style.display = 'none'
                document.getElementById('navRt').style.display = 'none'
            } else {
                document.getElementById('navRightOpen').style.display = 'block'
            }
        })
    }

    mediaRun()

    /* ======== END -  - .nav-right-open, #navRightOpen ============================================================= */



    /* ======== START - .heading-blk ================================================================================ */

    function setSizeForTitleSectionBorder() {
        let getHeadingBlk = new GetSizeBlocks()

        if ((getHeadingBlk.headingBaseW > 0) && (getHeadingBlk.headingBaseH > 0)){

            document.getElementById('headingBord').style.width = getHeadingBlk.headingBaseW + 'px'
            document.getElementById('headingBord').style.height = getHeadingBlk.headingBaseH + 'px'

            // test
            // console.log('hi')
        }
    }

    setSizeForTitleSectionBorder()

    /* ======== END - .heading-blk ================================================================================== */
}