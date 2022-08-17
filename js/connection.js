let db;
let dbReq = indexedDB.open('myDatabase', 2);


dbReq.onupgradeneeded = function(event) {
    db = event.target.result;
    db.createObjectStore('notes', {autoIncrement: true});
    db.createObjectStore('favorites', {autoIncrement: true});
  }

  dbReq.onsuccess = function(event) {
    db = event.target.result;
  }

  dbReq.onerror = function(event) {
    alert('error opening database ' + event.target.errorCode);
  }

 export function addNote(message) {
    // Start a database transaction and get the notes object store
    let tx = db.transaction(['notes'], 'readwrite');
    let store = tx.objectStore('notes');
    // Put the sticky note into the object store
    store.add(message);
    // Wait for the database transaction to complete
    tx.oncomplete = function() { console.log('stored note!') }
    tx.onerror = function(event) {
      alert('error storing note ' + event.target.errorCode);
    }
 }
    export function addFavorite(message) {
        // Start a database transaction and get the notes object store
        let tx = db.transaction(['favorites'], 'readwrite');
        let store = tx.objectStore('favorites');
        // Put the sticky note into the object store
        store.add(message);
        // Wait for the database transaction to complete
        tx.oncomplete = function() { console.log('stored note!') }
        tx.onerror = function(event) {
          alert('error storing note ' + event.target.errorCode);
        }
    }