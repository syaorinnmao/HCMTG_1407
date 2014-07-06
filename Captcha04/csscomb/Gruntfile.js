module.exports = function(grunt) {
	
	grunt.initConfig({
	csscomb: {
			foo: {
				options: {
					config: 'sort.json'
				},
				files: {
					'css_seikei/seikei.css': ['css_moto/moto.css'],
				},
			}
		}
	});
	grunt.loadNpmTasks('grunt-csscomb');
	// Default task.
	grunt.registerTask('default', ['csscomb']);
};