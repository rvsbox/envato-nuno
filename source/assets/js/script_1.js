// скрипт будет выполнен, когда вся страница, со всеми подключениями, будут загружены
window.onload = () => {

// START-11 - Получить размеры блоков
//----------------------------------------------------------------------------------------------------------------------
    function GetSizeBlocks() {

        // .wrap-headbas, #wrapHeadBas
        this.headerW = document.getElementById('wrapHeadBas').offsetWidth
        this.headerH = document.getElementById('wrapHeadBas').offsetHeight

        // .human-img, #humImg
        this.huW = document.getElementById('humImg').offsetWidth
        this.huH = document.getElementById('humImg').offsetHeight

        // .circles, #cir
        this.cirW = document.getElementById('cir').offsetWidth
        this.cirH = document.getElementById('cir').offsetHeight

        // .human-name, #hmnName
        this.hmnNameW = document.getElementById('hmnName').offsetWidth
        // .human-specialty, #hmnSpec
        this.hmnSpecW = document.getElementById('hmnSpec').offsetWidth

        // body
        this.bodyW = document.body.offsetWidth
        this.bodyH = document.body.offsetHeight
    }

// END-11
//----------------------------------------------------------------------------------------------------------------------


// START-12 - .human-info
//----------------------------------------------------------------------------------------------------------------------

    function setSizeForHumanInfo() {
        let getHmnInfo = new GetSizeBlocks()

        if (getHmnInfo.hmnNameW > getHmnInfo.hmnSpecW) {
            document.getElementById('hmnSpec').style.width = getHmnInfo.hmnNameW + 'px'
            document.getElementById('hmnAbout').style.width = getHmnInfo.hmnNameW + 'px'
        } else {
            document.getElementById('hmnName').style.width = getHmnInfo.hmnSpecW + 'px'
            document.getElementById('hmnAbout').style.width = getHmnInfo.hmnSpecW + 'px'
        }
    }

    setSizeForHumanInfo()


    function setPositionForHumanInfo() {

        addEventListener('resize', event => {
            let hmnInfoW
            let getHmnInfo = new GetSizeBlocks()

            // больший блок будет определять ширину .human-info
            if (getHmnInfo.hmnNameW > getHmnInfo.hmnSpecW) {
                hmnInfoW = getHmnInfo.hmnNameW
            } else {
                hmnInfoW = getHmnInfo.hmnSpecW
            }

            let posCenter = (getHmnInfo.bodyW / 2) - (hmnInfoW / 2)
            let posLeft = posCenter - (hmnInfoW / 2)


            document.getElementById('hmnInfo').style.left = posLeft + 'px'

            // test
            // console.log(getHmnInfo.bodyH)
            console.log(posCenter)
        })
    }

    setPositionForHumanInfo()

// END-12
//----------------------------------------------------------------------------------------------------------------------


// START-20 - .circles
//----------------------------------------------------------------------------------------------------------------------
    // 190px   - нижний отступ .circles
    // 920px   - ширина .circles
    // 920px   - высота .circles
    // 1060px  - высота .wrap-headbas
    // 1060px   - ширина .wrap-headbas

    function resizeCircles(a) {
        let change = Math.round((900 * a) / 1060)
        let changeBottom = Math.round((190 * a) / 1060)

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

            // START-27 - Возвращаем к изначальным значениям
            //----------------------------------------------------------------------------------------------------------
            if ((getCir.headerW >= 1060) && (getCir.headerH >= 1060)) {
                document.getElementById('cir').style.width = 900 + 'px'
                document.getElementById('cir').style.height = 900 + 'px'
                document.getElementById('cir').style.bottom = 190 + 'px'
            }
            // END-27 - Возвращаем к изначальным значениям
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
// END-20
//----------------------------------------------------------------------------------------------------------------------


// START-55 - .human-img
//----------------------------------------------------------------------------------------------------------------------
    // 620px   - ширина .human-img
    // 900px   - высота .human-img
    // 1060px  - высота .wrap-headbas
    // 1060px   - ширина .wrap-headbas


    // a - текущая ширина .wrap-headbas
    function resizeHumImgWidth(a) {
        let changeW = Math.round((620 * a) / 1060)
        let changeH = Math.round((changeW * 900) / 620)

        document.getElementById('humImg').style.width = changeW + 'px'
        document.getElementById('humImg').style.height = changeH + 'px'
    }


    // b - текущая высота .wrap-headbas
    function resizeHumImgHeight(b) {
        let changeH = Math.round((900 * b) / 1060)
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

            // START-23 - Возвращаем к изначальным значениям
            //----------------------------------------------------------------------------------------------------------
            if ((getHu.headerW >= 1060) && (getHu.headerH >= 1060)) {
                document.getElementById('humImg').style.width = 620 + 'px'
                document.getElementById('humImg').style.height = 900 + 'px'
            }
            // END-23
            //----------------------------------------------------------------------------------------------------------

            // test
            // console.log(getHu.headerW / getHu.headerH)

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

        if ((getHu.headerW <= 1060) && (getHu.headerH <= 1060) && (getHu.headerW <= getHu.headerH)) {
            resizeHumImgWidth(getHu.headerW)
        }

        if ((getHu.headerW <= 1060) && (getHu.headerH <= 1060) && (getHu.headerW >= getHu.headerH)) {
            resizeHumImgHeight(getHu.headerH)
        }

        // if ((getHu.headerW <= 1060) && (getHu.headerH <= 1060) && (abc >= 0.82) && (abc <= 1)) {
        //     resizeHumImgHeight(getHu.headerH)
        // }
    }

    setSizeForHumanImg()
// END-55
//----------------------------------------------------------------------------------------------------------------------


// START-98 - Корректировка для media запросов, тк media запросы не работают из-за установки стилей в js
//----------------------------------------------------------------------------------------------------------------------
    function mediaRun() {
        window.addEventListener('resize', event => {

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
// END-98
//----------------------------------------------------------------------------------------------------------------------

}


// START-24 - Закрыть, открыть правую панель
//----------------------------------------------------------------------------------------------------------------------
function openPanelRight() {
    document.getElementById('panelBut').style.display = 'none'
    document.getElementById('panelRt').style.display = 'block'
}


function closePanelRight() {
    document.getElementById('panelBut').style.display = 'block'
    document.getElementById('panelRt').style.display = 'none'
}

// END-24
//----------------------------------------------------------------------------------------------------------------------