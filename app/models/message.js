import DS from 'ember-data';
const { attr, belongsTo } = Ember;

export default DS.Model.extend({
  user: belongsTo('user'),
  content: attr('string'),
  when: attr('date')
});
