'use strict';

module.exports = Phrase;


// Reverses a string. => prototype: inheritance
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

String.prototype.blank = function() {
  let regex = new RegExp(/^\s*$/);
  return regex.test(this);
}


// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content.
  this.letters = function letters() {
   const regex = /[a-z]/i;
   return Array.from(this.content).filter(c => c.match(regex)).join("");
 }

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}
