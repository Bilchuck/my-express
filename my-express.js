const http = require('http');

module.exports = class MyExpress {
  constructor() {
    this._middlewares = [];
    this._routeHandlers = [];
  }

  static app() {
    return new MyExpress();
  }

  use(handler) {
    this._middlewares.push(handler);
  }

  get(path, handler) {
    this._routeHandlers.push({
      path,
      handler,
    });
  }

  listen(port, listenHandler) {
    http.createServer((req, res) => {
      let m_i = 0, r_i = 0;
      const next = (err) => {
        if (err) {
          throw err;
        } else if (m_i < this._middlewares.length) {
          m_i++;
          this._middlewares[m_i - 1](req, res, next);
        } else if (r_i < this._routeHandlers.length) {
          r_i++;
          this._routeHandlers[r_i - 1](req, res, next);
        } else {
          res.end('No handlers.');
        }
      }
      next();
    }).listen(port, listenHandler);
  }
}