window.onload = () => {

    // получить объект с размерами для .human-info
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



    // получить объект с размерами для .circles
    // функция-конструктор. При создании нового объекта получаем необходимые размеры указанных блоков
    // Используется для компактности
    function GetSizeCircles() {
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



    // корректировка для media запросов, тк media запросы не работают из-за установки стилей в js
    (function mediaRun() {
        window.addEventListener('resize', event => {

            let getSC = new GetSizeCircles()

            if (getSC.windowW > 1024) {
                document.getElementById('panelBut').style.display = 'none'
            } else {
                document.getElementById('panelBut').style.display = 'block'
            }
        })
    })()
}