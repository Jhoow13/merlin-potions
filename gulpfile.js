var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var less = require('gulp-less');

var appFiles = {
    cssDependences:[
        'node_modules/bootstrap/dist/css/bootstrap.min.css'
    ],
    lessFiles:[
        'styles/*.less'
    ],
    jsDependences:[
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/js/transition.js',
        'node_modules/bootstrap/js/collapse.js',
    ],
    jsFiles:[
        'scripts/*.js'
    ]
};

gulp.task('clean', function(){
    return gulp.src('src/*')
    .pipe(clean());
});

gulp.task('css', function(){
    return gulp.src(appFiles.cssDependences)
    .pipe(concat('css-dependences.css'))
    .pipe(gulp.dest('src/styles/'))
});

gulp.task('less', function(){
    return gulp.src(appFiles.lessFiles)
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('src/styles/'))
});

gulp.task('js-dependences', function(){
    return gulp.src(appFiles.jsDependences)
    .pipe(concat('js-dependences.js'))
    .pipe(gulp.dest('src/js/'))
})

gulp.task('js', function(){
    return gulp.src(appFiles.jsFiles)
    .pipe(concat('script.js'))
    .pipe(gulp.dest('src/js/'));
});

gulp.task('reload', function(done){
    browserSync.reload();
    done();
});

gulp.task('serve', ['css','less', 'js-dependences', 'js'], function(){
  browserSync.init({
    server: {
        baseDir: "./"
    }
  });

  gulp.watch('index.html', ['reload']);
  //gulp.watch(appFiles.cssFiles, ['css', 'reload']);
  gulp.watch(appFiles.lessFiles, ['less', 'reload']);
  gulp.watch(appFiles.jsFiles, ['js', 'reload']);
});

gulp.task('default',['serve']);