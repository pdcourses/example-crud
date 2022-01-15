const http = require('http');
const app = require('./app');
const PORT = 3000;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`App is working on http://127.0.0.1:${PORT}`);
});
