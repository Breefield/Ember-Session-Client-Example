var ClientsIndex = Ember.Route.extend({
  model: function(params) {
    return this.store.find('client', '');
  }
});

export default ClientsIndex;