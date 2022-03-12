/* eslint-disable import/prefer-default-export */
/* eslint-disable eqeqeq */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

export const convertToRupiah = (angka) => {
  let rupiah = '';
  const angkarev = angka.toString().split('').reverse().join('');
  for (let i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += `${angkarev.substr(i, 3)}.`;
  return `Rp. ${rupiah.split('', rupiah.length - 1).reverse().join('')}`;
};
