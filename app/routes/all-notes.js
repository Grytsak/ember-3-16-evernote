import Route from '@ember/routing/route';

export default class AllNotesRoute extends Route {
  async model() {
    this.store.findAll('note-settings');
    return this.store.findAll('note');
  }
}
