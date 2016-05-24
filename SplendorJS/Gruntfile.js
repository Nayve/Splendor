module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			css: {
				files: 'scss/*.scss',
				tasks: [
                    'sass'
                ]
			}
		},
		sass: {
			dist: {
				files: {
					'css/splendor.css' : 'scss/splendor.scss'
				}
			}
		}
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Define tasks
	grunt.registerTask('default',[
		'prod',
		'watch'
	]);

	grunt.registerTask('prod',[
		'sass'
	]);
}