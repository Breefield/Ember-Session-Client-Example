var ClientsNewController = Ember.Controller.extend({
  actions: {
    save: function() {
      this.get('model').save();
    }
  }
});

export default ClientsNewController;