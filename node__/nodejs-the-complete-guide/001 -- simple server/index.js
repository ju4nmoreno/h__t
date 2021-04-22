const http = require('http');

const PORT = 3000;
const httpServer = (req, res) => {
  /* console.log(req);
  process.exit(); */

  res.setHeader('Content-Type', 'text/html');
  res.write(
    `<html>
      <head>
        <title>Well ...</title>
      </head>
      <body>
        <h1>this is the end fo the f...ing world</h1>
      </body>
    </html>`
  );
  res.end();
};
const server = http.createServer(httpServer);

server.listen(PORT);

/*
 * This is only nodejs without package, vanilla node, start a server and show a message in the browser.
 *
 * Method process.exit();
 * kill the server, kill everthing
 *
 *
 *  */
