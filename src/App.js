const Controller = require('./controller/Controller');

class App {
  play() {
    this.controller = new Controller();
    this.controller.init();
  }
}

const app = new App();
app.play();
module.exports = App;
