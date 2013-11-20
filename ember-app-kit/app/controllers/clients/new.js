import ClientModel from 'appkit/models/client';

var ClientsNewController = Ember.Controller.extend({
  actions: {
    save: function() {
      console.log(this.get('model'));
    }
  }
});

export default ClientsNewController;