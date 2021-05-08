

// START-12 - Закрыть, открыть правую панель
//----------------------------------------------------------------------------------------------------------------------

let lava1 = () => {
    let tl = anime.timeline({
        easing: 'easeInOutQuad', duration: 2000, loop: true, direction: 'alternate'
    })
    tl.add({targets: '#white-3', r: 242})
        .add({targets: '#black-3', r: 242}, '-=2000')
}

let lava2 = () => {
    let tl = anime.timeline({
        easing: 'easeInOutQuad', duration: 2000, loop: true, direction: 'alternate'
    })
    tl.add({targets: '#white-2', r: 360})
        .add({targets: '#black-2', r: 360}, '-=2000')
}


let lava3 = () => {
    let tl = anime.timeline({
        easing: 'easeInOutQuad', duration: 2000, loop: true, direction: 'alternate'
    })
    tl.add({targets: '#white-1', r: 490})
        .add({targets: '#black-1', r: 490}, '-=2000')
}

lava1()
setTimeout(lava2, 600)
setTimeout(lava3, 1200)

// END-12
//----------------------------------------------------------------------------------------------------------------------