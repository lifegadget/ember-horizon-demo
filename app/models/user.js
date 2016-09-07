import DS from 'ember-data';
const { attr, belongsTo } = Ember;

export default DS.Model.extend({
  name: attr('string'),
  avatar: attr('string'),
  messages: hasMany('message')
});
