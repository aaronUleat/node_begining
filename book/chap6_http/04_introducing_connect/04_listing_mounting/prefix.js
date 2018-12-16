function echo(req, res, next) {
    req.pipe(res);
}

const connect = require("connect");

connect()
    .use('/echo', echo)
    .listen(3000);