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

  get notesSortType() {
    let noteSettings = this.store.peekAll('note-settings');
    let noteSettingsRecord;

    if(noteSettings.length === 0) {
      let noteSettingsRecord = this.store.createRecord('note-settings');
      noteSettingsRecord.save();
    } else {
      noteSettings.forEach(record => {
        noteSettingsRecord = record;
      });
    } 

    if (noteSettingsRecord) {
      return noteSettingsRecord;
    }
  }
}