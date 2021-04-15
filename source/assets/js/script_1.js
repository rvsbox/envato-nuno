window.onload = function () {

    function setWidthHumanInfo(){
        const nameWidth = document.getElementById('hmnName').offsetWidth
        const specWidth = document.getElementById('hmnSpec').offsetWidth

        // console.log(nameWidth)
        // console.log(specWidth)

        if (nameWidth > specWidth) {
            document.getElementById('hmnSpec').style.width = nameWidth + 'px'
            document.getElementById('hmnAbout').style.width = nameWidth + 'px'
        } else {
            document.getElementById('hmnName').style.width = specWidth + 'px'
            document.getElementById('hmnAbout').style.width = specWidth + 'px'
        }
    }

    setWidthHumanInfo()



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

    function setSizePosCircles() {
        let bodyW = document.body.offsetWidth
        let bodyH = document.body.offsetHeight

        let cirW = document.getElementById('cir').offsetWidth
        let cirH = document.getElementById('cir').offsetHeight

        document.getElementById('cir').style.marginLeft = ((bodyW - cirW)/2) + 'px'
        document.getElementById('cir').style.marginTop = ((bodyH - cirH)/2) + 'px'

        // console.log(cirW, cirH)

    }

    setSizePosCircles()

}