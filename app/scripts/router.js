SpecScoreWebclient.Router.map(function () {
  
  this.resource('project_edit');
  this.resource('project_edit', { path: '/project_edit/:project_edit_id' });
  this.resource('project_edit.edit', { path: '/project_edit/:project_edit_id/edit' });
  
  this.resource('projects');
  this.resource('project', { path: '/project/:project_id' });
  this.resource('project.edit', { path: '/project/:project_id/edit' });
  
  this.resource('score_edit');
  this.resource('score_edit', { path: '/score_edit/:score_edit_id' });
  this.resource('score_edit.edit', { path: '/score_edit/:score_edit_id/edit' });
  
  this.resource('scores');
  this.resource('score', { path: '/score/:score_id' });
  this.resource('score.edit', { path: '/score/:score_id/edit' });
  
  this.resource('user_edit');
  this.resource('user_edit', { path: '/user_edit/:user_edit_id' });
  this.resource('user_edit.edit', { path: '/user_edit/:user_edit_id/edit' });
  
  this.resource('users');
  this.resource('user', { path: '/user/:user_id' });
  this.resource('user.edit', { path: '/user/:user_id/edit' });
  
});
