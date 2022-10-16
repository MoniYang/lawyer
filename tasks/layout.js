// gulp 流程
var gulp           = require('gulp'); // 建立 gulp 環境
var plumber        = require('gulp-plumber'); // 處理錯誤，修正後自動重新編譯(watch不中斷)
// var changed        = require('gulp-changed');  // 僅傳遞更改過的檔案
var data           = require('gulp-data'); // 載入 .json 資料

// css 相關
var sass           = require('gulp-sass'); // .scss 編譯為 .css
// var sourcemaps     = require('gulp-sourcemaps'); // 產生 .map 使 .css 可對應 .scss
var autoprefixer   = require('gulp-autoprefixer'); // .css 增加瀏覽器前綴字如： -ms- | -webkit-

// html 相關
var nunjucksRender = require('gulp-nunjucks-render'); // .njk 編譯為 .html
var htmlbeautify   = require('gulp-html-beautify'); // .html 原始碼格式化

// 檔案操作
var concat         = require('gulp-concat'); // 將多個檔案合併為一個
var rename         = require('gulp-rename'); // 對檔案/目錄進行更名

// 預覽相關
var browserSync    = require('browser-sync').create(); // 建立本地端伺服器，頁面即時更新

// 優化相關
// var cssnano = require('gulp-cssnano'); // 壓縮 .css 減少檔案體積




// -------------------------------------------------
gulp.task('sass', function () {
    // 原始 .scss 所在位置

    return gulp.src(
        './app/source/scss/*.scss',
        // './app/source/Views/SupportInfo/style/global/*.scss' 
        )
        // "gulp-plumber" - 指定以此插件處理錯誤，修正後自動重新編譯(watch不中斷)
        .pipe(plumber())

        // "gulp-sourcemaps" - 紀錄起始點
        // .pipe(sourcemaps.init())

        // 編譯 scss
        .pipe(sass({
            // css 風格 - nested | expanded | compact
            outputStyle: 'expanded'
        }))

        .pipe(autoprefixer({
            // IE 最新兩個版本 (需要支援 IE10 再打開)
            // browsers: ['last 2 Explorer versions'],
            browsers: ['iOS 9'],
            remove: false

            //主流瀏覽器最新兩個版本 (包含 IE10)
            //browsers: ['last 2 versions']
        }))



        // "gulp-rename" - 針對編譯後"輸出 .css 目標位置"內的'子目錄'進行更名
        .pipe(rename(function (path) {
            for (var key of Object.keys(path)) {
                // 子目錄名稱 'scss' 更名為 'css'
                path[key] = path[key].replace(/\\scss/g, '/css');
            }
        }))

        // "gulp-sourcemaps" - 輸出 .map (根路徑為"編譯後輸出 .css 目標位置")
        // .pipe(sourcemaps.write('./'))

        // 編譯後輸出 .css 目標位置
        .pipe(gulp.dest('./app/public/template/css'))

        // "browser-sync" 即時更新 .css
        .pipe(browserSync.stream());

   
});

// -----------------------------------------------------
// gulp-nunjucks-render - 模板引擎 Nunjucks
// -----------------------------------------------------

gulp.task('layout-html', function () {

    return gulp.src([
            // 此路徑內的 .njk 皆會編譯為 .html
            './app/source/Views/**/*.njk',
            
            // 例外：略過編譯 "Include" 內的 .njk
            '!./app/source/Views/Include/*.njk',
         
        ])

        // "gulp-plumber" - 指定以此插件處理錯誤，修正後自動重新編譯(watch不中斷)
        .pipe(plumber())

        // 指定編譯 .njk 的路徑
        .pipe(nunjucksRender({
            // .njk 內的語法: {% extends %}, {% include %}，將以此為根路徑
            path: './app/source',

            // 初始資料設定
            data: {
                //site_name: site_name[index] , // 預設站台 css 樣式
                //platform: 'desktop',
                html_lang:'en', // 預設頁面 <html lang="en"> 語系
                title_text: '軍師幫', // 預設 <title> 標題
                css_path: '../template/css', // css 預設相對路徑
                vendor_path: '../template/js', // js插件預設相對路徑
                img_url: '../template/img', // img 預設相對路徑
                //demojs_path: '../../', // demojs 預設相對路徑
                //header_path: './', // header 預設相對路徑
                ui_path: '../', // UI_Develop 預設相對路徑
            }
        }))

        // "gulp-changed" - 先檢查檔案，只有異動過的才進行編譯
        // .pipe(changed('./app/public/Views'))

        // 編譯後輸出 .html 目標位置
        .pipe(gulp.dest('./app/public/'))

        // "browser-sync" 即時更新 .html
        .pipe(browserSync.stream());
    
});
// -------------------------------------------------
// UI Develop - nova88 僅供開發時使用
// -------------------------------------------------
gulp.task('ui-dev', function () {
    // // 編譯輸出 .css
    gulp.src('./app/source/Views/UI_dev/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/public/UI_dev/css'))
        
    // 輸出合併 .js
    // gulp.src('./app/source/Views/Nova88View/UI_Develop/js/*.js')
    //     .pipe(concat('ui-dev.js')) // 合併後檔名
    //     .pipe(gulp.dest('./app/public/Desktop/Views/Nova88View/UI_Develop/js'))
    //     .pipe(gulp.dest('./app/public/Mobile/Views/Nova88View/UI_Develop/js'));
});



// -------------------------------------------------
// Task - 各任務執行列表 (任務名不可與執行任務名相同)
// -------------------------------------------------


// gulp html - 批次執行 ['nunjucks']  任務 -- 全站
gulp.task('html', ['layout-html']);

gulp.task('css', ['sass']);