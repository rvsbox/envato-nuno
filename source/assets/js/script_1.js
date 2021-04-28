// скрипт будет выполнен, когда вся страница, со всеми подключениями, будут загружены
window.onload = () => {

// START - .hyman-info
//----------------------------------------------------------------------------------------------------------------------

    // получить объект с размерами блоков для .human-info
    // function GetSizeForHumanInfo() {
    //     // .human-name / #hmnName
    //     this.hmnNameW = document.getElementById('hmnName').offsetWidth
    //     // .human-specialty / #hmnSpec
    //     this.hmnSpecW = document.getElementById('hmnSpec').offsetWidth
    // }
    //
    // (function setSizeForHumanInfo() {
    //     let getHI = new GetSizeForHumanInfo()
    //
    //     if (getHI.hmnNameW > getHI.hmnSpecW) {
    //         document.getElementById('hmnSpec').style.width = getHI.hmnNameW + 'px'
    //         document.getElementById('hmnAbout').style.width = getHI.hmnNameW + 'px'
    //     } else {
    //         document.getElementById('hmnName').style.width = getHI.hmnSpecW + 'px'
    //         document.getElementById('hmnAbout').style.width = getHI.hmnSpecW + 'px'
    //     }
    // })()

// END
//----------------------------------------------------------------------------------------------------------------------



// START
//----------------------------------------------------------------------------------------------------------------------

    // получить объект с размерами блоков для .circles
    // функция-конструктор. При создании нового объекта получаем необходимые размеры указанных блоков
    // Используется для компактности
    // function GetSizeForCirclesWidth() {
    //     // body
    //     this.windowW = document.body.offsetWidth
    //     this.windowH = document.body.offsetHeight
    //
    //     // .header-base__sub / #wrapHeadBas
    //     this.headerW = document.getElementById('wrapHeadBas').offsetWidth
    //     this.headerH = document.getElementById('wrapHeadBas').offsetHeight
    //
    //     // .circles / #cir
    //     this.cirW = document.getElementById('cir').offsetWidth
    //     this.cirH = document.getElementById('cir').offsetHeight
    // }
    //
    //
    // (function setSizeForCirclesWidth() {
    //
    //     addEventListener('resize', event => {
    //         let getC = new GetSizeForCirclesWidth()
    //
    //
    //         if (getC.headerW <= 1060) {
    //
    //             // горизонт
    //             let changeCir = Math.round((920 * getC.headerW) / 1060)
    //             document.getElementById('cir').style.width = changeCir + 'px'
    //             document.getElementById('cir').style.height = changeCir + 'px'
    //             // console.log(changeCir)
    //             // let changeCirTop = Math.round((cirTop*windowHeight)/1060)
    //
    //         } else {
    //
    //             document.getElementById('cir').style.width = 920 + 'px'
    //             document.getElementById('cir').style.height = 920 + 'px'
    //         }
    //
    //
    //         // вертикаль
    //         if (getC.windowH <= 1060) {
    //
    //             let changeCirH = Math.round((920*getC.windowH)/1060)
    //
    //             document.getElementById('cir').style.width = changeCirH + 'px'
    //             document.getElementById('cir').style.height = changeCirH + 'px'
    //
    //             // let changeCirTop = Math.round((cirTop*windowHeight)/1060)
    //
    //         } else {
    //             document.getElementById('cir').style.width = 920 + 'px'
    //             document.getElementById('cir').style.height = 920 + 'px'
    //         }
    //
    //     })
    // })()

// END
//----------------------------------------------------------------------------------------------------------------------



// START
//----------------------------------------------------------------------------------------------------------------------
    // 620px   - ширина картинки
    // 900px   - высота картинки
    // 1060px  - высота .header-base__sub
    // 740px   - ширина .header-abse__sub


    function GetSizeForHumanImg() {

        // .wrap-headbas / #wrapHeadBas
        this.headerW = document.getElementById('wrapHeadBas').offsetWidth
        this.headerH = document.getElementById('wrapHeadBas').offsetHeight

        // .human-img / #humImg
        this.huW = document.getElementById('humImg').offsetWidth
        this.huH = document.getElementById('humImg').offsetHeight
    }


    // a - текущая ширина .wrap-headbas
    function resizeHumImgWidth(a) {
        let changeW = Math.round((620 * a) / 740)
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



    // действия при изменении ширины и, или высоты экрана
    function setSizeForHumanImgResize() {

        addEventListener('resize', event => {

            let getHu = new GetSizeForHumanImg() // получить текущие размеры экрана

            if ((getHu.headerW <= 740) && (getHu.headerH <= 1060) && ((getHu.headerW - 100)) <= getHu.huW) {
                resizeHumImgWidth(getHu.headerW)
            }

            if ((getHu.headerW <= 740) && (getHu.headerH <= 1060) && ((getHu.headerH - 100)) <= getHu.huH) {
                resizeHumImgHeight(getHu.headerH)
            }

            if ((getHu.headerW <= 740) && (getHu.headerH >= 1060)) {
                resizeHumImgWidth(getHu.headerW)
            }

            if ((getHu.headerH <= 1060) && (getHu.headerW >= 740)) {
                resizeHumImgHeight(getHu.headerH)
            }

            // возвращаем к изначальным значениям
            if ((getHu.headerW >= 740) && (getHu.headerH >= 1060)) {
                document.getElementById('humImg').style.width = 620 + 'px'
                document.getElementById('humImg').style.height = 900 + 'px'
            }
        })
    }

    setSizeForHumanImgResize()



    function setSizeForHumanImg() {

        let getHu = new GetSizeForHumanImg()

        if ((getHu.headerW <= 740) && (getHu.headerH >= 1060)) {
            resizeHumImgWidth(getHu.headerW)
        }

        if ((getHu.headerW >= 740) && (getHu.headerH <= 1060)) {
            resizeHumImgHeight(getHu.headerH)
        }

        if ((getHu.headerW <= 740) && (getHu.headerH <= 1060) && ((getHu.headerW - 100)) <= getHu.huW) {
            resizeHumImgWidth(getHu.headerW)
        }

        if ((getHu.headerW <= 740) && (getHu.headerH <= 1060) && ((getHu.headerH - 100)) <= getHu.huH) {
            resizeHumImgHeight(getHu.headerH)
        }
    }

    setSizeForHumanImg()


// END
//----------------------------------------------------------------------------------------------------------------------



// START - Корректировка для media запросов, тк media запросы не работают из-за установки стилей в js
//----------------------------------------------------------------------------------------------------------------------

    function GetSizeForPanelRight() {
        // body
        this.windowW = document.body.offsetWidth
        this.windowH = document.body.offsetHeight
    }

    (function mediaRun() {
        window.addEventListener('resize', event => {

            let getPR = new GetSizeForPanelRight()

            if (getPR.windowW > 1024) {
                document.getElementById('panelBut').style.display = 'none'
                document.getElementById('panelRt').style.display = 'none'
            } else {
                document.getElementById('panelBut').style.display = 'block'
            }
        })
    })()

// END
//----------------------------------------------------------------------------------------------------------------------

}



// START - Закрыть, открыть правую панель
//----------------------------------------------------------------------------------------------------------------------

function openPanelRight() {
    document.getElementById('panelBut').style.display = 'none'
    document.getElementById('panelRt').style.display = 'block'
}


function closePanelRight() {
    document.getElementById('panelBut').style.display = 'block'
    document.getElementById('panelRt').style.display = 'none'
}

// END
//----------------------------------------------------------------------------------------------------------------------