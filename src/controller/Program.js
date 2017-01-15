var program = require('../model').Program;

exports.index = function(req, res, next) {
  //res.send(req.session.name);
  console.log(req);
  program.find({}, function(err, docs) {
    docs.forEach(el => {
      if (el.content) {
        el.content = el.content.replace(/<[^>]+>/g,"").slice(0,400).trim();
      }
    })

    res.render('program/index', {
      session: req.session,
      program: docs
    });
  })
};

exports.showOneProgram = function(req, res, next) {
  program.findById(req.query.id, function(err, docs) {
    res.render('program/show.ejs', {
      session: req.session,
      program: docs
    });
  });
};
