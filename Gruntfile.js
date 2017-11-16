module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build:{
        files: [{
          expand: true,
          cwd: '.',
          src: ['js/*.js', '!js/*.min.js'],
          dest: 'dist',
          ext: '.min.js'
        }]
      }
      
    },
    sass: { 
      dist: {
        options: {
          style: 'expanded',
          update: true
        },
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: 'css/',
          ext: '.css'
        }]
      }
    },
    postcss: {
      options:{
        map:true,
        processors: [
        require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
      ]
      },
      dist:{
        src:'css/*.css'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: '.',
          src: ['css/*.css', '!css/*.min.css'],
          dest: 'dist',
          ext: '.min.css'
        }]
      }
    },
   // Watch
   watch: {
     html: {
       files: ['*.html','*.php', 'includes/*.html', 'includes/*.php'],
       options: {
         livereload: true,
       }
     },
     scss: {
         files: ['scss/*','bower_components/bootstrap/scss/**/*'],
         tasks: ['sass', 'postcss', 'cssmin'],
         options: {
           livereload: true,
         }
       },
       css: {
         files: ['css/*.css'],
         tasks: ['cssmin'],
         options: {
           livereload: true,
         }
       },
       js: {
         files: ['js/*.js'],
         tasks: ['uglify'],
         options: {
           livereload: true,
         }
       },
       img: {
         files: ['img/*.jpg', 'img/*.png'],
         options: {
           livereload: true,
         }
       }
     },
    browserSync: {
      bsFiles: {
        src: ['css/*.css', '*.html', '*.php', 'includes/*.html','includes/*.php','js/*.js']
      },
      options: {
        // server: {
        //   baseDir: "./"
        // },
        proxy:"localhost/nairobianpoty",
        // xip: true,
        ghostMode: true,
        watchTask: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('default', [ 'browserSync', 'watch' ]);
  grunt.registerTask(['uglify'], ['sass'], ['postcss'], ['cssmin'] );

};