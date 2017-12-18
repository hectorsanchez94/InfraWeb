exports.insert = function(db, doc, callback) {
  db.collection('users').insert(doc);
  callback(null);
};

        /*
         *  Finds all documents in the "movies" collection
         *  whose "director" field equals the given director,
         *  ordered by the movie's "title" field. See
         *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
         */
