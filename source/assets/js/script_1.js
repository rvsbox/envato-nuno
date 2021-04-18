window.onload = function () {

    function GetSizeHumanInfo(){
        this.hmnNameW = document.getElementById('hmnName').offsetWidth // .human-name / #hmnName
        this.hmnSpecW = document.getElementById('hmnSpec').offsetWidth // .human-specialty / #hmnSpec
    }

    (function setSizeHumanInfo() {
        let getSHI = new GetSizeHumanInfo()

        if (getSHI.hmnNameW > getSHI.hmnSpecW) {
            document.getElementById('hmnSpec').style.width = getSHI.hmnNameW + 'px'
            document.getElementById('hmnAbout').style.width = getSHI.hmnNameW + 'px'
        } else {
            document.getElementById('hmnName').style.width = getSHI.hmnSpecW + 'px'
            document.getElementById('hmnAbout').style.width = getSHI.hmnSpecW + 'px'
        }
    })()



    // функция-конструктор. При создании нового объекта получаем необходимые размеры указанных блоков
    // Используется для компактности
    function GetSize() {
        // body
        // let windowW = document.body.offsetWidth
        // let windowH = document.body.offsetHeight
        this.windowW = document.body.offsetWidth
        this.windowH = document.body.offsetHeight

        // .header-base__sub / #headBasSub
        // let headerW = document.getElementById('headBasSub').offsetWidth
        // let headerH = document.getElementById('headBasSub').offsetHeight
        this.headerW = document.getElementById('headBasSub').offsetWidth
        this.headerH = document.getElementById('headBasSub').offsetHeight

        // .circles / #cir
        // let cirW = document.getElementById('cir').offsetWidth
        // let cirH = document.getElementById('cir').offsetHeight
        this.cirW = document.getElementById('cir').offsetWidth
        this.cirH = document.getElementById('cir').offsetHeight
    }


    // function setSizePosCircles() {
    //     let cirWidth = document.getElementById('cirSb').offsetWidth
    //     let cirHeight = document.getElementById('cirSb').offsetHeight
    //
    //
    //
    //
    //
    //     window.addEventListener('resize', event => {
    //         // let windowWidth = document.body.offsetWidth
    //         let windowHeight = document.body.offsetHeight
    //
    //         // let changeCirWidth = Math.round((920*windowHeight)/1060)
    //         let changeCirSize = Math.round((920*windowHeight)/1060)
    //
    //
    //         // let cirTop = document.getElementById('cir').offsetTop
    //
    //         let changeCirTop = Math.round((windowHeight - )
    //
    //         document.getElementById('cir').style.top = changeCirTop + 'px'
    //
    //
    //         console.log(windowHeight)
    //
    //         if (windowHeight <= 1060) {
    //             document.getElementById('cirSb').style.width = changeCirSize + 'px'
    //             document.getElementById('cirSb').style.height = changeCirSize + 'px'
    //
    //
    //             // console.log(cirTop)
    //             // let changeCirTop = Math.round((cirTop*windowHeight)/1060)
    //
    //
    //
    //
    //             console.log(changeCirTop)
    //         } else {
    //             document.getElementById('cirSb').style.width = 920 + 'px'
    //             document.getElementById('cirSb').style.height = 920 + 'px'
    //         }
    //
    //
    //         // console.log(changeCirTop)
    //         // console.log(windowWidth)
    //         // console.log(windowHeight)
    //
    //
    //     })
    // }





    // установить размеры блоков при изменении размера экрана
    // (function setSizeCircles() {
    //
    //     // события при изменении разрешения экрана
    //     window.addEventListener('resize', event => {
    //
    //         // получить объект с необходимыми размерами блоков
    //         // let getSC = new GetSize()
    //
    //         // позиционирование '.circles'
    //         // document.getElementById('cir').style.marginLeft = ((getSC.headerW - getSC.cirW) / 2) + 'px'
    //         // document.getElementById('cir').style.marginTop = ((getSC.headerH - getSC.cirH - 64) / 2) + 'px' // header-top - height: 64px
    //
    //
    //
    //         // if (windowHeight <= 1060) {
    //         //     document.getElementById('cirSb').style.width = changeCirSize + 'px'
    //         //     document.getElementById('cirSb').style.height = changeCirSize + 'px'
    //         //
    //         //
    //         //     // console.log(cirTop)
    //         //     // let changeCirTop = Math.round((cirTop*windowHeight)/1060)
    //         //
    //         //
    //         //     console.log(changeCirTop)
    //         // } else {
    //         //     document.getElementById('cirSb').style.width = 920 + 'px'
    //         //     document.getElementById('cirSb').style.height = 920 + 'px'
    //         // }
    //
    //
    //         // console.log(changeCirTop)
    //         // console.log(windowWidth)
    //         // console.log(windowHeight)
    //
    //     })
    // })()


        // корректировка для media запросов, тк media запросы не работают из-за установки стилей в js
        (function mediaRun() {
            window.addEventListener('resize', event => {

                let getSC = new GetSize()

                if (getSC.windowW > 1024) {
                    document.getElementById('panelBut').style.display = 'none'
                } else {
                    document.getElementById('panelBut').style.display = 'block'
                }
            })
        })()

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