let e = document.getElementById('gir')
let w = e.clientWidth
let h = e.clientHeight




window.onresize = function (event) {
    let tw = document.getElementById('gir').clientWidth
    let th = document.getElementById('gir').clientHeight


    if ((tw !== w)&&(th !== h)) {

        document.location.reload(true)
        console.log('tw: ' + tw)
        console.log('th: ' + th)
    }

    if (tw !== w) {
        document.location.reload(true)
        console.log('tw: ' + tw)
    }

    if (th !== h) {

        document.location.reload(true)
        console.log('th: ' + th)
    }
}