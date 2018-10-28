module.exports = function(grunt) {
  grunt.initConfig({
  concat: {
    options: {
      separator: '',
    },
    dist: {
      src: ['src/scss/_vars-mixins.scss' , 'src/scss/_import-moodle.scss', 'src/scss/_typo.scss', 'src/scss/_buttons.scss', 'src/scss/_icons.scss', 'src/scss/_nav.scss', 'src/scss/_layout.scss','src/scss/_modules.scss'],
      dest: 'dist/boost-customized.scss',
    },
  },
  sass: {
      dist: {
          options: {
              style: 'expanded' // Can be nested, compact, compressed, expanded.
          },
          files: [{
              expand: true, // Recursive Output style.
              cwd: "src/scss/", // The startup directory
              src: ["**/*.scss"], // Source files
              dest: "dist/css/", // Destination
              ext: ".css" // File extension
          }]
      }
  },
  watch: {

    concat: {
      files: ['src/scss/**/*.scss'],
      tasks: ['concat']
    },
    sass: {
        files: 'src/scss/**/*.{scss,sass}',
        tasks: ['sass']
    },
    }
});
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.registerTask('default', ['concat','sass']);
};
