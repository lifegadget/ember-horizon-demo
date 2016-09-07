import DS from 'ember-data';
import Ember from 'ember';
const { attr, belongsTo } = Ember;

export default DS.Model.extend({
  name: attr('string'),
  avatar: attr('string'),
  messages: hasMany('message')
});
