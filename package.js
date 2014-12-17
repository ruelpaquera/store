Package.describe({
  name: "ground:store",
  version: "0.1.0",
  summary: "Adds Store scope",
  git: "https://github.com/GroundMeteor/store.git"
});

Package.onUse(function (api) {

  api.versionsFrom && api.versionsFrom('1.0');

  api.export('Store');

  api.addFiles('storage.scope.js', ['client', 'server']);

  api.addFiles('client.js', 'client');

});

Package.onTest(function (api) {
  if (api.versionsFrom) {
    api.use('ground:store', ['client', 'server']);
  } else {
    api.use('ground-store', ['client', 'server']);
  }
  api.use('test-helpers', 'client');
  api.use(['tinytest', 'underscore', 'ejson']);

  api.addFiles('scope.tests.js', 'server');

});
