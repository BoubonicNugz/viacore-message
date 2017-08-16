'use strict';

var gulp = require('gulp');
var viacoreTasks = require('viacore-build');

viacoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
