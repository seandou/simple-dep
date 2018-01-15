'use strict';

const projectName = '{{ projectName }}';
const repositoryUrl = '{{ repositoryUrl }}';

const deployTo = '/var/www/' + projectName;
const deployToCurrent = deployTo + '/current';
const homepath = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
const workspace = homepath + '/.cache/' + projectName;

module.exports = function (shipit) {
  require('shipit-deploy')(shipit);
  require('shipit-shared')(shipit);

  shipit.initConfig({
    default: {
      workspace: workspace,
      repositoryUrl: repositoryUrl,
      branch: 'master',
      deployTo: deployTo,
      ignores: [
        '.svn',
        '.git',
        'tmp'
      ],
      keepReleases: 7,
      deleteOnRollback: false,
      shallowClone: true,
      shared: {
        baseDir: 'shared',
        dirs: [
        ]
      }
    },

    production: {
      servers: ''
    },

    staging: {
      servers: ''
    }
  });

  // shipit.on('published', function(){
  //   shipit.start('post-publish');
  // });

  // shipit.task('post-publish', ['set-env']);

  // shipit.blTask('set-env', function() {
  //   return shipit.remote(
  //   );
  // });

};
