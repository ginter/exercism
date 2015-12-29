'use strict';

var Anagram = function(subject) { this.subject = this.canonicalized(subject); };

Anagram.prototype.match = function(words) {
  return words.filter(this.isAnagram, this);
};

Anagram.prototype.isAnagram = function(word) {
  return this.canonicalized(word) === this.subject;
};

Anagram.prototype.canonicalized = function(word) {
  return word.toLowerCase().split('').sort().join('');
};

module.exports = Anagram;
