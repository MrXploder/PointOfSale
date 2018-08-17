/*
*@author: MrXploder
*@url: https://mrxploder.github.io/MrXploder/
*@date: 08/2018
*@description:
*@methods: GET, POST, PUT, DELETE.
*/
(function() {
  const _ = require('lodash');
  const OperatorsRouter  = require('express').Router();
  const OperatorsModel = require('../model/Operators');
  const BranchesModel = require('../model/Branches');

  OperatorsRouter.post('/', function(req, res, next){
    let rut = req.body.rut,
        password = req.body.password,
        branch_id = req.body.branch_id;

    console.log("pre-postinfo--->>",rut, password);

    OperatorsModel.find({rut, password, level: 3})
    .then(function(operator){
      if(_.isEmpty(operator)) throw('error');
      else return BranchesModel.findById(branch_id);
    })
    .then(branch => res.send(branch))
    .catch(() => res.status(404).send(""));
  });

  /*EXPORT ROUTER*/
  module.exports = OperatorsRouter;
})();