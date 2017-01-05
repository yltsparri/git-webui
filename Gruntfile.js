module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      react: {
        expand: true,
        flatten: true,
        src: ['node_modules/react/dist/react.min.js'],
        dest: 'dist/share/git-webui/webui/js/',
      },
      redux: {
        expand: true,
        flatten: true,
        src: ['node_modules/redux/dist/redux.min.js'],
        dest: 'dist/share/git-webui/webui/js/',
      },
      reactRedux: {
        expand: true,
        flatten: true,
        src: ['node_modules/react-redux/dist/react-redux.min.js'],
        dest: 'dist/share/git-webui/webui/js/',
      },
      reactDOM: {
        expand: true,
        flatten: true,
        src: ['node_modules/react-dom/dist/react-dom.min.js'],
        dest: 'dist/share/git-webui/webui/js/',
      },
      git_webui: {
        options: {
          mode: true,
        },
        expand: true,
        cwd: 'src',
        src: ['libexec/**', 'share/git-webui/webui/img/**', 'share/**/*.html'],
        dest: 'dist',
      },
      release: {
        options: {
          mode: true,
        },
        expand: true,
        cwd: 'dist',
        src: '**',
        dest: 'release',
      },
    },

    less: {
      options: {
        paths: ['node_modules/bootstrap/less/']
      },
      files: {
        expand: true,
        cwd: 'src',
        src: 'share/git-webui/webui/css/*.less',
        dest: 'dist',
        ext: '.css',
      }
    },

    shell: {
      serve: {
        command: './dist/libexec/git-core/git-webui'
      },
    },

    watch: {
      scripts: {
        files: ['src/libexec/**/*', 'src/share/**/*.js', 'src/share/**/*.html'],
        tasks: 'copy:git_webui'
      },
      css: {
        files: 'src/**/*.less',
        tasks: 'less',
      },
    },

    webpack: {
      build: require('./config/webpack.config.js')(grunt.option('environment') || process.env.NODE_ENV || 'development')
    },

    clean: ['dist'],
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.registerTask('copytodist', ['copy:react', 'copy:reactDOM', 'copy:redux', 'copy:reactRedux', 'copy:git_webui']);
  grunt.registerTask('default', ['webpack:build', 'copytodist', 'less']);
  grunt.registerTask('serve', ['default', 'shell:serve']);
  grunt.registerTask('release', ['default', 'copy:release']);
};
