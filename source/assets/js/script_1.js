window.onload = function () {

    // START HEADER
    function setWidthHuman(){
        const nameWidth = document.getElementById('humanName').offsetWidth
        const specWidth = document.getElementById('humanSpecialty').offsetWidth

        console.log(nameWidth)
        console.log(specWidth)

        if (nameWidth > specWidth) {
            document.getElementById('humanSpecialty').style.width = nameWidth + "px"
            document.getElementById('humanAbout').style.width = nameWidth + "px"
        } else {
            document.getElementById('humanName').style.width = specWidth + "px"
            document.getElementById('humanAbout').style.width = specWidth + "px"
        }
    }

    setWidthHuman()
    // END HEADER
}