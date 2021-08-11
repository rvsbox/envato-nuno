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


/* ======== START - установка путей ================================================================================= */
/* ======== START - верстка alpha =================================================================================== */
const srcPath = 'source-old/'
const buildPath = 'build/alpha/'

const path = {
    build: {
        html: buildPath,
        js: buildPath + 'assets/js/',
        css: buildPath + 'assets/css/',
        images: buildPath + 'assets/images/',
        fonts: buildPath + 'assets/fonts/',
        draft: buildPath + 'draft/'
    },
    src: {
        html: srcPath + '*.html',
        js: srcPath + 'assets/js/*.js',
        scss: srcPath + 'assets/scss/main-beta.scss',
        images: srcPath + 'assets/images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}',
        fonts: srcPath + 'assets/fonts/**/*.{eot,woff,woff2,ttf,svg}',
        draft: srcPath + 'draft/**/*.{html,js}'
    },
    watch: {
        html: srcPath + '**/*.html',
        js: srcPath + 'assets/js/**/*.js',
        scss: srcPath + 'assets/scss/**/*.scss',
        images: srcPath + 'assets/images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}',
        fonts: srcPath + 'assets/fonts/**/*.{eot,woff,woff2,ttf,svg}',
        draft: srcPath + 'draft/**/*.{html,js}'
    },
    clear: './' + buildPath
}
/* ======== END - верстка alpha ===================================================================================== */



/* ======== START - верстка beta ==================================================================================== */
const buildPathBeta = 'build/beta/'

const pathBeta = {
    build: {
        html: buildPathBeta,
        js: buildPathBeta + 'assets/js/',
        css: buildPathBeta + 'assets/css/',
        images: buildPathBeta + 'assets/images/',
        fonts: buildPathBeta + 'assets/fonts/'
    },
    clear: './' + buildPathBeta
}
/* ======== END - верстка beta ====================================================================================== */
/* ======== END - установка путей =================================================================================== */


function myServer() {
    browserSync.init({
        server: './build/',
        notify: false,
        online: true,
        port: 8000,
        // browser: 'C:\\Program Files\\Google\\Chrome Dev\\Application\\chrome' // windows
        browser: 'google-chrome-unstable', // linux
    })
}


function myJs() {
    return src([
        'source-old/assets/js/script-01.js',
        'source-old/assets/js/script-02.js',
        'source-old/assets/js/script-03.js',
        'source-old/assets/js/script-alpha.js',
    ])
        .pipe(plumber()) // обработка ошибок
        .pipe(concat('main.js'))
        .pipe(strip({ignore: /\/\*[\s\S]*?\*\//g})) // удалить комметарии, но исключить многострочные комментарии
        .pipe(dest(path.build.js))

        // получить второй минимизированный файл
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write())
        .pipe(dest(path.build.js))
        .pipe(browserSync.stream())
}


function myJsBeta() {
    return src([
        'source-old/assets/js/script-01.js',
        'source-old/assets/js/script-02.js',
        'source-old/assets/js/script-03.js',
    ])
        .pipe(plumber()) // обработка ошибок
        .pipe(concat('main.js'))
        .pipe(strip({ignore: /\/\*[\s\S]*?\*\//g})) // удалить комметарии, но исключить многострочные комментарии
        .pipe(dest(pathBeta.build.js))

        // получить второй минимизированный файл
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write())
        .pipe(dest(pathBeta.build.js))
        .pipe(browserSync.stream())
}


function myCss() {
    return src('source-old/assets/scss/main.scss')
        .pipe(plumber())

        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions'],
            grid: true
        }))
        .pipe(dest(path.build.css))

        // получить второй минимизированный файл
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write())
        .pipe(dest(path.build.css))
        .pipe(browserSync.stream())
}


function myCssBeta() {
    return src('source-old/assets/scss/main-beta.scss')
        .pipe(plumber())

        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions'],
            grid: true
        }))
        .pipe(dest(pathBeta.build.css))

        // получить второй минимизированный файл
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write())
        .pipe(dest(pathBeta.build.css))
        .pipe(browserSync.stream())
}


function myHtml() {
    panini.refresh();
    return src('source-old/tpl/pages-alpha/**/*.html')
        .pipe(plumber())
        .pipe(panini({
            root: srcPath + '/',
            layouts: srcPath + 'tpl/layouts/',
            partials: srcPath + 'tpl/partials/',
            helpers: srcPath + 'tpl/helpers/',
            data: srcPath + 'tpl/data/'
        }))
        .pipe(dest(path.build.html))
        .pipe(browserSync.reload({stream: true}))
}


function myHtmlBeta() {
    panini.refresh();
    return src('source-old/tpl/pages-beta/**/*.html')
        .pipe(plumber())
        .pipe(panini({
            root: srcPath + '/',
            layouts: srcPath + 'tpl/layouts/',
            partials: srcPath + 'tpl/partials/',
            helpers: srcPath + 'tpl/helpers/',
            data: srcPath + 'tpl/data/'
        }))
        .pipe(dest(pathBeta.build.html))
        .pipe(browserSync.reload({stream: true}))
}


function myFonts() {
    return src('source-old/assets/fonts/**/*.ttf')
        .pipe(dest(path.build.fonts))
        .pipe(browserSync.reload({stream: true}))
}


function myFontsBeta() {
    return src('source-old/assets/fonts/**/*.ttf')
        .pipe(dest(pathBeta.build.fonts))
        .pipe(browserSync.reload({stream: true}))
}


function myImages() {
    return src([
        'source-old/assets/images/**/*.png',
        'source-old/assets/images/**/*.jpg',
        'source-old/assets/images/**/*.svg',
    ])
        .pipe(dest(path.build.images))
        .pipe(browserSync.reload({stream: true}))
}


function myImagesBeta() {
    return src([
        'source-old/assets/images/**/*.png',
        'source-old/assets/images/**/*.jpg',
        'source-old/assets/images/**/*.svg',
    ])
        .pipe(dest(pathBeta.build.images))
        .pipe(browserSync.reload({stream: true}))
}


function myLibCss() {
    return src([
        'source-old/assets/lib-css/*.css',
        'source-old/assets/lib-css/*.map'
    ])
        .pipe(dest(path.build.css))
        .pipe(browserSync.reload({stream: true}))
}


function myLibCssBeta() {
    return src([
        'source-old/assets/lib-css/*.css',
        'source-old/assets/lib-css/*.map'
    ])
        .pipe(dest(pathBeta.build.css))
        .pipe(browserSync.reload({stream: true}))
}


function myLibJs() {
    return src([
        'source-old/assets/lib-js/*.js',
        'source-old/assets/lib-js/*.map'
    ])
        .pipe(dest(path.build.js))
        .pipe(browserSync.reload({stream: true}))
}


function myLibJsBeta() {
    return src([
        'source-old/assets/lib-js/*.js',
        'source-old/assets/lib-js/*.map'
    ])
        .pipe(dest(pathBeta.build.js))
        .pipe(browserSync.reload({stream: true}))
}


function myDraft() {
    return src(path.src.draft)
        .pipe(dest(path.build.draft))
        .pipe(browserSync.reload({stream: true}))
}


function myClear() {
    return del([path.clear, pathBeta.clear], {force: true})
}


function myWatch() {
    watch([path.watch.scss], myCss)
    watch([path.watch.scss], myCssBeta)
    watch([path.watch.js], myJs)
    watch([path.watch.js], myJsBeta)
    watch([path.watch.html], myHtml)
    watch([path.watch.html], myHtmlBeta)
    watch([path.watch.fonts], myFonts)
    watch([path.watch.fonts], myFontsBeta)
    watch([path.watch.images], myImages)
    watch([path.watch.images], myImagesBeta)
    watch([path.watch.draft], myDraft)
    // watch(['source-old/**/*.js', '!source-old/**/*.min.js']) // ! - исключение файла для watch
    // watch(['source-old/_index.html', 'source-old/**/*.html'], htmlCopy).on('change', browserSync.reload)
}


exports.myServer = myServer           // > yarn gulp myServer
exports.myJs = myJs                   // > yarn gulp myJs
exports.myJsBeta = myJsBeta
exports.myCss = myCss                 // > yarn gulp myCss
exports.myCssBeta = myCssBeta
exports.myHtml = myHtml               // > yarn gulp myHtml
exports.myHtmlBeta = myHtmlBeta
exports.myClear = myClear             // > yarn gulp myClear
exports.myFonts = myFonts             // > yarn gulp myFonts
exports.myFontsBeta = myFontsBeta
exports.myImages = myImages           // > yarn gulp myImages
exports.myImagesBeta = myImagesBeta
exports.myLibCss = myLibCss           // > yarn gulp myLibCss
exports.myLibCssBeta = myLibCssBeta
exports.myLibJs = myLibJs             // > yarn gulp myLibJso
exports.myLibJsBeta = myLibJsBeta
exports.myDraft = myDraft             // > yarn gulp myDraft


// последовательное выполенение задач
// > yarn gulp build
exports.build = series(
    myClear, myJs, myJsBeta, myCss, myCssBeta, myHtml, myHtmlBeta, myFonts, myFontsBeta, myImages, myImagesBeta,
    myLibCss, myLibCssBeta, myLibJs, myLibJsBeta)

//  параллельное выполнение задач
//  > yarn gulp
exports.default = parallel(
    myServer, myJs, myJsBeta, myCss, myCssBeta, myHtml, myHtmlBeta, myFonts, myFontsBeta, myImages,
    myImagesBeta, myLibCss, myLibCssBeta, myLibJs, myLibJsBeta, myDraft, myWatch)


// exports.default = parallel(
//     myClear, myServer, myJsBeta, myCssBeta, myHtmlBeta, myFontsBeta, myImagesBeta, myLibCssBeta, myLibJsBeta, myWatch)