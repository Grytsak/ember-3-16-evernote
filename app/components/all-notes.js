import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { sort } from '@ember/object/computed';
import EmberResolver from 'ember-resolver';

export default class AllNotesComponent extends Component {
  @service store;
  @service note;

  constructor() {
    super(...arguments);

    let allNotesSortType = this.note.notesSortType.allNotesSortType;

    switch(allNotesSortType) {
      case 'title':
        this.notes = this.store.peekAll('note').sortBy('title');
        break;
    }
  }

  @tracked notes = this.store.peekAll('note');

  @action sortTitle() {
    let noteSettings = this.note.notesSortType;
    noteSettings.allNotesSortType = 'title';
    noteSettings.save();
    this.notes = this.notes.sortBy('title');
  }

  @action sortDateCreated() {
    let noteSettings = this.note.notesSortType;
    noteSettings.allNotesSortType = 'dateCreated';
    noteSettings.save();
    this.notes =  this.notes.sortBy('createdAt').reverse();
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