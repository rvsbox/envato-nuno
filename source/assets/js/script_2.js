

// START-12 - Закрыть, открыть правую панель
//----------------------------------------------------------------------------------------------------------------------

// #cirLgWht  - circleLargeWhite
// #cirLgBk   - circleLargeBlack
// #cirMedWht - circleMediumWhite
// #cirMedBk  - circleMediumBlack
// #cirSmWht  - circleSmallWhite
// #cirSmBk   - circleSmallBlack

let layer_1 = () => {

    // tl - timeLine
    let tl = anime.timeline({
        easing: 'easeInOutQuad', duration: 2000, loop: true, direction: 'alternate'
    })
    tl.add({targets: '#cirSmWht', r: 100})
        .add({targets: '#cirSmBk', r: 100}, '-=2000')
}

let layer_2 = () => {
    let tl = anime.timeline({
        easing: 'easeInOutQuad', duration: 2000, loop: true, direction: 'alternate'
    })
    tl.add({targets: '#cirMedWht', r: 240})
        .add({targets: '#cirMedBk', r: 240}, '-=2000')
}


let layer_3 = () => {
    let tl = anime.timeline({
        easing: 'easeInOutQuad', duration: 2000, loop: true, direction: 'alternate'
    })
    tl.add({targets: '#cirLgWht', r: 380})
        .add({targets: '#cirLgBk', r: 380}, '-=2000')
}

// layer_1()
// setTimeout(layer_2, 600)
// setTimeout(layer_3, 1200)

function runLayers() {
    layer_1()
    setTimeout(layer_2, 600)
    setTimeout(layer_3, 1200)
}

runLayers()




// END-12
//----------------------------------------------------------------------------------------------------------------------