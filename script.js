'use strict';
const feet = document.getElementById('feet');
const feet2 = document.getElementById('feet2');
const inches = document.getElementById('inches');
const meters = document.getElementById('meters');

feet.addEventListener('input', function () {
  let ft = this.value;
  let inch = ft * 12;
  inches.value = inch;
});

inches.addEventListener('input', function () {
  let inch = this.value;
  let ft = inch / 12;
  if (!Number.isInteger(ft)) {
    ft = ft.toFixed(4);
  }
  feet.value = ft;
});

feet2.addEventListener('input', function () {
  let ft1 = this.value;
  let mt = ft1 * 0.3048;
  if (!Number.isInteger(mt)) {
    mt = mt.toFixed(4);
  }
  meters.value = mt;
});

meters.addEventListener('input', function () {
  let mt = this.value;
  let ft1 = mt / 0.3048;
  if (!Number.isInteger(ft1)) {
    ft1 = ft1.toFixed(4);
  }
  feet2.value = ft1;
});
