const {src, dest, watch, series} = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
};

function serveSass() {
  return src("./sass/**/*.sass", "./sass/**/*.scss")
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
  }))
    .pipe(dest("./css"))
    .pipe(browserSync.stream())
};

function minCSS(done) {
  src("./css/*.css")
  .pipe(cleanCSS())
  .pipe(dest("dist/css"));
  done();
};

function minJS(done) {
  src("js/**.js")
    .pipe(minify({
      ext:{
        min: '.js',
      },
      noSource: true,
      ignoreFiles: ['*.min.js'],
    }))
    .pipe(dest("dist/js"))
    .pipe(uglify())
  src("js/**.min.js").pipe(dest("dist/js"))
  done();
};
function html(done) {
  src("**.html")
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(dest("dist/"));
  done();
}
function php(done) {
src("**.php")
  .pipe(dest("dist/"));
src("phpmailer/**/**")
  .pipe(dest("dist/phpmailer"));
  done();
}
function fonts(done) {
  src("fonts/**/**")
    .pipe(dest("dist/fonts"));
    done();
  }
function minIMG(done){
  src("img/**/**")
    .pipe(imagemin())
    .pipe(dest("dist/img"));
  done();
}

exports.serve = bs;
exports.js = minIMG;
exports.min = series(minCSS, html);