const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");
function css(done) {
  //funcion con callback(done)
  src("src/scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass()) //Identificar el archivo
    .pipe(dest("build/css")); //Guardar el archivo
  done();
}
function dev(done) {
  watch("src/scss/**/*.scss", css);
  done();
}
exports.css = css;
exports.dev = dev;
