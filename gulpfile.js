const gulp = require('gulp');
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");

//compilação do sass
function compilarSass() {
    return gulp.src("./app/source/styles/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("./app/dist/styles"));
}

// comprimir imagens
function comprimirImagens() {
    return gulp.src("./app/source/imagens/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./app/dist/imagens"));
}

function comprimirJavaScript(){
    return gulp.src("./app/source/scripts/*.js")
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest("./app/dist/scripts"))
}

exports.sass = compilarSass;
exports.imagemin = comprimirImagens;
exports.java_script = comprimirJavaScript;