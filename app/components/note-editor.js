import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class NoteEditorComponent extends Component {
  @service store;
  @service note;

  userFinishedTyping = null;

  @action editNoteDescription() {
    clearTimeout(this.userFinishedTyping);

    this.userFinishedTyping = setTimeout(() => {
      this.note.selectedNote.save();
    }, 500);
  }
}
