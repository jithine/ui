import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  titleToken: 'Login',
  routeIfAlreadyAuthenticated: 'home',
  scmService: Ember.inject.service('scm'),
  model() {
    return this.get('scmService').getScms();
  }
});
