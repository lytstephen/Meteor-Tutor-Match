/*****************************************************************************/
/* PostJob: Event Handlers */
/*****************************************************************************/
Template.post_job.events({
  'submit form': function(e) {
    e.preventDefault();

    var user = Meteor.user();

    var post = {
      title: $(e.target).find('[name=title]').val(),
      location: $(e.target).find('[name=location]').val(),
      price: $(e.target).find('[name=price]').val(),
      description: $(e.target).find('[name=description]').val(),
      userId: user._id,
      submitted: new Date()
    };

    var postId = Jobs.insert(post);

    Router.go('job_list');
  }
});

/*****************************************************************************/
/* PostJob: Helpers */
/*****************************************************************************/
Template.post_job.helpers({
});

/*****************************************************************************/
/* PostJob: Lifecycle Hooks */
/*****************************************************************************/
Template.post_job.onCreated(function () {
});

Template.post_job.onRendered(function () {
});

Template.post_job.onDestroyed(function () {
});
