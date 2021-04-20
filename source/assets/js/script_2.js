window.onload = () => {

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

        // console.log('lal')
    })()


}