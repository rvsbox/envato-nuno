// скрипт будет выполнен, когда вся страница, со всеми подключениями будут загружены
window.onload = () => {

    /* ======== START - Get block sizes ================================================================================= */
    function GetSizeBlock() {

        // #composition
        this.compositionW = document.getElementById('composition').offsetWidth
        this.compositionH = document.getElementById('composition').offsetHeight

        // #circle
        this.circleW = document.getElementById('circle').offsetWidth
        this.circleH = document.getElementById('circle').offsetHeight

        // #personImg
        // this.personImgW = document.getElementById('personImg').offsetWidth
        // this.personImgH = document.getElementById('personImg').offsetHeight

    }

    // GetSizeBlock() // test

    // console.log(compositionW, compositionH) // test
    // console.log(circleW, circleH) // test
    // console.log(personImgW, personImgH) // test
    /* ======== END - Get block sizes =================================================================================== */


    // размеры установленные в стилях, размеры блоков при 4k разрешении
    // ?????????????140px   - bottom блока .circles
    // 1400px   - width блока .circle
    // 1400px   - height блока .circle
    // 3600px  - width блока #composition 
    // 1900px  - height блока #composition


    function resizeCircle(compositionSize) {
        let change = Math.round((1400 * compositionSize) / 1900)
        // let changeBottom = Math.round((140 * compositionSize) / 1900)

        document.getElementById('circle').style.width = change + 'px'
        document.getElementById('circle').style.height = change + 'px'
    }

    function setSizeCircle() {

        addEventListener('resize', event => {

            let getSizeBlock = new GetSizeBlock()

            console.log(getSizeBlock.compositionH) // test

            if ((getSizeBlock.compositionW <= 1900) && (getSizeBlock.compositionH >= 1900)) {
                resizeCircle(getSizeBlock.compositionW)
            }

            if ((getSizeBlock.compositionW >= 1900) && (getSizeBlock.compositionH <= 1900)) {
                resizeCircle(getSizeBlock.compositionH)
            }

            if ((getSizeBlock.compositionW <= 1900) && (getSizeBlock.compositionH <= 1900) && (getSizeBlock.compositionW < getSizeBlock.compositionH)) {
                resizeCircle(getSizeBlock.compositionW)
            }

            if ((getSizeBlock.compositionW <= 1900) && (getSizeBlock.compositionH <= 1900) && (getSizeBlock.compositionW > getSizeBlock.compositionH)) {
                resizeCircle(getSizeBlock.compositionH)
            }
        })
    }

    setSizeCircle()


}