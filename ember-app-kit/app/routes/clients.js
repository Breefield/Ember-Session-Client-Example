var ClientIndex = Ember.Route.extend({
  model: function(params) {
    return this.store.find('client', '');
  }
});

export default ClientIndex;