/*jshint node: true */
/*jshint esnext: true */

"use strict";
const readline = require('readline');
const state_text = {
  "ST_RST": "結果",
  "ST_VAL1": "値1",
  "ST_VAL2": "値2"
};

main();

function isNumeric(num) {
  return ( num >= 0 && num <= 9 );
}

function isOperator(opr) {
  return ( opr === '+' || opr === '-' || opr === '*' || opr === '/' );
}

function isEqual(equal) {
  return ( equal === '=' );
}

function isClear(clear) {
  return ( clear === 'c' || clear === 'C' );
}

function calc(value1, value2, operator) {
  switch ( operator ) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
  }
}

function printState(state, value) {
  console.log("現在の状態:", state_text[state], "\t取り出した文字:", value);
}

function main() {
  let state = "ST_RST";
  let display = "";
  let result = 0;
  let val1 = 0;
  let val2 = 0;
  let operator = "";

  function showState(display, state, input) {
    console.log(`【${display}】\t${state_text[state]}\t[${input}]`);
  }

  function loop() {
    const stdin = getInput();
    stdin.then( (input) => {

      switch (state) {
        case "ST_RST":
          if ( isNumeric(input) ) {
            val1 = parseInt(input);
            display = val1;
            state = "ST_VAL1";
          } else if ( isOperator(input) ) {
            val1 = result;
            operator = input;
            val2 = 0;
            state = "ST_VAL2";
          } else if ( isClear(input) ) {
            result = 0;
            display = result;
          }
          break;
        case "ST_VAL1":
          if ( isNumeric(input) ) {
            val1 = val1 * 10 + parseInt(input);
            display = val1;
          } else if ( isOperator(input) ) {
            operator = input;
            val2 = 0;
            state = "ST_VAL2";
          } else if ( isEqual(input) ) {
            result = val1;
            display = result;
            state = "ST_RST";
          } else if ( isClear(input) ) {
            result = 0;
            display = result;
            state = "ST_RST";
          }
          break;
        case "ST_VAL2":
          if ( isNumeric(input) ) {
            val2 = val2 * 10 + parseInt(input);
            display = val2;
          } else if ( isOperator(input) ) {
            operator = input;
            val1 = calc(val1, val2, operator);
            val2 = 0;
            display = val1;
          } else if ( isEqual(input) ) {
            result = calc(val1, val2, operator);
            display = result;
            state = "ST_RST";
          } else if ( isClear(input) ) {
            result = 0;
            display = result;
            state = "ST_RST";
          }
          break;
      }

      showState(display, state, input);
      loop();
    });
  }

  loop();

  return;
}

// 入力を受け取る
function getInput() {
  return new Promise( (resolve, reject) => { 
    let ret = {};
    const reader = readline.createInterface(process.stdin, process.stdout);
    reader.question("構文解析する数式: ", (answer) => {
      reader.close();
      resolve(answer);
    });
  });
}

// 結果を出力する
function printResult(obj) {
  console.log("");
  if ( obj.status === "ST_OK" ) {
    console.log("現在の状態: 数式OK");
    console.log("値1: ", obj.value1);
    console.log("演算子: ", obj.operator);
    console.log("値2: ", obj.value2);
    console.log("計算結果: ", (function(obj) {
      switch ( obj.operator ) {
        case '+':
          return obj.value1 + obj.value2;
        case '-':
          return obj.value1 - obj.value2;
        case '*':
          return obj.value1 * obj.value2;
        case '/':
          return obj.value1 / obj.value2;
      }
    })(obj));
  } else {
    console.log("現在の状態: 数式NG");
    console.log("数式に誤りがあります。");
  }
  return;
}
