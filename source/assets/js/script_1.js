window.onload = () => {

// START
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
    //     // .header-base__sub / #headBasSub
    //     this.headerW = document.getElementById('headBasSub').offsetWidth
    //     this.headerH = document.getElementById('headBasSub').offsetHeight
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

    function GetSizeForHumanImg() {
        // .header-base__sub / #headBasSub
        this.headerW = document.getElementById('headBasSub').offsetWidth
        this.headerH = document.getElementById('headBasSub').offsetHeight
    }

    (function setSizeForHumanImg() {

        addEventListener('resize', event => {
            let getHu = new GetSizeForHumanImg()

            if (getHu.headerH <= 1060) {

                console.log(getHu.headerH)

                document.getElementById('humImg').style.width = 500 + 'px'
                document.getElementById('humImg').style.height = 500 + 'px'

                // let changeHuWidthH = Math.round((620 * getHu.headerH) / 700)
                // let changeHuHeightH = Math.round((1000 * getHu.headerH) / 700)

                // document.getElementById('humImg').style.width = changeHuWidthH + 'px'
                // document.getElementById('humImg').style.height = changeHuHeightH + 'px'
            }


            // if (getHu.headerW <= 700) {
            //
            //     let changeHuWidth = Math.round((620 * getHu.headerW) / 700)
            //     let changeHuHeight = Math.round((1000 * getHu.headerW) / 700)
            //
            //     document.getElementById('humImg').style.width = changeHuWidth + 'px'
            //     document.getElementById('humImg').style.height = changeHuHeight + 'px'
            //
            //
            // } else {
            //
            //     document.getElementById('humImg').style.width = 620 + 'px'
            //     document.getElementById('humImg').style.height = 900 + 'px'
            // }


            // вертикаль
            // if (getC.windowH <= 1060) {
            //
            //     let changeCirH = Math.round((920*getC.windowH)/1060)
            //
            //     document.getElementById('cir').style.width = changeCirH + 'px'
            //     document.getElementById('cir').style.height = changeCirH + 'px'
            //
            //     // let changeCirTop = Math.round((cirTop*windowHeight)/1060)
            //
            // } else {
            //     document.getElementById('cir').style.width = 920 + 'px'
            //     document.getElementById('cir').style.height = 920 + 'px'
            // }

        })
    })()

// END
//----------------------------------------------------------------------------------------------------------------------



// START
//----------------------------------------------------------------------------------------------------------------------

    function GetSizeForPanelRight() {
        // body
        this.windowW = document.body.offsetWidth
        this.windowH = document.body.offsetHeight
    }

    // корректировка для media запросов, тк media запросы не работают из-за установки стилей в js
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


// START Закрыть, открыть правую панель
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