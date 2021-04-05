// Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
// doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore

var functionBasedParameters = function () {
    anime({
        targets: '#function-based-params-demo .el',
        translateX: 270,
        direction: 'alternate',
        loop: true,
        delay: function (el, i, l) {
            return i * 100;
        },
        endDelay: function (el, i, l) {
            return (l - i) * 100;
        }
    });
};

functionBasedParameters();