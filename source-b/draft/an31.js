function lala() {
    let a = 1

    return function nuno() {
        console.log(a)
    }
}

let kama = lala()

kama()
//
// lala()