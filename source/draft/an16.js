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



const start = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

start(0).then(layer_1)
start(600).then(layer_2)
start(1200).then(layer_3)