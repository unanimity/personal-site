const express = require('express');
const router = express.Router();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ projects: [], users:[], contens:[]})
  .write();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});






module.exports = router;
