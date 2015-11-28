Template.navbar.events({
  'click #logout': function() {
    AccountsTemplates.logout();
  }
});

Template.navbar.helpers({
  isActive: function(link) {
    var currentPath = Router.current().route.path(this).toString();
    return link == currentPath ? 'active' : '';
  }
});