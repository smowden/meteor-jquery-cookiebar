Package.describe({
  name: 'smowden:jquery-cookiebar',
  version: '1.0.1',
  // Brief, one-line summary of the package.
  summary: 'Drop in of the jquery.cookiebar plugin to comply with EU cookie law',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/smowden/meteor-jquery-cookiebar',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use("jquery", "client");
  api.use("benjaminrh:jquery-cookie@0.1.0", "client");
  api.addFiles('jquery.cookiebar/jquery.cookiebar.js', "client");
  api.addFiles('jquery.cookiebar/jquery.cookiebar.css', "client");
});
