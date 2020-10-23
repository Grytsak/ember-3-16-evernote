import Model, { attr } from '@ember-data/model';

export default class NoteSettingsModel extends Model {
  @attr("string", {
    defaultValue() { return "dateCreated" }
  }) allNotesSortType;
}
