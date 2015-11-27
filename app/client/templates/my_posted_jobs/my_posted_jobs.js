/*****************************************************************************/
/* MyPostedJobs: Event Handlers */
/*****************************************************************************/
Template.my_posted_jobs.events({
});

/*****************************************************************************/
/* MyPostedJobs: Helpers */
/*****************************************************************************/
Template.my_posted_jobs.helpers({
  myJobs: function() {
    var userId = Meteor.user()._id;

    return Jobs.find({userId: userId}, {sort: {submitted: -1}});
  },

  submitted_readable: function() {
    return moment(this.createdAt).format('DD/MM/YYYY');
  }
});

/*****************************************************************************/
/* MyPostedJobs: Lifecycle Hooks */
/*****************************************************************************/
Template.my_posted_jobs.onCreated(function () {
});

Template.my_posted_jobs.onRendered(function () {
});

Template.my_posted_jobs.onDestroyed(function () {
});
