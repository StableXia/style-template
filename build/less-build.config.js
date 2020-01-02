const { parallel, dest, src } = require('gulp')
const less = require('gulp-less')

function copyFile() {
    return src('../styles/less/**').pipe(dest('../lib/less'))
}

function buildLess() {
    return src('../styles/less/index.less')
        .pipe(less())
        .pipe(dest('../lib/less/'))
}

exports.default = parallel(copyFile, buildLess)
