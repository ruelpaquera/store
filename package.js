Package.describe({
  name: "ground:store",
  version: "0.1.2",
  summary: "Adds Store scope",
  git: "https://github.com/GroundMeteor/store.git"
});

Package.onUse(function (api) {

  api.versionsFrom('1.2');

  api.export('Store');

  api.addFiles('storage.scope.js', ['client', 'server']);

  api.addFiles('client.js', 'client');

});

Package.onTest(function (api) {
  api.use('ground:store', ['client', 'server']);

  api.use('test-helpers', 'client');
  api.use(['tinytest', 'underscore', 'ejson']);

  api.addFiles('scope.tests.js', 'server');

});
