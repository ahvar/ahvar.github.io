/*
 * grunt-config-minify
 * Licensed under ISC
 */
'use strict';
const htmlMinifierTerser = require('html-minifier-terser');

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            dist: {
                cwd: 'src/',
                expand: true,
                src: '**',
                dest: 'dist/'
            }
        },

        concat: {
            basic: {
                src: ['src/styles/style.css'],
                dest: 'dist/styles/style.css',
            }
        },

        inline: {
            dist: {
                options: {
                    cssmin: true,
                    uglify: true,
                    tag: '_inline'
                },
                src: 'src/index.html',
                dest: 'dist/index.html'
            }
        },

        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/'
                }]
            }
        },

        mincss: {
            compress: {
                files: {
                    'dist/css/style.css': ['src/css/style.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-responsive-images');

    grunt.registerTask('htmlmin', 'Minify HTML files', function () {
        const done = this.async();
        const files = grunt.file.expand('dist/*.html');
        files.forEach(file => {
            const original = grunt.file.read(file);
            const minified = htmlMinifierTerser.minify(original, {
                removeComments: true,
                collapseWhitespace: true
            });
            grunt.file.write(file, minified);
        });
        done();
    });

    grunt.registerTask('default', ['copy', 'concat', 'inline', 'htmlmin']);
};/*
 * grunt-config-minify
 * Licensed under ISC
 */
'use strict';
module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            dist: {
                cwd: 'src/',
                expand: true,
                src: '**',
                dest: 'dist/'
            }
        },

        concat: {
            basic: {
                src: ['src/styles/style.css'],
                dest: 'dist/styles/style.css',
            }
        },

        inline: {
            dist: {
                options: {
                    cssmin: true,
                    uglify: true,
                    tag: '_inline'
                },
                src: 'src/index.html',
                dest: 'dist/index.html'
            }
        },

        htmlmin: {
            options: {
                removecomments: true,
                collapseWhitespace: true
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'dist/',
                        src: ['*.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },

        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/'
                }]
            }
        },

        mincss: {
            compress: {
                files: {
                    'dist/css/style.css': ['src/css/style.css']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default', ['copy', 'concat', 'inline', 'htmlmin']);
};
