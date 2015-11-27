ProfileImages = new FS.Collection("ProfileImages", {
  stores: [new FS.Store.GridFS("ProfileImages")]
});

UserImages = new Mongo.Collection("UserImages");

if (Meteor.isServer) {
  ProfileImages.allow({
    insert: function(userId, doc) {
      return true;
    },
    update: function(userId, doc) {
      return true;
    },
    remove: function(userId, doc) {
      return true;
    },
    download: function() {
      return true;
    }
  });

  UserImages.allow({
    insert: function(userId, doc) {
      return true;
    },
    update: function(userId, doc) {
      return true;
    },
    remove: function(userId, doc) {
      return true;
    }
  });
}