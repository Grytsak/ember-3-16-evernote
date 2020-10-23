import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { sort } from '@ember/object/computed';
import EmberResolver from 'ember-resolver';

export default class AllNotesComponent extends Component {
  @service store;
  @service note;

  @tracked notes = this.store.peekAll('note');
  @tracked notesSortType;


  notesSorting = ['title'];
  @sort('notes', 'notesSorting') sortedNotes;

  get notesSortedByTitle() {
    return this.notes.sortBy('title');
  }

  @action sortTitle() {
   console.log('record:', this.note.notesSortType);
  }

  get noteOrNotes() {
    let notesLength = this.store.peekAll('note').length;

    if (notesLength === 1) {
      return 'note';
    }
    else {
      return 'notes';
    }
  }
}
