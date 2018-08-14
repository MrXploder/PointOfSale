module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-gitinfo');
  grunt.loadNpmTasks('grunt-ng-constant');
  grunt.loadNpmTasks('grunt-script-link-tags');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-obfuscator');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-html2js');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    gitinfo: {},
    ngconstant: {
      options: {
        space: ' ',
        wrap: true,
        deps: [
        'ui.router',
        'ui.bootstrap',
        'ngStorage',
        'ngResource',
        'ngDialog',
        'platanus.rut',
        'angular-loading-bar',
        'angularUtils.directives.dirPagination'
        ],
        dest: "public/src/module/10index.js",
        name: 'angularApp'
      },
      dist: {
        constants: {
          'ENV': '<%= gitinfo.local.branch.current %>'
        }
      }
    },
    html2js: {
      options: {
        base: "",
        module: 'templates-main',
      },
      main: {
        src: ['public/src/**/*.html'],
        dest: 'public/src/vendor/99angular-templates.js'
      },
      dev: {
        src: ['server/dummy.html'],
        dest: 'public/src/vendor/99angular-templates.js'
      }
    },
    tags: {
      build: {
        options: {
          scriptTemplate: '<script src="{{ path }}?v=<%= gitinfo.local.branch.current.SHA %>"></script>',
          linkTemplate: '<link rel="stylesheet" href="{{ path }}?v=<%= gitinfo.local.branch.current.SHA %>"/>',
          openTag: '<!-- start template tags -->',
          closeTag: '<!-- end template tags -->'
        },
        src: [
        'public/css/*.css',
        'public/src/vendor/*.js',
        'public/src/module/*.js',
        'public/src/directive/**/*.js',
        'public/src/factory/**/*.js',
        'public/src/filter/**/*.js',
        'public/src/module/dialog/**/*.js',
        'public/src/module/route/**/*.js',
        ],
        dest: 'public/index.html'
      }
    },
    concat: {
      options: {
        separator: '\n',
      },
      js: {
        src: [
        'public/src/vendor/*.js',
        'public/src/module/*.js',
        'public/src/directive/**/*.js',
        'public/src/factory/**/*.js',
        'public/src/filter/**/*.js',
        'public/src/module/dialog/**/*.js',
        'public/src/module/route/**/*.js'
        ],
        dest: 'public/dist/<%= gitinfo.local.branch.current.SHA %>.js',
      },
      css:{
        src: ['css/*.css'],
        dest: 'public/dist/<%= gitinfo.local.branch.current.SHA %>.css',
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'public/dist/<%= gitinfo.local.branch.current.SHA %>.min.js': ['<%= concat.js.dest %>']
        }
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'public/dist/<%= gitinfo.local.branch.current.SHA %>.min.css': ['css/*.css']
        }
      }
    },
    obfuscator: {
      task1: {
        files: {
          'public/dist/<%= gitinfo.local.branch.current.SHA %>.min.obs.js': ['public/dist/<%= gitinfo.local.branch.current.SHA %>.min.js']
        }
      }
    },
    clean: {
      options: {
        'no-write': false
      },
      src_folder: ['public/src/'],
      tmp_folder: ['tmp/'],
      css_folder: ['css/'],
      final_cleanup: ['public/dist/*.css', 'public/dist/*.js', '!public/dist/*.min.css', '!public/dist/*.min.obs.js'],
    }
  });



  grunt.registerTask('build', ['gitinfo', 'ngconstant', 'html2js:main',  'html2js', 'concat', 'uglify', 'cssmin', 'obfuscator', 'clean']);
  grunt.registerTask('dev', ['gitinfo', 'ngconstant', 'html2js:dev', 'tags']);
};