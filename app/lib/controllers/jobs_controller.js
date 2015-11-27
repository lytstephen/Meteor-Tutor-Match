JobsController = RouteController.extend({
  
  subscriptions: function() {
    this.subscribe('jobs');
  },

  data: function() {
    return Jobs.find();
  },

  list: function() {
    this.state.set('subject', this.params.subject);
    this.render('job_list');
  },

  post: function() {
    this.render('post_job');
  },

  myJobs: function() {
    this.render('my_posted_jobs');
  },

  details: function(id) {
    this.render('JobDetails');
  }

});
