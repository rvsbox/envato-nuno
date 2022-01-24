// commit test-1
// commit test-2
// commit test-3


/* ======== START - Load and switch theme =========================================================================== */

// ПРИ ТЕСТИРОВАНИИ ЗАПУСКАТЬ САЙТ ТОЛЬКО В ОДНО ВКЛАДКЕ, ДЛЯ КОРРЕКТНОЙ РАБОТЫ СКРИПТА
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
    localStorage.clear() // очистить localStorage

    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark')
        console.log('1')
        // document.getElementById('slider').checked = false
    } else {
        setTheme('theme-blue')
        // document.getElementById('slider').checked = true
        // console.log('2')
        // console.log(localStorage.getItem('theme'))
    }
})()

// test
// function getInfo() {
//     console.log(localStorage.getItem('theme'))
// }
// getInfo()

/* ======== END - Load and switch theme ============================================================================= */