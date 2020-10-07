import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NoteComponent extends Component {
  @service store;
  @service note;

  @action selectNote() {
    let notes = this.store.peekAll('note');
    let noteId = this.args.note.id;
    let currentNote = this.store.peekRecord('note', noteId);

    notes.map(note => note.selected = false);
    notes.save();

    currentNote.selected = true;
    currentNote.save();

    this.note.selectedNote = currentNote;
  }
}
