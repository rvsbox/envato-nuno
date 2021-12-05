const {src, dest, parallel, series, watch} = require('gulp') // константы gulp
const browserSync = require('browser-sync').create()
const concat = require('gulp-concat')
const uglify = require('gulp-uglify-es').default // специфическое подключени модуля, см. его документацию
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const del = require('del')
const plumber = require('gulp-plumber') // обработка ошибок
const rename = require('gulp-rename')
const strip = require('gulp-strip-comments') // удалить комментарии
const panini = require('panini') // html шаблонизатор


/* ======== START - Настройка сервера =============================================================================== */
function myServer() {
    browserSync.init({
        server: './build/',
        notify: false,
        online: true,
        port: 8000,
        browser: 'C:\\Program Files\\Google\\Chrome Dev\\Application\\chrome' // windows
        // browser: 'google-chrome-unstable', // linux
    })
}
/* ======== END - Настройка сервера ================================================================================= */


/* ======== START - Настройка путей ================================================================================= */
const srcPath = 'source/'
const buildAlpha = 'build/alpha/'                  // alpha
const buildAlphaClear = 'build/alpha-clear/'       // alpha-clear
const buildPathBeta = 'build/beta/'                // beta

const pathAlpha = {
    build: {
        html: buildAlpha,
        js: buildAlpha + 'assets/js/',
        css: buildAlpha + 'assets/css/',
        images: buildAlpha + 'assets/images/',
        fonts: buildAlpha + 'assets/fonts/'
    },
    src: {
        html: srcPath + '*.html',
        js: srcPath + 'js/*.js',
        scss: srcPath + 'scss/main-beta.scss',
        images: srcPath + 'img/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}',
        fonts: srcPath + 'fonts/**/*.{eot,woff,woff2,ttf,svg}'
    },
    watch: {
        html: srcPath + '**/*.html',
        js: srcPath + 'js/**/*.js',
        scss: srcPath + 'scss/**/*.scss',
        images: srcPath + 'img/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}',
        fonts: srcPath + 'fonts/**/*.{eot,woff,woff2,ttf,svg}'
    },
    clear: './' + buildAlpha
}

const pathAlphaClear = {
    build: {
        html: buildAlphaClear,
        js: buildAlphaClear + 'assets/js/',
        css: buildAlphaClear + 'assets/css/',
        images: buildAlphaClear + 'assets/images/',
        fonts: buildAlphaClear + 'assets/fonts/'
    },
    clear: './' + buildAlphaClear
}

const pathBeta = {
    build: {
        html: buildPathBeta,
        js: buildPathBeta + 'js/',
        css: buildPathBeta + 'css/',
        images: buildPathBeta + 'images/',
        fonts: buildPathBeta + 'fonts/'
    },
    clear: './' + buildPathBeta
}
/* ======== END - Настройка путей =================================================================================== */


/* ======== START - JavaScript ====================================================================================== */
function myJs() {
    return src([
        'source/js/script-01.js',
        // 'source/js/script-02.js',
        // 'source/js/script-03.js',
        // 'source/js/script-alpha.js',
    ])
        .pipe(plumber()) // обработка ошибок
        .pipe(concat('main.js'))
        .pipe(strip({ignore: /\/\*[\s\S]*?\*\//g})) // удалить комметарии, но исключить многострочные комментарии
        .pipe(dest(pathAlpha.build.js))             // alpha
        .pipe(dest(pathAlphaClear.build.js))        // alpha-clear

        // получить второй минимизированный файл
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write())
        .pipe(dest(pathAlpha.build.js))             // alpha
        .pipe(dest(pathAlphaClear.build.js))        // alpha-clear
        .pipe(browserSync.stream())
}

function myLibJs() {
    return src([
        'source/lib-js/*.js',
        'source/lib-js/*.map'
    ])
        .pipe(dest(pathAlpha.build.js))              // alpha
        .pipe(dest(pathAlphaClear.build.js))         // alpha-clear
        .pipe(browserSync.reload({stream: true}))
}
/* ======== END - JavaScript ======================================================================================== */


/* ======== START - CSS ============================================================================================= */
function myCss() {
    return src('source/scss/alpha-main.scss')
        .pipe(plumber())

        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions'],
            grid: true
        }))
        .pipe(dest(pathAlpha.build.css))            // alpha
        .pipe(dest(pathAlphaClear.build.css))       // alpha-clear

        // получить второй минимизированный файл
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write())
        .pipe(dest(pathAlpha.build.css))           // alpha
        .pipe(dest(pathAlphaClear.build.css))      // alpha-clear
        .pipe(browserSync.stream())
}

function myLibCss() {
    return src([
        'source/lib-css/*.css',
        'source/lib-css/*.map'
    ])
        .pipe(dest(pathAlpha.build.css))           // alpha
        .pipe(dest(pathAlphaClear.build.css))      // alpha-clear
        .pipe(browserSync.reload({stream: true}))
}
/* ======== END - CSS =============================================================================================== */


/* ======== START - HTML ============================================================================================ */
function myHtml() {
    panini.refresh();
    return src('source/tpl/pages--alpha/**/*.html')
        .pipe(plumber())
        .pipe(panini({
            root: srcPath + '/',
            layouts: srcPath + 'tpl/layouts/',
            partials: srcPath + 'tpl/partials/',
            helpers: srcPath + 'tpl/helpers/',
            data: srcPath + 'tpl/data/'
        }))
        .pipe(dest(pathAlpha.build.html))           // alpha
        .pipe(browserSync.reload({stream: true}))
}

function myHtmlAlphaClear() {
    panini.refresh();
    return src('source/tpl/pages--alpha-clear/**/*.html')
        .pipe(plumber())
        .pipe(panini({
            root: srcPath + '/',
            layouts: srcPath + 'tpl/layouts/',
            partials: srcPath + 'tpl/partials/',
            helpers: srcPath + 'tpl/helpers/',
            data: srcPath + 'tpl/data/'
        }))
        .pipe(dest(pathAlphaClear.build.html))      // alpha-clear
        .pipe(browserSync.reload({stream: true}))
}
/* ======== END - HTML ============================================================================================== */


/* ======== START - Fonts =========================================================================================== */
function myFonts() {
    return src([
        'source/fonts/**/*.ttf',
        'source/fonts/**/*.woff',
        'source/fonts/**/*.woff2',
        'source/fonts/**/*.eot',
        'source/fonts/**/*.svg'
    ])
        .pipe(dest(pathAlpha.build.fonts))         // alpha
        .pipe(dest(pathAlphaClear.build.fonts))    // alpha-clear
        .pipe(browserSync.reload({stream: true}))
}
/* ======== END - Fonts ============================================================================================= */


/* ======== START - Images ========================================================================================== */
function myImages() {
    return src([
        'source/img/**/*.png',
        'source/img/**/*.jpg',
        'source/img/**/*.svg',
    ])
        .pipe(dest(pathAlpha.build.images))       // alpha
        .pipe(browserSync.reload({stream: true}))
}

function myImagesAlphaClear() {
    return src('source/img/**/*.svg')
        .pipe(dest(pathAlphaClear.build.images))  // alpha-clear
        .pipe(browserSync.reload({stream: true}))
}
/* ======== END - Images ============================================================================================ */


/* ======== START - Universal Functions ============================================================================= */
function myClear() {
    return del([pathAlpha.clear, pathAlphaClear.clear], {force: true})
}

function myWatch() {
    watch([pathAlpha.watch.scss], myCss)
    watch([pathAlpha.watch.js], myJs)
    watch([pathAlpha.watch.html], myHtml)
    watch([pathAlpha.watch.html], myHtmlAlphaClear)
    watch([pathAlpha.watch.fonts], myFonts)
    watch([pathAlpha.watch.images], myImages)

    // watch([path.watch.draft], myDraft)
    // watch(['source/**/*.js', '!source/**/*.min.js']) // ! - исключение файла для watch
    // watch(['source/_index.html', 'source/**/*.html'], htmlCopy).on('change', browserSync.reload)
}
/* ======== END - Universal Functions =============================================================================== */


exports.myServer = myServer                       // > yarn gulp myServer
exports.myCss = myCss                             // > yarn gulp myCss
exports.myHtml = myHtml                           // > yarn gulp myHtml
exports.myHtmlAlphaClear = myHtmlAlphaClear
exports.myClear = myClear                         // > yarn gulp myClear
exports.myFonts = myFonts                         // > yarn gulp myFonts
exports.myImages = myImages                       // > yarn gulp myImages
exports.myImagesAlphaClear = myImagesAlphaClear
exports.myLibCss = myLibCss                       // > yarn gulp myLibCss
exports.myLibJs = myLibJs                         // > yarn gulp myLibJso
exports.myJs = myJs                               // > yarn gulp myJs

exports.build = series(
    myClear,
    myJs,
    myCss,
    myHtml,
    myHtmlAlphaClear,
    myFonts,
    myImages,
    myImagesAlphaClear,
    myLibCss,
    myLibJs
)

exports.default = parallel(
    myServer,
    myJs,
    myCss,
    myHtml,
    myHtmlAlphaClear,
    myFonts,
    myImages,
    myImagesAlphaClear,
    myLibCss,
    myLibJs,
    myWatch
)