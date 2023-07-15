export class MyApp {
  public message = 'Hello World!';
  public async  promiseFunction() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const list = [
          { id: 1, name: 'John' },
          { id: 2, name: 'Jane' },
          { id: 3, name: 'Joe' }
        ]
        resolve(list);
      }, 5000);
    });
  }

}
