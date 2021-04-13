window.onload = function () {

    function setWidthHumanInfo(){
        const nameWidth = document.getElementById('hmnName').offsetWidth
        const specWidth = document.getElementById('hmnSpec').offsetWidth

        // console.log(nameWidth)
        // console.log(specWidth)

        if (nameWidth > specWidth) {
            document.getElementById('hmnSpec').style.width = nameWidth + "px"
            document.getElementById('hmnAbout').style.width = nameWidth + "px"
        } else {
            document.getElementById('hmnName').style.width = specWidth + "px"
            document.getElementById('hmnAbout').style.width = specWidth + "px"
        }
    }

    setWidthHumanInfo()



    function setSizeCircles() {
        const circlesWidth = document.getElementById('crlSb').offsetWidth
        const circlesHeight = document.getElementById('crlSb').offsetHeight





        window.addEventListener('resize', event => {
            const bodyWidth = document.body.offsetWidth
            const bodyHeight = document.body.offsetHeight

            console.log(bodyWidth)
            console.log(bodyHeight)


        })


    }

    setSizeCircles()

}