
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(cookieParser());

// Require API routes
const main = require('./routes/main');
const user = require('./routes/user');

// // Import API Routes


app.use(main);
app.use(user);

// Export the server middleware
module.exports = {
     path: '/server', handler: app }
