Package.describe({
  name: "ground:store",
  version: "0.0.0",
  summary: "Adds Store scope",
  git: "https://github.com/GroundMeteor/store.git"
});

Package.on_use(function (api) {

  api.versionsFrom && api.versionsFrom('METEOR@0.9.1');

  api.export('Store');

  api.add_files('storage.scope.js', ['client', 'server']);

  api.add_files('client.js', 'client');

});

Package.on_test(function (api) {
  if (api.versionsFrom) {
    api.use('ground:store', ['client', 'server']);
  } else {
    api.use('ground-store', ['client', 'server']);
  }
  api.use('test-helpers', 'client');
  api.use(['tinytest', 'underscore', 'ejson']);

  api.add_files('scope.tests.js', 'server');

});
