"use strict";

var fs = require('fs');
var gulp = require("gulp");
var ejs = require("gulp-ejs");
var del = require('del'); //删除文件
var config = require('./web.config').WEB_CONFIG; //项目配置文件

/******************************
 *  打包发布到Dist环境流程
 *  1.清理dist环境
 *  2.编译ejs
 *  3.复制js,css,fonts,img文件
 *****************************/

//****清理Dist环境*****//
gulp.task("distClear", function(cb) {
    console.log('1. 清理dist环境');
    del.sync(config.PATH.dist + "/*");
    cb();
});

//****dist环境编译ejs*****//
gulp.task('gulpEjs', ["distClear"], function() {
    console.log('2. 编译ejs');
    fs.readdirSync(config.PATH.src)
        .filter(function(file) {
            //过滤非.html结尾的文件
            return file.endsWith('.html');
        })
        .forEach(function(file) {
            console.log("   编译" + file);
            var pathName = file.replace('.html', '');
            gulp.src(config.PATH.src + '/' + file)
                .pipe(ejs(config.EJS[pathName], {
                    ext: '.html'
                }))
                .pipe(gulp.dest(config.PATH.dist + '/'))
        })
});

//****dist环境复制js,css,fonts,img文件*****//
gulp.task('copyFile', ['gulpEjs'], function() {
    console.log('3. 复制资源文件');
    console.log('   复制css文件');
    gulp.src(config.PATH.src + "/css/*")
        .pipe(gulp.dest(config.PATH.dist + "/css/"));
    console.log('   复制js文件');
    gulp.src(config.PATH.src + "/js/*")
        .pipe(gulp.dest(config.PATH.dist + "/js/"));
    console.log('   复制img文件');
    gulp.src(config.PATH.src + "/img/*")
        .pipe(gulp.dest(config.PATH.dist + "/img/"));
    console.log('   复制fonts文件');
    gulp.src(config.PATH.src + "/fonts/*")
        .pipe(gulp.dest(config.PATH.dist + "/fonts/"));
});


//****打包发布到Dist环境*****//
gulp.task("dist", ["copyFile"], function() {
    console.log('dist环境编译完成');
});

// 默认任务
gulp.task("default", function() {
    console.log('============== Gulp Info ============');
    console.log('1. 使用 "gulp dist" 命令编译src到dist环境!');
    console.log('=====================================');
});