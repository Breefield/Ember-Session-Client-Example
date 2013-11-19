var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.resource('clients', function() {
    this.route('show', {path: ':client_id'});
    this.route('new');
  });
});

export default Router;
