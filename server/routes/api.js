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


router.get('/projects', function(req, res, next) {

    if (!req.body) {
      return res.status(300).end();
    }

    let {ln,lim,id} = req.query;

      try {
              console.log();
              return res.status(200).end(
                JSON.stringify(
                db.get('projects')
                .filter({language: ln?ln:'en'})
               /**/
              /*  .sortBy('comments')*/
             /*   .take(14)*/
                .value())
              );

      } catch (e) {

        return res.status(300).end();
      }




});



module.exports = router;
