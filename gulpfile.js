const {src, dest, parallel, series, watch} = require('gulp') // константы gulp
const browserSync = require('browser-sync').create()
// const concat = require('gulp-concat')
// const uglify = require('gulp-uglify-es').default // специфическое подключени модуля, см. его документацию
// const sass = require('gulp-sass')
// const autoprefixer = require('gulp-autoprefixer')
// const cleancss = require('gulp-clean-css')
const del = require('del')

// команда запуска отдельной функции - 'yarn gulp browserSyncMy'
function browserSyncMy() {
    browserSync.init({
        server: {baseDir: 'build/'},
        notify: false,
        online: true,
        browser: 'C:\\Program Files\\Google\\Chrome Dev\\Application\\chrome'
    })
}

// команда запуска отдельной функции - 'yarn gulp scripts'
// function scripts() {
//     return src([
//         'app/js/lib.js',
//         'app/js/app.js',
//     ])
//         .pipe(concat('scripts.js'))
//         .pipe(uglify()) // сжатие js
//         .pipe(dest('build/js'))
//         .pipe(browserSync.stream())
// }

// function styles() {
//     return src('app/scss/main.scss')
//         .pipe(sass())
//         .pipe(concat('style.css'))
//         .pipe(autoprefixer({overrideBrowserslist: ['last 10 versions'], grid: true}))
//         .pipe(cleancss(({level: {1: {specialComments: 0}} /*, format: 'beautify' */}))) // сжатие css, убрать комментарии, см  док. модуля
//         .pipe(dest('build/css'))
//         .pipe(browserSync.stream())
// }

function cleanDist() {
    return del(['build/index.html', 'build/**/*.html'/*, '!build/css', '!build/js'*/], {force: true}) // удаляем всё содержимое папки 'build/'
}

function htmlCopy() {
    return src([
        'draft/index.html',
        // 'draft/*.html',
        'draft/**/*.html',
    ], {base: 'draft'}) // base сохраняет структуру проекта, те такие же папки и файлы в директории 'app/'
        .pipe(dest('build'))
}

function startWatch() {
    // watch(['app/**/*.js', '!app/**/*.min.js']) // ! - исключение файла для watch
    // watch('app/**/*.scss', styles)
    // watch('app/**/*.js', scripts)
    watch(['draft/index.html', /*'draft/!*.html', */'draft/**/*.html'], htmlCopy).on('change', browserSync.reload)
}

exports.browserSyncMy = browserSyncMy
// exports.scripts = scripts
// exports.styles = styles
exports.htmlCopy = htmlCopy
exports.build = series(cleanDist, /*styles, scripts,*/ htmlCopy) // установка последовательности действий, запуск 'yarn gulp build'

// команда запуска функций в указанной последовательности - 'yarn gulp'
exports.default = parallel(cleanDist, /*styles, scripts,*/ htmlCopy, browserSyncMy, startWatch)