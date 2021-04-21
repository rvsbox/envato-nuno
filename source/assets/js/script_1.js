window.onload = () => {

// START
//----------------------------------------------------------------------------------------------------------------------

    // получить объект с размерами блоков для .human-info
    function GetSizeForHumanInfo(){
        // .human-name / #hmnName
        this.hmnNameW = document.getElementById('hmnName').offsetWidth
        // .human-specialty / #hmnSpec
        this.hmnSpecW = document.getElementById('hmnSpec').offsetWidth
    }

    (function setSizeForHumanInfo() {
        let getHI = new GetSizeForHumanInfo()

        if (getHI.hmnNameW > getHI.hmnSpecW) {
            document.getElementById('hmnSpec').style.width = getHI.hmnNameW + 'px'
            document.getElementById('hmnAbout').style.width = getHI.hmnNameW + 'px'
        } else {
            document.getElementById('hmnName').style.width = getHI.hmnSpecW + 'px'
            document.getElementById('hmnAbout').style.width = getHI.hmnSpecW + 'px'
        }
    })()

// END
//----------------------------------------------------------------------------------------------------------------------



// START
//----------------------------------------------------------------------------------------------------------------------

    // получить объект с размерами блоков для .circles
    // функция-конструктор. При создании нового объекта получаем необходимые размеры указанных блоков
    // Используется для компактности
    function GetSizeForCircles() {
        // body
        this.windowW = document.body.offsetWidth
        this.windowH = document.body.offsetHeight

        // .header-base__sub / #headBasSub
        this.headerW = document.getElementById('headBasSub').offsetWidth
        this.headerH = document.getElementById('headBasSub').offsetHeight

        // .circles / #cir
        this.cirW = document.getElementById('cir').offsetWidth
        this.cirH = document.getElementById('cir').offsetHeight
    }


    (function setSizeForCircles() {

        addEventListener('resize', event => {
            let getC = new GetSizeForCircles()

            // горизонт
            if (getC.windowW <= 1060) {

                let changeCirW = Math.round((920*getC.windowW)/1060)

                document.getElementById('cir').style.width = changeCirW + 'px'
                document.getElementById('cir').style.height = changeCirW + 'px'

                console.log(changeCir)

                // let changeCirTop = Math.round((cirTop*windowHeight)/1060)

            } else {
                document.getElementById('cir').style.width = 920 + 'px'
                document.getElementById('cir').style.height = 920 + 'px'
            }


            // вертикаль
            if (getC.windowH <= 1060) {

                let changeCirH = Math.round((920*getC.windowH)/1060)

                document.getElementById('cir').style.width = changeCirH + 'px'
                document.getElementById('cir').style.height = changeCirH + 'px'

                // let changeCirTop = Math.round((cirTop*windowHeight)/1060)

            } else {
                document.getElementById('cir').style.width = 920 + 'px'
                document.getElementById('cir').style.height = 920 + 'px'
            }

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



function closePanelRight(){
    document.getElementById('panelBut').style.display = 'block'
    document.getElementById('panelRt').style.display = 'none'
}

// END
//----------------------------------------------------------------------------------------------------------------------