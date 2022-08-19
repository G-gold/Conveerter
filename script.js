'use strict';

const feet = document.getElementById('feet');
const inches = document.getElementById('inches');

feet.addEventListener('input', function () {
  let ft = feet.value * 12;
  inches.value = ft;
  //   return { ft };
});

inches.addEventListener('input', function () {
  let inch = inches.value / 12;
  //To convert non-integer result to four decimal places
  if (!Number.isInteger(inch)) {
    inch = inch.toFixed(4);
  }
  feet.value = inch;
  //   return inch;
});
