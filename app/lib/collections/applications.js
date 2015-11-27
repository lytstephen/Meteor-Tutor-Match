Applications = new Mongo.Collection('applications');

Applications.attachSchema(new SimpleSchema({
  userId: {
    type: String,
    label: "userId"
  },
  jobId: {
    type: String,
    label: 'jobId'
  },
  description: {
    type: String,
    label: "Description",
    max: 500
  },
  createdAt: {
    type: Date
  }
}));

if (Meteor.isServer) {
  Applications.allow({
    insert: function (userId, doc) {
      return true;
    },

    remove: function (userId, doc) {
      return ownsDocument(userId, doc);
    }
  });
}
