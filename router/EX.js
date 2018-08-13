(function() {
  const EXRouter  = require('express').Router();
  const EXModel = require('../model/EX');

  /*INITIALIZE A PARAM THAT IS USED MULTIPLE TIMES*/
  EXRouter.param('patientId', function(req, res, next){
    EXModel.findById(req.params.patientId).then(function(patient){
      req.item = patient;
      next();
    });
  });

  /*DEFINE A GENERAL POST, NOT BINDED BY ANY ESPECIFIC ID*/
  EXRouter.post('/', function(req, res, next){
    let item = new EXModel(req.body);
    console.log(item);
    item.save().then(function(item){
      res.send(item);
    });
  });

  /*DEFINE A GENERAL GET, TO FETCH ALL THE RESOURCES FROM DB*/
  EXRouter.get('/', function(req, res, next){
    EXModel.find({}).lean().then(function(EX){
      res.send(EX);
    });
  });

  /*BASED ON PREVIUS ROUTER.PARAM, DEFINE GET, PUT AND DELETE FOR THAT PARAM*/
  EXRouter.route('/:patientId')
  .get(function(req, res, next){
    res.send(req.item);
  })
  .put(function(req, res, next){
    req.item.set(req.body);
    req.item.save().then(function(item){
      res.send(item);
    });
  })
  .delete(function(req, res, next){
    req.item.remove().then(function(){
      res.send({});
    })
  });

  /*EXPORT ROUTER*/
  module.exports = EXRouter;
})();