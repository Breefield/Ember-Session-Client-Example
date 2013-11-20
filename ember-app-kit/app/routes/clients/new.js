// Looking at TRANSITIONS doc
// https://github.com/emberjs/data/blob/master/TRANSITION.md

var ClientNew = Ember.Route.extend({
  model: function(params) {
    return this.store.createRecord('client');
  }
});

export default ClientNew;