/*jshint node: true */
/*jshint esnext: true */

"use strict";
const readline = require('readline');
main();

function main() {
  getInput().then( (input) => {
    let counter = 0;
    let answer = 0;
    let x = input.x;
    let n = input.n;

    // メインの計算エリア
    // バイナリ法
    ((x, n) => {
      answer = 1;
      while ( n !== 0 ) {
        if ( n % 2 === 1 ) {
          answer *= x;
  	counter++;
        }
        n = parseInt( n / 2 );
        x *= x;
        counter++;
      }
    })(x, n);

    return {"x": x, "n": n, "answer": answer, "count": counter};
  }).then(printResult);
  return;
}

// 入力を受け取る
function getInput() {
  return new Promise( (resolve, reject) => { 
    let ret = {};
    const reader = readline.createInterface(process.stdin, process.stdout);
    reader.question("べき乗のひとつ目の値は？: ", (answer) => {
      ret.x = answer;
      reader.question("べき乗のふたつ目の値は？: ", (answer) => {
        ret.n = answer;
        reader.close();
        resolve(ret);
      });
    });
  });
}

// 結果を出力する
function printResult(obj) {
  console.log("");
  console.log(`${obj.x}^${obj.n}`);
  console.log("答え: ", obj.answer);
  console.log("計算回数: ", obj.count);
  return;
}
