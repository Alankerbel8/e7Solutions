/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
  evil_icons: {
    dist: {
      files: {
        "build/index.html": "src/index.html",
         "build/authoring.html": "src/authoring.html",      
         "build/dtc.html": "src/dtc.html",                
         "build/recovery.html": "src/recovery.html",
         "build/comparison.html": "src/comparison.html",    
         "build/home.html": "src/home.html",                 
         "build/services.html": "src/services.html",
         "build/conversions.html": "src/conversions.html",   
         "build/recentactivity": "src/recentactivity.html", 
         "build/udefined.html": "src/udefined.html",
         "build/navbar.html": "src/navbar.html",
         "build/navbar2.html": "src/navbar2.html",
         "build/overview.html": "src/overview.html",
         "build/validation.html": "src/validation.html"

      }
    },
  },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-evil-icons');

  // Default task.
  grunt.registerTask('default', ['jshint']);

};
