module.exports = function(grunt) {
	
	grunt.initConfig({
		clean: {
			build: {
				src: ['_release/*']
			}
		},
		compass: {
			dist: {
				options: {
				config: 'config.rb'
				}
			}
		},
		copy: {
			main: {
				expand: true,
				flatten: true,
				src: '_dev/img/*',
				dest: '_release/img/',
				filter: 'isFile'
			},
			main3: {
				expand: true,
				flatten: true,
				src: '_dev/*.*',
				dest: '_release/',
				filter: 'isFile'
			},
			main4: {
				expand: true,
				flatten: true,
				src: '_dev/js/*',
				dest: '_release/js/',
				filter: 'isFile'
			}
		},
		csscomb: {
			foo: {
				options: {
					config: 'sort.json'
				},
				files: {
					'_release/css/comb.css': ['_dev/css/*.css'],
				},
			}
		},
		cssmin: {
			combine: {
				files: {
					'_release/css/style-min.css': ['_release/css/*.css']
				}
			}
		},
		watch: {
			compass: {
				files: ['_dev/scss/*.scss','_dev/scss/*.sass', '_dev/img/*', '_dev/js/*'],
				tasks: ['clean', 'compass', 'copy', 'csscomb', 'cssmin'],
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-csscomb');

	
	// Default task.
	grunt.registerTask('default', ['clean', 'compass', 'copy', 'csscomb', 'cssmin','watch']);
};