import DS from 'ember-data';
import Ember from 'ember';
const { attr, belongsTo } = Ember;

export default DS.Model.extend({
  user: belongsTo('user'),
  content: attr('string'),
  when: attr('date')
});
