import Route from '@ember/routing/route';

export default class AllNotesRoute extends Route {
  async model() {
    return this.store.findAll('note');
  }
}
