const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./dist/task-tracker2'));
app.get('/*', function(req,res) {
res.sendFile('./dist/task-tracker2/index.html')});
app.listen(process.env.PORT || 8080);