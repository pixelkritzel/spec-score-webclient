SpecScoreWebclient.Project = DS.Model.extend({
  token: DS.attr('string'),
  name: DS.attr('name'),
  owner: DS.belongsTo('user'),
  teammates: DS.hasMany('teammate'),
  users: DS.hasMany('user'),
  scores: DS.hasMany('score')
});

// probably should be mixed-in...
SpecScoreWebclient.Project.reopen({
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
SpecScoreWebclient.Project.FIXTURES = [
  
  {
    id: 0,
    name: 'foo'
  },
  
  {
    id: 1,
    name: 'bar'
  }
  
];
