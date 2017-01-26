'use strict';

function formatPrettyJSON(req, res, body, cb) {
  if (body instanceof Error) {
    // snoop for RestError or HttpError, but don't rely on
    // instanceof
    res.statusCode = body.statusCode || 500;

    if (body.body) {
      body = body.body;
    } else {
      body = {
        message: body.message
      };
    }
  } else if (Buffer.isBuffer(body)) {
    body = body.toString('base64');
  }

  var data = JSON.stringify(body, null, '\t');
  res.setHeader('Content-Length', Buffer.byteLength(data));

  return cb(null, data);
}

module.exports = formatPrettyJSON;
