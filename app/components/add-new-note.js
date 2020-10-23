import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AddNewNoteComponent extends Component {
  @service store;
  @service note;

  @action createNewNote() {
    let newNote = this.store.createRecord('note');
    let notes = this.store.peekAll('note');

    notes.map(note => note.selected = false);

    newNote.selected = true;
    this.note.selectedNote = newNote;
    notes.save();
  }
}
