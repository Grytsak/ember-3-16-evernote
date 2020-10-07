import Service, { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class NoteService extends Service {
  @service store;

  constructor() {
    super(...arguments);

    let notes = this.store.peekAll('note');
    let selectedNote = notes.find(note => note.selected === true);
    this.selectedNote = selectedNote;
  }

  @tracked selectedNote;
}