/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = (() => Promise.resolve(require('conventional-changelog-angular'))
  .then((config) => {
    const bkTransform = config.writerOpts.transform;
    // eslint-disable-next-line no-param-reassign
    config.writerOpts.transform = (commit, context) => {
      commit.notes.push({ title: '' });
      const ret = bkTransform(commit, context);
      if (commit.type === `chore`) {
        // eslint-disable-next-line no-param-reassign
        commit.type = `Chore`;
      }
      commit.notes.pop();
      return ret;
    };
    return config;
  }))();
