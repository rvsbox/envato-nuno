// var w = window,
// d = document,
// e = d.documentElement,
// g = d.getElementsByTagName('body')[0],
// x = w.innerWidth || e.clientWidth || g.clientWidth;

// window.onresize = function(event){
//     var t = w.innerWidth || e.clientWidth || g.clientWidth;
//     if(t !== x) {
//        document.location.reload(true);
//       console.log('test')
//     }
// }


// var w = window,

e = document.getElementById("gir"),
x = e.clientWidth // ширина на старте


window.onresize = function (event) {
    let t = e.clientWidth //
    if (t !== x) {
        document.location.reload(true);
        console.log('lala')
    }
}