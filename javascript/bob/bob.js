var Bob = function() {};

Bob.prototype.hey = function(remark) {
  'use strict';

  var remark = new Remark(remark);

  if (remark.isSilent()) return 'Fine. Be that way!';
  if (remark.isShout()) return 'Woah, chill out!';
  if (remark.isQuestion()) return 'Sure.';
  return 'Whatever.';
};

var Remark = function(remark) { this.remark = remark }

Remark.prototype.isSilent = function() { return !this.remark.trim().length };
Remark.prototype.isShout = function() { return this.remark === this.remark.toUpperCase(); }
Remark.prototype.isQuestion = function() { return this.remark.substr(-1) === '?'; }

module.exports = Bob;
