/* ======== START -  ================================================================================================ */

function setTheme(themeName) {
    localStorage.setItem('theme', themeName)
    document.documentElement.className = themeName
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-blue')
    } else {
        setTheme('theme-dark')
    }
}

// установка темы при начальной загрузке. По умолчанию будет загружена theme-blue
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark')
        document.getElementById('slider').checked = false
    } else {
        setTheme('theme-blue')
        document.getElementById('slider').checked = true
    }
})()

/* ======== END -   ================================================================================================= */