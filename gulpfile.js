var 	syntax        = 'scss'; // Syntax: sass or scss;

var 	gulp          			= require('gulp'),
		gutil         			= require('gulp-util' ),
		sass          			= require('gulp-sass'),
		browserSync   			= require('browser-sync'),
		concat        			= require('gulp-concat'),
		uglify        			= require('gulp-uglify'),
		cssnano       			= require('gulp-cssnano'),
		cleancss      			= require('gulp-clean-css'),
		rename        			= require('gulp-rename'),
		del      	  			= require('del'),
		//imagemin                = require('imagemin'),
		imagemin                = require('gulp-imagemin'),
    	imageminJpegRecompress 	= require('imagemin-jpeg-recompress'),
    	imageminJpegtran        = require('imagemin-jpegtran'),
		imageminPngquant        = require('imagemin-pngquant'),
		pngquant                = require('gulp-pngquant'),
		gulpPngquant            = require('gulp-pngquant'),
		cache               	= require('gulp-cache'),
		autoprefixer  			= require('gulp-autoprefixer'),
		notify        			= require("gulp-notify"),
		rsync         			= require('gulp-rsync'),
	    webp 					= require('gulp-webp'),
	    uncss 					= require('gulp-uncss');


gulp.task('styles', function() {
	return gulp.src('app/'+syntax+'/**/*.'+syntax+'')
	.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
	.pipe(rename({ suffix: '.min', prefix : '' }))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream());
});

gulp.task('js', function() {
	return gulp.src([
		//'app/libs/jquery/dist/jquery.min.js',
		//'app/libs/bootstrap/dist/js/bootstrap.min.js',
		'app/libs/lazyload/dist/lazyload.min.js',
		//'app/libs/fancybox/dist/jquery.fancybox.min.js',
		'app/libs/slick-carousel/slick/slick.min.js',
		'app/libs/jquery.maskedinput.js',
		'app/libs/jQueryFormStyler/dist/jquery.formstyler.min.js',
		'app/js/common.js', // Always at the end
		])
	.pipe(concat('scripts.min.js'))
    //.pipe(uglify()) // Mifify js (opt.)
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({ stream: true }));
});

gulp.task('code', function() {
	return gulp.src('app/*.html')
	.pipe(browserSync.reload({ stream: true }));
});


gulp.task('uncss', function () {
    return gulp.src('app/css/main.min.css')
        .pipe(uncss({
            //html: ['index.html', 'posts/**/*.html', 'http://example.com']
            //html: ['app/inner.html']
            html: ['app/*.html']
        }))
        //.pipe(gulp.dest('./out'));
        //.pipe(gulp.dest('dist/uncss'));
        .pipe(gulp.dest('app/css/uncss'));
});

gulp.task('browser-sync', function() {
	return browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		open: false,
		// online: false, // Work Offline Without Internet Connection
		// tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
	});
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imageminJpegRecompress({
        loops: 5,
        min: 75,
        max: 80,
        quality:'high'
      }),
      imagemin.svgo(),
      imagemin.optipng({optimizationLevel: 3}),
      pngquant({quality: '75-80', speed: 5})
    ],{
      verbose: true
    })))

	.pipe(gulp.dest('dist/img'));
});

gulp.task('webp', () =>
    gulp.src('app/img/**/*')
        .pipe(webp())
        .pipe(gulp.dest('dist/img/webp'))
);


gulp.task('img_old', function() {
	return imagemin(['app/img/**/*'], 'dist/img', {
		plugins: [
			imageminJpegtran(),
			imageminPngquant({
				quality: [0.6, 0.8]
			})
		]
	});
});


gulp.task('watch', function() {
	gulp.watch('app/'+syntax+'/**/*.'+syntax+'', gulp.parallel('styles'));
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], gulp.parallel('js'));
	gulp.watch('app/*.html', gulp.parallel('code'));
});


gulp.task('clear', function() {
	return cache.clearAll();
});

gulp.task('clean', function() {
	return del('dist');
});


gulp.task('buildCss', function() {
	return gulp.src('app/css/main.min.css')
		.pipe(gulp.dest('dist/css'));		
});

gulp.task('buildJs', function() {
	return gulp.src('app/js/**/*')
		.pipe(gulp.dest('dist/js'));
});

gulp.task('buildFonts', function() {
	return gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));
});

gulp.task('buildHtml', function() {
	return gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('buildSass', function() {
	return gulp.src('app/'+syntax+'/**/*')
		.pipe(gulp.dest('dist/'+syntax+''));
});


gulp.task('build', 
	gulp.series('clear',gulp.parallel('clean','styles','js'), 
	gulp.parallel('buildCss','buildJs','buildFonts','buildHtml','buildSass','img')
	//gulp.parallel('buildCss','buildJs','buildFonts','buildHtml','buildSass')
));


gulp.task('default', gulp.parallel('watch','styles','js','browser-sync'));
