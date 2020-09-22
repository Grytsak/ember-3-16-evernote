import Route from '@ember/routing/route';

export default class AllNotesRoute extends Route {
  model() {
    return [
      {
        id: 1,
        title: "Note 1",
        description: "Note 1 desc",
        date: "2020"
      },
      {
        id: 2,
        title: "Note 2",
        description: "Note 2 desc",
        date: "2020"
      },
      {
        id: 3,
        title: "Note 3",
        description: "Note 3 desc",
        date: "2020"
      }
    ];
  }
}
