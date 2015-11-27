/*****************************************************************************/
/* JobList: Event Handlers */
/*****************************************************************************/
Template.job_list.events({
});

/*****************************************************************************/
/* JobList: Helpers */
/*****************************************************************************/
Template.job_list.helpers({

  submitted_readable: function() {
    return moment(this.createdAt).format('DD/MM/YYYY');
  },

  jobs: function() {
    var subject = Iron.controller().state.get('subject');
    var doc = subject ? {subjects: subject} : {};

    return Jobs.find(doc, {sort: {submitted: -1}})
  }

});

/*****************************************************************************/
/* JobList: Lifecycle Hooks */
/*****************************************************************************/
Template.job_list.onCreated(function () {
});

Template.job_list.onRendered(function () {
});

Template.job_list.onDestroyed(function () {
});
