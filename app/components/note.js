import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class NoteComponent extends Component {
  @action selectNote() {
    console.log('title:', this.args.note.title);
  }
}
