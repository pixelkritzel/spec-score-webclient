/*global Ember*/
SpecScoreWebclient.User = DS.Model.extend({
  email: DS.attr('string'),
  nick: DS.attr('string'),
  projects: DS.hasMany('project', {async: true}),
  scores: DS.hasMany('score', {async: true})
});

// probably should be mixed-in...
SpecScoreWebclient.User.reopen({
  // certainly I'm duplicating something that exists elsewhere...
  attributes: function(){
    var attrs = [];
    var model = this;
    Ember.$.each(Ember.A(Ember.keys(this.get('data'))), function(idx, key){
      var pair = { key: key, value: model.get(key) };
      attrs.push(pair);
    });
    return attrs;
  }.property()
});

// delete below here if you do not want fixtures
SpecScoreWebclient.User.FIXTURES = [
  
  {
    id: 0,
    email: 'huhu@haha',
    nick: 'huhu',
    projects: ['0','1'],
    scores: ['0','1']
  },
  
  {
    id: 1,
    email: 'huhu@haha',
    nick: 'huhu',
    projects: ['0','1'],
    scores: ['0','1']
  }
  
];
