module.exports = function(grunt) {
	
	grunt.initConfig({
		clean: {
			build: {
				src: ['_dev/css/*.css', '_dev/img/*']
			}
		},
	});
	grunt.loadNpmTasks('grunt-contrib-clean');
	
	// Default task.
	grunt.registerTask('default', ['clean']);
};