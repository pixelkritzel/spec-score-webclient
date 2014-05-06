/*global Ember*/
SpecScoreWebclient.Teammate = DS.Model.extend({
  user: DS.belongsTo('user'),
  project: DS.belongsTo('project')
});

// probably should be mixed-in...
SpecScoreWebclient.Teammate.reopen({
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
SpecScoreWebclient.Teammate.FIXTURES = [

  {
    id: 0,

  },

  {
    id: 1,

  }

];
