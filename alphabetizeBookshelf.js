/*
LONG/2-DAY PROMPT
alphabetizeBookshelf.js
---
PROMPT
---
Code an algorithm for alphabetizing a bookshelf, as found in this video:
https://www.youtube.com/watch?v=WaNLJf8xzC4.
This prompt provides an opportunity to start with a less efficient algo (like Bubble sort)
and then improve complexity by using a more appropriate algo, like Quicksort.
Interviewers want to know that you understand how these algos work, and that you understand from a logical
level why one algo is an improvement over another. Even if you code only the optimal algorithm,
it is an excellent idea to at least talk through the less efficient solution first. This
allows the interviewer to know how you think and reason, not just that you have memorized the solution.
This is a two-day prompt, to allow you time to review DS&A Level-Up resources and build the
solution using at least two different algos.
*/

// SORT ALGO 1
var alphabetizeBookshelf1 = function(books) {
  for (let i = 0; i < books.length; i++) {
    for (let j = i + 1; j < books.length; j++) {
      if (books[i].localeCompare(books[j]) > 0) {
        let temp = books[i];
        books[i] = books[j];
        books[j] = temp;
      }
    }
  }
  return books;
};


// SORT ALGO 2
var alphabetizeBookshelf2 = function() {

};

var test = function() {
  const example1 = alphabetizeBookshelf1(['F','Y','E','W','S','T','L','R']);
  console.log(example1);
};

test();
