SpecScoreWebclient.ScoreRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('score', model.score_id);
  }
});

