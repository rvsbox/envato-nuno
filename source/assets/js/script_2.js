/* ======== START - .nav-right ==================================================================================== */

function openNavRight() {
    document.getElementById('navRightOpen').style.display = 'none'
    document.getElementById('navRt').style.display = 'block'
}


function closeNavRight() {
    document.getElementById('navRightOpen').style.display = 'block'
    document.getElementById('navRt').style.display = 'none'
}

/* ======== END - .nav-right ====================================================================================== */


/* ======== START - .circles, #cir ================================================================================== */

// #cirLgWht  - circleLargeWhite
// #cirLgBk   - circleLargeBlack
// #cirMedWht - circleMediumWhite
// #cirMedBk  - circleMediumBlack
// #cirSmWht  - circleSmallWhite
// #cirSmBk   - circleSmallBlack

let layer_1 = () => {

    // tl - timeLine
    let tl = anime.timeline({
        easing: 'easeInOutQuad', duration: 3000, loop: true, direction: 'alternate'
    })
    tl.add({targets: '#cirSmWht', r: 170})
        .add({targets: '#cirSmBk', r: 170}, '-=3000')
}


let layer_2 = () => {
    let tl = anime.timeline({
        easing: 'easeInOutQuad', duration: 3000, loop: true, direction: 'alternate'
    })
    tl.add({targets: '#cirMedWht', r: 270})
        .add({targets: '#cirMedBk', r: 270}, '-=3000')
}


let layer_3 = () => {
    let tl = anime.timeline({
        easing: 'easeInOutQuad', duration: 3000, loop: true, direction: 'alternate'
    })
    tl.add({targets: '#cirLgWht', r: 370})
        .add({targets: '#cirLgBk', r: 370}, '-=3000')
}


const startLayers = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}


// последовательность запуска слоев
startLayers(0).then(layer_1)
startLayers(700).then(layer_2)
startLayers(1600).then(layer_3)

// test
// layer_1()
// setTimeout(layer_2, 600)
// setTimeout(layer_3, 1200)

/* ======== END - .circles, #cir ==================================================================================== */


/* ======== START - .type-service__order ============================================================================ */

// let elements = getComputedStyle(document.querySelector('.type-service__order'), ':after')
//
// document.querySelectorAll('.type-service__order').forEach(item => {
//     item.addEventListener('mouseover', event => {
//
//         anime({
//             targets: '.type-service__order:after',
//             left: '100px',
//             backgroundColor: '#212529',
//             color: '#212529'
//             // backgroundColor: '#FFF',
//             // borderRadius: ['0%', '50%'],
//             // easing: 'easeInOutQuad'
//         });
//
//         // test
//         console.log(elements)
//     })
// })


/* ======== END - .type-service__order ============================================================================== */


/* ======== START - .art ============================================================================================ */

// r="75"


function lala() {

    // test
    // console.log('test')

    let layer_1b = () => {
        anime({
            targets: '#mask-circle',
            r: 75,
            duration: 2000,
            // direction: 'alternate',
            // loop: true,
            easing: 'easeInOutSine'
        })
    }

    let layer_2b = () => {
        anime({
            targets: '#mask-circle',
            r: 110,
            duration: 1000,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine'
        })
    }

    startLayers(0).then(layer_1b)
    startLayers(2000).then(layer_2b)

}


// let layer_1b = () => {
//     anime({
//         targets: '#mask-circle',
//         r: 75,
//         duration: 2000,
//         // direction: 'alternate',
//         // loop: true,
//         easing: 'easeInOutSine'
//     })
// }
//
// let layer_2b = () => {
//     anime({
//         targets: '#mask-circle',
//         r: 110,
//         duration: 1000,
//         direction: 'alternate',
//         loop: true,
//         easing: 'easeInOutSine'
//     })
// }
//
// startLayers(0).then(layer_1b)
// startLayers(2000).then(layer_2b)







/* ======== END - art =============================================================================================== */