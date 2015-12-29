'use strict';

var Words = function(sentence) { this.sentence = sentence; };

Words.prototype = {
  get count() {
    function countWord(counts, word) {
      if (word) {
        word = word.toLowerCase();

        if (counts[word] === undefined)
          counts[word] = 0;
        counts[word]++;
      }
      return counts;
    }

    var words = this.sentence.match(/\w+/g);
    return words.reduce(countWord, {});
  }
};

module.exports = Words;
