/* ======== START - Load and switch theme =========================================================================== */

function setTheme(themeName) {
    localStorage.setItem('theme', themeName)
    document.documentElement.className = themeName
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-blue')
        console.log('blue')
    } else {
        setTheme('theme-dark')
        console.log('dark')
        // console.log(localStorage.getItem('theme'))
    }
}

// установка темы при начальной загрузке. По умолчанию будет загружена theme-blue
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark')
        console.log('1')
        // document.getElementById('slider').checked = false
    } else {
        setTheme('theme-blue')
        // document.getElementById('slider').checked = true
        console.log('2')
        // console.log(localStorage.getItem('theme'))
    }
})()

/* ======== END - Load and switch theme ============================================================================= */