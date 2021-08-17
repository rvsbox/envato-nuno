/* ======== START -  ==================================================================================== */

window.addEventListener('scroll', function() {

    if (pageYOffset > 1) {
        document.getElementById('headerTop').style.top = -16 + 'px'
        document.getElementById('headerTop').style.position = 'fixed'
        document.getElementById('headerTop').style.opacity = 95 + '%'
        console.log('hello')
    } else {
        document.getElementById('headerTop').style.top = 0 + 'px'
        document.getElementById('headerTop').style.position = 'absolute'
        document.getElementById('headerTop').style.opacity = 100 + '%'
    }
});

/* ======== END -  ====================================================================================== */