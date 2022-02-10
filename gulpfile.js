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
const buildBeta = 'build/beta/'                    // beta

const pathAlpha = {
    build: {
        html: buildAlpha,
        js: buildAlpha + 'assets/js/',
        css: buildAlpha + 'assets/css/',
        images: buildAlpha + 'assets/images/',
        font: buildAlpha + 'assets/fonts/'
    },
    src: {
        html: srcPath + '*.html',
        js: srcPath + 'js/*.js',
        scss: srcPath + 'scss/_alpha-main.scss',
        images: srcPath + 'img/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}',
        font: srcPath + 'font/**/*.{eot,woff,woff2,ttf,svg}'
    },
    watch: {
        html: srcPath + '**/*.html',
        js: srcPath + 'js/**/*.js',
        scss: srcPath + 'scss/**/*.scss',
        images: srcPath + 'img/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}',
        font: srcPath + 'font/**/*.{eot,woff,woff2,ttf,svg}'
    },
    clear: './' + buildAlpha
}

const pathAlphaClear = {
    build: {
        html: buildAlphaClear,
        js: buildAlphaClear + 'assets/js/',
        css: buildAlphaClear + 'assets/css/',
        images: buildAlphaClear + 'assets/images/',
        font: buildAlphaClear + 'assets/fonts/'
    },
    clear: './' + buildAlphaClear
}

const pathBeta = {
    build: {
        html: buildBeta,
        js: buildBeta + 'assets/js/',
        css: buildBeta + 'assets/css/',
        images: buildBeta + 'assets/images/',
        font: buildBeta + 'assets/fonts/'
    },
    clear: './' + buildBeta
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
        .pipe(dest(pathBeta.build.js))              // beta

        // получить второй минимизированный файл
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write())
        .pipe(dest(pathAlpha.build.js))             // alpha
        .pipe(dest(pathAlphaClear.build.js))        // alpha-clear
        .pipe(dest(pathBeta.build.js))              // beta
        .pipe(browserSync.stream())
}

function myLibJs() {
    return src([
        'source/lib/js/*.js',
        'source/lib/js/*.map'
    ])
        .pipe(dest(pathAlpha.build.js))              // alpha
        .pipe(dest(pathAlphaClear.build.js))         // alpha-clear
        .pipe(dest(pathBeta.build.js))               // beta
        .pipe(browserSync.reload({stream: true}))
}
/* ======== END - JavaScript ======================================================================================== */


/* ======== START - CSS ============================================================================================= */
function myCssAlpha() {
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

function myCssBeta() {
    return src('source/scss/beta-main.scss')
        .pipe(plumber())

        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions'],
            grid: true
        }))
        .pipe(dest(pathBeta.build.css))            // beta
        // .pipe(dest(pathBetaClear.build.css))    // beta-clear

        // получить второй минимизированный файл
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write())
        .pipe(dest(pathBeta.build.css))           // beta
        // .pipe(dest(pathBetaClear.build.css))   // beta-clear
        .pipe(browserSync.stream())
}

// для сборки scss файла. Файл чисто для клиента
function myScss() {
    return src([
        'source/scss/_description.scss',
        'source/scss/_font.scss',
        'source/scss/_alpha-color.scss',
        'source/scss/_element.scss',
        'source/scss/_page-base.scss',
        'source/scss/_page-sub.scss'
    ])
        .pipe(concat('main.scss'))
        .pipe(dest(pathAlphaClear.build.css))       // alpha-clear
}

function myLibCss() {
    return src([
        'source/lib/css/*.css',
        'source/lib/css/*.map'
    ])
        .pipe(dest(pathAlpha.build.css))           // alpha
        .pipe(dest(pathAlphaClear.build.css))      // alpha-clear
        .pipe(dest(pathBeta.build.css))            // beta
        .pipe(browserSync.reload({stream: true}))
}
/* ======== END - CSS =============================================================================================== */


/* ======== START - HTML ============================================================================================ */
function myHtml() {
    panini.refresh();
    return src('source/layout/page--alpha/**/*.html')
        .pipe(plumber())
        .pipe(panini({
            root: srcPath + '/',
            layouts: srcPath + 'layout/layout/',
            partials: srcPath + 'layout/partial/',
            helpers: srcPath + 'layout/helpers/',
            data: srcPath + 'layout/data/'
        }))
        .pipe(dest(pathAlpha.build.html))           // alpha
        .pipe(browserSync.reload({stream: true}))
}

function myHtmlAlphaClear() {
    panini.refresh();
    return src('source/layout/page--alpha-clear/**/*.html')
        .pipe(plumber())
        .pipe(panini({
            root: srcPath + '/',
            layouts: srcPath + 'layout/layout/',
            partials: srcPath + 'layout/partial/',
            helpers: srcPath + 'layout/helpers/',
            data: srcPath + 'layout/data/'
        }))
        .pipe(dest(pathAlphaClear.build.html))      // alpha-clear
        .pipe(browserSync.reload({stream: true}))
}

function myHtmlBeta() {
    panini.refresh();
    return src('source/layout/page--beta/**/*.html')
        .pipe(plumber())
        .pipe(panini({
            root: srcPath + '/',
            layouts: srcPath + 'layout/layout/',
            partials: srcPath + 'layout/partial/',
            helpers: srcPath + 'layout/helpers/',
            data: srcPath + 'layout/data/'
        }))
        .pipe(dest(pathBeta.build.html))             // beta
        .pipe(browserSync.reload({stream: true}))
}
/* ======== END - HTML ============================================================================================== */


/* ======== START - Font ============================================================================================ */
function myFont() {
    return src([
        'source/font/**/*.ttf',
        'source/font/**/*.woff',
        'source/font/**/*.woff2',
        'source/font/**/*.eot',
        'source/font/**/*.svg'
    ])
        .pipe(dest(pathAlpha.build.font))         // alpha
        .pipe(dest(pathAlphaClear.build.font))    // alpha-clear
        .pipe(dest(pathBeta.build.font))          // beta
        .pipe(browserSync.reload({stream: true}))
}
/* ======== END - Font ============================================================================================== */


/* ======== START - Images ========================================================================================== */
function myImages() {
    return src([
        'source/img/**/*.png',
        'source/img/**/*.jpg',
        'source/img/**/*.svg',
    ])
        .pipe(dest(pathAlpha.build.images))       // alpha
        .pipe(dest(pathBeta.build.images))        // beta
        .pipe(browserSync.reload({stream: true}))
}

function myImagesAlphaClear() {
    return src([
        'source/img/**/*.svg',
        'source/img/404.png',
        'source/img/favicon.png',
        'source/img/140x140.png',
        'source/img/350x240.png',
        'source/img/450x480.png',
        'source/img/600x450.png',
        'source/img/1020x1500.png'
        
    ])
        .pipe(dest(pathAlphaClear.build.images))  // alpha-clear
        .pipe(browserSync.reload({stream: true}))
}
/* ======== END - Images ============================================================================================ */


/* ======== START - Universal Functions ============================================================================= */
function myClear() {
    return del([pathAlpha.clear, pathAlphaClear.clear], {force: true})
}

function myWatch() {
    watch([pathAlpha.watch.scss], myCssAlpha)
    watch([pathAlpha.watch.scss], myCssBeta)
    // watch([pathAlpha.watch.scss], myScss)
    watch([pathAlpha.watch.js], myJs)
    watch([pathAlpha.watch.html], myHtml)
    watch([pathAlpha.watch.html], myHtmlBeta)
    watch([pathAlpha.watch.html], myHtmlAlphaClear)
    watch([pathAlpha.watch.font], myFont)
    watch([pathAlpha.watch.images], myImages)

    // watch([path.watch.draft], myDraft)
    // watch(['source/**/*.js', '!source/**/*.min.js']) // ! - исключение файла для watch
    // watch(['source/_index.html', 'source/**/*.html'], htmlCopy).on('change', browserSync.reload)
}
/* ======== END - Universal Functions =============================================================================== */


exports.myServer = myServer                           // > yarn gulp myServer
exports.myCssAlpha = myCssAlpha                       // > yarn gulp myCssAlpha
exports.myCssBeta = myCssBeta
exports.myScss = myScss                               // > yarn gulp myScss
exports.myHtml = myHtml                               // > yarn gulp myHtml
exports.myHtmlBeta = myHtmlBeta
exports.myHtmlAlphaClear = myHtmlAlphaClear
exports.myClear = myClear                             // > yarn gulp myClear
exports.myFont = myFont                               // > yarn gulp myFont
exports.myImages = myImages                           // > yarn gulp myImages
exports.myImagesAlphaClear = myImagesAlphaClear
exports.myLibCss = myLibCss                           // > yarn gulp myLibCss
exports.myLibJs = myLibJs                             // > yarn gulp myLibJso
exports.myJs = myJs                                   // > yarn gulp myJs

exports.build = series(
    myClear,
    myJs,
    myCssAlpha,
    myCssBeta,
    myScss,
    myHtml,
    myHtmlBeta,
    myHtmlAlphaClear,
    myFont,
    myImages,
    myImagesAlphaClear,
    myLibCss,
    myLibJs
)

exports.default = parallel(
    myServer,
    myJs,
    myCssAlpha,
    myCssBeta,
    myScss,
    myHtml,
    myHtmlBeta,
    myHtmlAlphaClear,
    myFont,
    myImages,
    myImagesAlphaClear,
    myLibCss,
    myLibJs,
    myWatch
)