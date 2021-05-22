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



const srcPath = 'source/'
const buildPath = 'build/'

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
        scss: srcPath + 'assets/scss/main.scss',
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



function myServer() {
    browserSync.init({
        server: {baseDir: './' + buildPath},
        notify: false,
        online: true,
        port: 3000,
        browser: 'C:\\Program Files\\Google\\Chrome Dev\\Application\\chrome'
    })
}



function myJs() {
    return src([
        'source/assets/js/script_1.js',
        'source/assets/js/script_2.js',
    ])
        .pipe(plumber()) // обработка ошибок
        .pipe(concat('main.js'))
        .pipe(strip({ignore: /\/\*[\s\S]*?\*\//g})) // удалить комметарии, исключить многострочные комментарии
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



function myCss() {
    return src(path.src.scss)
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



function myHtml() {
    panini.refresh();
    return src(path.src.html, {base: srcPath})
        .pipe(plumber())
        .pipe(panini({
            root:       srcPath,
            layouts:    srcPath + 'tpl/layouts/',
            partials:   srcPath + 'tpl/partials/',
            helpers:    srcPath + 'tpl/helpers/',
            data:       srcPath + 'tpl/data/'
        }))
        .pipe(dest(path.build.html))
        .pipe(browserSync.reload({stream: true}))
}



function myFonts() {
    return src(path.src.fonts)
        .pipe(dest(path.build.fonts))
        .pipe(browserSync.reload({stream: true}))
}



function myImages() {
    return src(path.src.images)
        .pipe(dest(path.build.images))
        .pipe(browserSync.reload({stream: true}))
}



function myLibCss() {
    return src([
        'source/assets/lib-css/*.css',
        'source/assets/lib-css/*.map'
    ])
        .pipe(dest(path.build.css))
        .pipe(browserSync.reload({stream: true}))
}



function myLibJs() {
    return src([
        'source/assets/lib-js/*.js',
        'source/assets/lib-js/*.map'
    ])
        .pipe(dest(path.build.js))
        .pipe(browserSync.reload({stream: true}))
}



function myDraft() {
    return src(path.src.draft)
        .pipe(dest(path.build.draft))
        .pipe(browserSync.reload({stream: true}))
}



function myClear() {
    return del(path.clear, {force: true})
}



function myWatch() {
    watch([path.watch.scss], myCss)
    watch([path.watch.js], myJs)
    watch([path.watch.html], myHtml)
    watch([path.watch.fonts], myFonts)
    watch([path.watch.images], myImages)
    watch([path.watch.draft], myDraft)
    // watch(['source/**/*.js', '!source/**/*.min.js']) // ! - исключение файла для watch
    // watch(['source/_index.html', 'source/**/*.html'], htmlCopy).on('change', browserSync.reload)
}



exports.myServer = myServer           // > yarn gulp myServer
exports.myJs = myJs                   // > yarn gulp myJs
exports.myCss = myCss                 // > yarn gulp myCss
exports.myHtml = myHtml               // > yarn gulp myHtml
exports.myClear = myClear             // > yarn gulp myClear
exports.myFonts = myFonts             // > yarn gulp myFonts
exports.myImages = myImages           // > yarn gulp myImages
exports.myLibCss = myLibCss           // > yarn gulp myLibCss
exports.myLibJs = myLibJs             // > yarn gulp myLibJso
exports.myDraft = myDraft             // > yarn gulp myDraft



// последовательное выполенение задач
// > yarn gulp build
exports.build = series(myClear, myJs, myCss, myHtml, myFonts, myImages, myLibCss, myLibJs)

//  параллельное выполнение задач
//  > yarn gulp
exports.default = parallel(myServer, myJs, myCss, myHtml, myFonts, myImages, myLibCss, myLibJs, myDraft, myWatch)