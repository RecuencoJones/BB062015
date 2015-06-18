module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        'http-server': {
            dev: {
                root: 'app',
                port: 9000,
                ext: 'html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-http-server');
    grunt.registerTask('run', ['http-server']);

};