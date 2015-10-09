module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    shell: {
      target: {
        command: "curl 'https://weddin.firebaseio.com/.json' -o 'weddin-data-backup.json'"
      }
    },

    bower: {
      install: {
        options: {
          install: true,
          copy: false,
          targetDir: './lib',
          cleanTargetDir: true
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/app.js': ['dist/app.js']
        },
        options: {
          mangle: false
        }
      }
    },

    html2js: {
      dist: {
        src: ['templates/*.html'],
        dest: 'temp/templates.js'
      }
    },

    clean: {
      temp: {
        src: ['tmp']
      }
    },

    concat: {
      options: {
        seperator: ';'
      },
      dist: {
        src: ['js/*.js', 'js/**/*.js', 'tmp/*.js'],
        dest: 'dist/app.js'
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'js/*.js', 'js/**/*.js']
    },

    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 8080
        }
      }
    },

    watch: {
      dev: {
        files: ['Gruntfile.js', 'js/*.js', 'js/**/*.js', '*.html', 'templates/*.html'],
        tasks: ['jshint', 'html2js:dist', 'concat:dist', 'clean:temp'],
        options: {
          atBegin: true
        }
      },
      min: {
        files: ['Gruntfile.js', 'js/*.js', '*.html'],
        tasks: ['jshint', 'html2js:dist', 'concat:dist', 'clean:temp', 'uglify:dist'],
        options: {
          atBegin: true
        }
      }
    },

    compress: {
      dist: {
        options: {
          archive: 'dist/<%= pkd.name %>-<%= pkg.version %>.zip'
        },
        files: [{
          src: ['index.html'],
          dest: '/'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('dev', ['shell', 'bower', 'connect:server', 'watch:dev']);
  grunt.registerTask('minified', ['bower', 'connect:server', 'watch:min']);
  grunt.registerTask('package', ['bower', 'jshint', 'html2js:dist', 'concat:dist', 'uglify:dist', 'clean:temp', 'compress:dist']);
};
