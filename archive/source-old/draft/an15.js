let loopBegan = 0
let loopCompleted = 0


// anime({
//     targets: '#blue',
//     easing: 'easeInOutQuad',
//     loop: true,
//     duration: 1000,
//     direction: 'alternate',
//     r: 240,
//     loopBegin: function (anim) {
//         loopBegan++
//         // console.log('loop began : ' + loopBegan)
//     },
//     loopComplete: function (anim) {
//         loopCompleted++
//
//         if (loopCompleted >= 4 && loopCompleted < 5) {
//             // console.log('test')
//         }
//
//         console.log('loop completed : ' + loopCompleted)
//     },
//     delay: 500
// })


// function lala() {
//     // console.log('test')
//     nuno_2()
// }

// let layer = function() {
//
//     function nuno_2() {
//         anime({
//             targets: '#blue',
//             easing: 'easeInOutQuad',
//             loop: true,
//             duration: 1000,
//             direction: 'alternate',
//             r: 240,
//
//             loopBegin: function (anim) {
//                 console.log('began nuno_2')
//             },
//         })
//
//         console.log('test')
//     }
//
//
//     let animation = anime({
//         targets: '#blue',
//         easing: 'easeInOutQuad',
//         duration: 1000,
//         direction: 'alternate',
//         r: 240,
//         delay: 1000,
//
//         // loopBegin: function (anim) {
//         //     loopBegan++
//         //     console.log('loop began : ' + loopBegan)
//         // },
//         //
//         // loopComplete: function (anim) {
//         //     loopCompleted++
//         //     console.log('loop completed : ' + loopCompleted)
//         // }
//     })
//
//     animation.finished.then(nuno_2)
// }
//
// layer()







let layer_1 = () => {
    anime({
        targets: '#blue',
        keyframes: [
            {r: 240, duration: 1000, easing: 'easeInOutQuad'},
            {r: 200, duration: 1000, easing: 'easeInOutQuad',}
        ],
        delay: 1000,

        loopBegin: function (anim) {
            loopBegan++
            console.log('loop began : ' + loopBegan)
        },

        loopComplete: function (anim) {
            loopCompleted++
            console.log('loop completed : ' + loopCompleted)
        },

        complete: function () {
            layer_2()
        }
    })
}

let layer_2 = () => {
    anime({
        targets: '#blue',
        easing: 'easeInOutQuad',
        loop: true,
        duration: 1000,
        direction: 'alternate',
        r: 240,
    })
}

layer_1()