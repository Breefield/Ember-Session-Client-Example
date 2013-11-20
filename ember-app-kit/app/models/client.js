var ClientModel = DS.Model.extend({
  subdomain: DS.attr('string'),
  key: DS.attr('string')
});

export default ClientModel;