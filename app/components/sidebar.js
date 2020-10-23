import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class SidebarComponent extends Component {
  @service store;
  @service note;

  @action deleteNote() {
    if (this.note.selectedNote) {
      let note = this.store.peekRecord('note', this.note.selectedNote.id);
      note.destroyRecord();
    } else {
      alert("No selected note");
    }
  }

}
