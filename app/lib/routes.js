Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


// ------ Hooks ------ //

var requireLogin = function() {
  if (!Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      Router.go('/sign-in');
      alert('You must be logged in before posting');
    }
  } else {
    this.next();
  }
};

Router.onBeforeAction(requireLogin, {only: 'post_job'});

// ------ Hooks ------ //


// ------ Accounts STARTS ------ //

AccountsTemplates.configure({
  defaultLayout: 'MasterLayout',
  onLogoutHook: function() {
    alert('Signing Out!');
    Router.go('/');
  }
});

AccountsTemplates.configureRoute('signIn');

// ------ Accounts ENDS ------ //


Router.route('/', {
  name: 'home',
  controller: 'HomeController'
});

Router.route('job_list/:subject?', {
  name: 'job_list',
  controller: 'JobsController',
  action: 'list'
});

Router.route('post_job', {
  name: 'post_job',
  controller: 'JobsController',
  action: 'post'
});

Router.route('my_posted_jobs', {
  name: 'my_posted_jobs',
  controller: 'JobsController',
  action: 'myJobs'
});

Router.route('job_details/:_id', {
  name: 'JobDetails',
  controller: 'JobDetailsController',
  subscriptions: function() {
    this.subscribe('applications');
    this.subscribe('users');
  },
  action: 'details',
  onBeforeAction: function() {
    Session.set('_id', this.params._id);
    this.next();
  }
});

Router.route('job_details/:_id/edit', {
  name: 'JobEdit',
  controller: 'JobDetailsController',
  action: 'edit'
});

Router.route('update_profile', {
  name: 'UpdateProfile',
  subscriptions: function() {
    this.subscribe('users', this.userId);
    this.subscribe('profileImages', this.userId);
    this.subscribe('userImages', this.userId);
  },
  data: function() {
    return Meteor.user();
  }
});

Router.route('tutor_list/:subject?', {
  name: 'TutorList',
  subscriptions: function() {
    this.subscribe('users', this.userId);
    this.subscribe('profileImages', this.userId);
    this.subscribe('userImages', this.userId);
  },
  data: function() {
    return Meteor.users.find();
  },
  onBeforeAction: function() {
    if (this.params.subject)
      Session.set('subject', this.params.subject);
    this.next();
  }
});

Router.route('tutor_details/:_id', {
  name: 'TutorDetails',
  subscriptions: function() {
    this.subscribe('users');
    this.subscribe('profileImages');
    this.subscribe('userImages');
    this.subscribe('jobs');
  },
  data: function() {
    return Meteor.users.findOne({_id: this.params._id});
  },
  onBeforeAction: function() {
    Session.set('tutor_id', this.params._id);
    this.next();
  }
});