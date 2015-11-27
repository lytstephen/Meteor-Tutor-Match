if (Meteor.isServer) {

  Meteor.users.allow({

    update: function (userId, doc, fieldNames, modifier) {
      return userId === doc._id;
    }

  });
}
