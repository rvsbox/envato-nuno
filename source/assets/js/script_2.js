

// START-12 - Закрыть, открыть правую панель
//----------------------------------------------------------------------------------------------------------------------

// cirLgWht  - circleLargeWhite
// cirLgBk   - circleLargeBlack
// cirMedWht - circleMediumWhite
// cirMedBk  - circleMediumBlack
// cirSmWht  - circleSmallWhite
// cirSmBk   - circleSmallBlack

let lava_1 = () => {

    // tl - timeLine
    let tl = anime.timeline({
        easing: 'easeInOutQuad', duration: 2000, loop: true, direction: 'alternate'
    })
    tl.add({targets: '#white-3', r: 242})
        .add({targets: '#black-3', r: 242}, '-=2000')
}

let lava_2 = () => {
    let tl = anime.timeline({
        easing: 'easeInOutQuad', duration: 2000, loop: true, direction: 'alternate'
    })
    tl.add({targets: '#white-2', r: 360})
        .add({targets: '#black-2', r: 360}, '-=2000')
}


let lava_3 = () => {
    let tl = anime.timeline({
        easing: 'easeInOutQuad', duration: 2000, loop: true, direction: 'alternate'
    })
    tl.add({targets: '#white-1', r: 490})
        .add({targets: '#black-1', r: 490}, '-=2000')
}

lava_1()
setTimeout(lava_2, 600)
setTimeout(lava_3, 1200)

// END-12
//----------------------------------------------------------------------------------------------------------------------