/* eslint-disable */
const games = require('./games.json');
const apps = require('./apps.json');

[apps, games].flat().forEach((app) => {
  if (app.icon) app.icon = `static/apps-images/${app.icon}`;
  app.screenshots = app.screenshots.map((fileName) => `static/apps-images/${fileName}`);
  app.screenshotsThumbs = app.screenshots.map((fileName) => fileName.replace('.jpg', '-thumb.jpg'));
});

export { games, apps };

