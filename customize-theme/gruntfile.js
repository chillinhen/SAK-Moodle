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
  watch: {
    files: ['src/scss/**/*.scss'],
    tasks: ['concat']
    }
});
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.registerTask('default', ['concat']);
};
