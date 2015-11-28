Jobs = new Mongo.Collection('jobs');

Jobs.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  subjects: {
    type: [String],
    label: 'Subjects',
    optional: true
  },
  location: {
    type: String,
    label: "Location",
    max: 200
  },
  price: {
    type: String,
    label: "Price",
    max: 200
  },
  description: {
    type: String,
    label: "Description",
    max: 500,
    optional: true
  },
  userId: {
    type: String
  },
  submitted: {
    type: Date
  },
  tutorId: {
    type: String,
    optional: true
  }
}));


if (Meteor.isServer) {
  Jobs.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return ownsDocument(userId, doc)
    },

    remove: function (userId, doc) {
      return ownsDocument(userId, doc);
    }
  });
}
