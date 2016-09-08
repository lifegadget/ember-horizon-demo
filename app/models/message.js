import DS from 'ember-data';
const { attr, belongsTo } = DS;

export default DS.Model.extend({
  user: belongsTo('user'),
  content: attr('string'),
  when: attr('date')
});
