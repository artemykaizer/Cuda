var gulp = require("gulp");
var less = require("gulp-less");
var browserSync = require("browser-sync");
var autoprefixer = require("gulp-autoprefixer");
var minify = require("gulp-minify-css");
var concat = require('gulp-concat');
var order = require("gulp-order");
var uglify = require('gulp-uglify');

gulp.task("less", function() {
	gulp.src("src/less/**/*.less")
		.pipe(less())
		.pipe(order([
  			  "src/less/blocks/*.less",
  			  "src/less/media.less"
 			 ]))
		.pipe(autoprefixer({
            browsers: ['last 2 versions', 'IE 11', 'Firefox ESR'],
            cascade: false
        }))
		.pipe(minify())
		.pipe(concat("style.css"))
		.pipe(gulp.dest("build/css"))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task("html", function() {
	gulp.src("src/index.html")
		.pipe(gulp.dest("build"))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task("js", function(){
	gulp.src("src/js/*.js")

		.pipe(gulp.dest("build/js"))
		.pipe(browserSync.reload({
			stream: true
		}))
})

gulp.task("img", function() {
	gulp.src("src/img/*png*")
		.pipe(gulp.dest("build/img"))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task("browserSync", function(){
	browserSync({
		server: {
			baseDir: "build"
		}
	})
})

gulp.task("watch", ["browserSync", "less", "html", "img", "js"], function() {
	gulp.watch("src/less/**/*.less", ["less"])
	gulp.watch("src/index.html", ["html"])
	gulp.watch("src/img/*.png", ["img"])
	gulp.watch("src/js/*.js", ["js"])
})