const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./dist/task-tracker2'));
app.get('/*', function(req,res) {
res.sendFile('index.html', {root: 'dist/task-tracker2/'})});
app.listen(process.env.PORT || 8080);