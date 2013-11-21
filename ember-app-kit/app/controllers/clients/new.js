var ClientsNewController = Ember.Controller.extend({
  actions: {
    save: function() {
      this.get('model').save().then(function() {
        alert('Client saved');
      });
    }
  }
});

export default ClientsNewController;