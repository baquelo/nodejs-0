"use strict";

const fibonacci = () => {
  let count = 0;
  const result = [];

  let ant = 1;
  let number = 0;

  while (count < 350) {
    result.push(number);
    count++;
    let aux = ant;
    ant = number;
    number = aux + ant;
  }

  return result;
};

const isFibonnaci = (num) => {
  const sequence = fibonacci();
  return sequence.find((number) => number === num) ? true : false;
};

module.exports = {
  fibonacci,
  isFibonnaci,
};
