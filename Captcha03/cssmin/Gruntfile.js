module.exports = function(grunt) {
	
	grunt.initConfig({
		cssmin: {
		  combine: {
			files: {
			  '_release/css/output1.css': ['_dev/css/*.css']
			}
		  }
		},
	});
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	// Default task.
	grunt.registerTask('default', ['cssmin']);
};