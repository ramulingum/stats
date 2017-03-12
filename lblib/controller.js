var model = require('./models');
var response = require('./response');
var _ = require('underscore');
var verify = require('./verify');
var Controller;

Controller = (function() {
  function Controller() {
  }
  Controller.prototype.saveStat = function(req,res,next) {
    if (!verify.validatePostStat(req.body)){
        response.send(response.success(res,"please check the input"));
    }
    model.scores.index(req.body.name, req.body.value, req.body.uid, function(data){
        response.success(res,true);
    });
  };
  Controller.prototype.getStat = function(req,res,next) {
     var stats = req.query.name;
     if (_.isString(stats)){
        stats = [stats];
     }
     if (!verify.validateGetLb(stats)){
        return  response.error(res,"Please check the input");
     }
     model.scores.leader({keys:stats}).run(function(err, leaderboard) {
        response.success(res,leaderboard);
    });
  };

  return Controller;

})();
module.exports = new Controller();