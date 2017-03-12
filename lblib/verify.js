var _ = require('underscore');
var response = require('./response');
var validator =  require('validator');
var Verify;
Verify = (function() {
  function Verify() {
  }
  Verify.prototype.validateGetLb = function(strArr) {
        var st = _.reduce(strArr, function(memo, val){ return memo && validator.isAlpha(val); }, true);
        return st;
  };
  Verify.prototype.validatePostStat = function(stObj) {
        return this.postName(stObj.name) && this.postValue(stObj.value) && this.postUid(stObj.uid)
  };
  Verify.prototype.postName = function(name) {
         if (validator.isAlpha(name)){
            return name
        }else{
            return false;
        }
  };
  Verify.prototype.postValue = function(value) {
        value = value.toString();
         if (validator.isNumeric(value)){
            return value.toString();
        }else{
            return false;
        }
  };
  Verify.prototype.postUid = function(uid) {
         if (validator.isEmail(uid)){
            return uid
        }else{
            return false;
        }
  };
  return Verify;
})();

module.exports = new Verify();