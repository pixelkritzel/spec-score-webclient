SpecScoreWebclient.ProjectRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('project', model.project_id);
  }
});

