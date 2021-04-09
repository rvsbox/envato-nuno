window.onload = function () {

    // START HEADER
    function setWidthHuman(){
        const nameWidth = document.getElementById('hmnName').offsetWidth
        const specWidth = document.getElementById('hmnSpec').offsetWidth

        console.log(nameWidth)
        console.log(specWidth)

        if (nameWidth > specWidth) {
            document.getElementById('hmnSpec').style.width = nameWidth + "px"
            document.getElementById('hmnAbout').style.width = nameWidth + "px"
        } else {
            document.getElementById('hmnName').style.width = specWidth + "px"
            document.getElementById('hmnAbout').style.width = specWidth + "px"
        }
    }

    setWidthHuman()
    // END HEADER
}