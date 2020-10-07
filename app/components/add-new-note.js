import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AddNewNoteComponent extends Component {
  @service store;

  @action createNewNote() {
    let newNote = this.store.createRecord('note');
    newNote.save();
  }
}
