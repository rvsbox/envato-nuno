let functionBasedParameters = function () {
    anime({
        targets: '#function-based-params-demo .el',
        translateX: 270,
        direction: 'alternate',
        loop: true,
        delay: function (el, i, l) {
            // console.log(l)
            console.log(i)
            // console.log(el)

            return i * 200
        },
        // delay: 200,
        easing: 'easeInOutSine',
        // endDelay: function (el, i, l) {
        //     // console.log(l)
        //     console.log(i)
        //
        //     return (l - i) * 500
        // }
    })
}

setTimeout(functionBasedParameters, 2000)