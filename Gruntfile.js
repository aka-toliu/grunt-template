const sass = require('node-sass');
const grunt = require('grunt');
 
require('load-grunt-tasks')(grunt);
 
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
    watch: {
        scripts: {
          files: ['**/*.js', '**/*.scss', 'index.html'],
          tasks: ['concat', 'sass'],
          options: {
            spawn: false,
          },
        },
      },
    sass: {
        options: {
            implementation: sass,
            sourceMap: true
        },
        dist: {
            files: {
                'src/main.css': ['src/main.scss']
            }
        }
    },
    uglify: {
        my_target: {
          files: {
            'dest/output.min.js': ['src/main.js']
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
            'dest/output.min.css': ['src/main.css']
          }
        }
      },
      concat: {
        options: {
            separator: '\n \n'
        },
        styles: {
            src: ['src/styles/*.scss'],
            dest: 'src/main.scss'
        },
        scripts: {
          src: ['src/scripts/*.js'],
          dest: 'src/main.js'
      }

    },
});

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-browser-sync');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-cssmin');
 
grunt.registerTask('default', ['concat', 'sass', 'browserSync', 'watch']);
grunt.registerTask('build', ['concat', 'uglify', 'cssmin']);
