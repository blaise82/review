class mathalg {
  constructor(arr) {
    this.arr = arr;
  }

  sum() {
//     let total_sum = 0;
//     for (let i = 0; i < this.arr.length; i++) {
//       total_sum += this.arr[i];
//     }
//     return total_sum;

    return this.arr.reduce((a, b) => a + b, 0);
  }
}

const ARRAY = [1, 2, 3, 4, 5];

const mathhandler = new mathalg([1, 2, 3, 4, 5]);

console.log(mathhandler.sum());
