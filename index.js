const server = require('./server');

// const port = process.env.PORT || 5000;
const port = 3000
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));