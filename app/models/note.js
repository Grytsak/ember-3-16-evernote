import Model, { attr } from '@ember-data/model';

export default class NoteModel extends Model {
  @attr("string", {
    defaultValue() { return "Untitled" }
  }) title;
  @attr("string", {
    defaultValue() { return "No description" }
  }) description;
  @attr('string', {
    defaultValue() { return new Date(Date.now()).toLocaleString(); }
  }) createdAt;
  @attr("boolean", {
    defaultValue() { return false }
  }) selected;
}
