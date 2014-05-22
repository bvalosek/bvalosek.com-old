module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  require('./tasks/client.js')(grunt);

  grunt.initConfig({
    client: {
      client: {
        src: './app/client',
      }
    },
    watch: {
      client: {
        files: ['./style/**', './app/client/**', './public/**'],
        tasks: ['client'],
        options: { livereload: true }
      }
    }
  });

  grunt.registerTask('default', [
    'client'
  ]);
};
