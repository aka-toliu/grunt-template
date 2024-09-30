module.exports = function(grunt) {
    grunt.initConfig({

        browserSync: {
            public: {
                bsFiles: {
                    src: ['src/**/*', './'],
                   
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './'
                    }
                }
            }
        },

        concat: {

          options: {

              separator: '\n \n'

          },

          styles: {

              src: ['src/scss/*.scss'],
              dest: 'src/concat.scss'
          },
          scripts: {

            src: ['src/js/*.js'],
            dest: 'src/concat.js'
        }

      },

        watch: {
            scripts: {
              files: ['src/js/*.js', 'src/scss/*.scss', 'index.html'],
              tasks: ['concat', 'sass', 'cssmin', 'uglify'],
              options: {
                spawn: false,
              },
            },
          },

        sass: {
          dist: {
            files: {
              'src/concat.css': 'src/concat.scss'
            }
          }
        },

        cssmin: {
          options: {
            mergeIntoShorthands: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              'dist/output.min.css': 'src/concat.css'
            }
          }
        },
        uglify: {
          my_target: {
            files: {
              'dist/output.min.js': 'src/concat.js'
            }
          }
        }
      });



      grunt.loadNpmTasks('grunt-contrib-sass');
      grunt.loadNpmTasks('grunt-browser-sync');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-cssmin');
      grunt.loadNpmTasks('grunt-contrib-uglify');

      grunt.registerTask('default', ["concat", 'sass', 'cssmin', 'uglify', 'browserSync', 'watch']);
      grunt.registerTask('build', ["concat", 'sass', 'cssmin', 'uglify']);
  };
   
