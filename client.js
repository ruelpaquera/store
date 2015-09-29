// Users can add multiple storage adapters to Storage, but we might dont care
// about wich to use, so here we provide a small helper api to the Storage object
// to get the "best" storage available.

// List of possible storage adapters, the best is at the top
var _rankedStorageAdapterList = [
  'localStorage'
];

// This function will return the name of best storage adapter available.
var _getTheBestStorageAdapterAvailable = function() {

  // Iterate over the ranked list of storge adapters
  for (var i = 0; i < _rankedStorageAdapterList.length; i++) {

    // Set surgestion to the name of a storage adapter
    var surgestion = _rankedStorageAdapterList[i];

    // If the storage is found then this must be the best storage adapter
    if (Store[surgestion]) {
      return surgestion;
    }
  }

  // Got nothing, we return null
  return null;
};

// This function will return the name of the passed in storage adapter
var _getStorageNameFromStorageAdapter = function(storageAdapterInstance) {

  // Iterate over the ranked list of storge adapters
  for (var i = 0; i <_rankedStorageAdapterList.length; i++) {

    // Set storageAdapterName to the name of a storage adapter
    var storageAdapterName = _rankedStorageAdapterList[i];

    // StorageAdapter
    var StorageAdapter = Store[storageAdapterName];

    // Check if the storage adapter is found,
    if (StorageAdapter) {

      // check if the handed objectis an instance of the storage adapter, if so
      // return the storage adapter name
      if (storageAdapterInstance instanceof StorageAdapter) {
        return storageAdapterName;
      }

      // We could add a === check allowing a class check
      if (storageAdapterInstance === StorageAdapter) {
        return storageAdapterName;
      }

    }
  }
};

// Get the storage name from storage adapter or its instance
Store.getName = function(storageAdapterInstance) {

  // Tries to find the name of the storage adapter or instance given
  // returns null if no match
  return _getStorageNameFromStorageAdapter(storageAdapterInstance);

};

// Returns a storage adapter, either the best on the system or a specific if
// name is set as an argument.
Store.getStorage = function(name /* Optional */) {

  // Check if name is set and is a string, if not set it to the best storage
  // adapter available
  if (name !== ''+name) {
    name = _getTheBestStorageAdapterAvailable();
  }

  // Return the storage by name, if none found then return noop
  return Store[name] || function() {};

};

// Returns an instance of the best possible storage
Store.create = function(options) {

  // Get the best storage available
  var storage = Store.getStorage();

  // Return the instance
  return new storage(options);

};
