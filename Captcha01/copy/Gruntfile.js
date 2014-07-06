module.exports = function(grunt) {
	grunt.initConfig({
		copy: {
			main: {
				expand: true,
				flatten: true,
				src: '_dev/img/*',
				dest: '_release/img/',
				filter: 'isFile'
			},
		},
	});
	grunt.loadNpmTasks('grunt-contrib-copy');
	
	// Default task.
	grunt.registerTask('default', ['copy']);
};