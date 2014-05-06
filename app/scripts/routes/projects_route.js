SpecScoreWebclient.ProjectsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('project');
  }
});

