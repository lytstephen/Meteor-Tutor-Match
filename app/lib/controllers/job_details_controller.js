JobDetailsController = RouteController.extend({

  subscriptions: function() {
    this.subscribe('jobs', Meteor.userId());
  },

  data: function() {
    return Jobs.findOne(this.params._id);
  },

  details: function() {
    this.render('JobDetails');
  },

  edit: function() {
    this.render('JobEdit');
  }

});
