/*jshint node: true */
/*jshint esnext: true */

"use strict";
const readline = require('readline');
const state_text = {
  "ST_INIT": "初期",
  "ST_VAL1": "値1",
  "ST_OP": "演算子",
  "ST_VAL2": "値2"
};

main();

function isNumeric(num) {
  return ( num >= 0 && num <= 9 );
}

function isOperator(opr) {
  return ( opr === '+' || opr === '-' || opr === '*' || opr === '/' );
}

function printState(state, value) {
  console.log("現在の状態:", state_text[state], "\t取り出した文字:", value);
}

function main() {
  getInput().then( (input) => {
    let state, position, value1, value2, operator, result;

    const formula = input.split("");
    console.log(formula);

    // メインの計算エリア
    position = 0;
    state = "ST_INIT";

    while ( state !== "ST_OK" && state !== "ST_NG" ) {
      const present = formula[position];
      printState(state, present);
      switch (state) {
        case "ST_INIT":
          if ( isNumeric(present) ) {
            value1 = parseInt(present);
            state = "ST_VAL1";
          } else {
            state = "ST_NG";
          }
          break;
        case "ST_VAL1":
          if ( isNumeric(present) ) {
            value1 = value1 * 10 + parseInt(present);
          } else if ( isOperator(present) ) {
            operator = present;
            state = "ST_OP";
          } else {
            state = "ST_NG";
          }
          break;
        case "ST_OP":
          if ( isNumeric(present) ) {
            value2 = parseInt(present);
            state = "ST_VAL2";
          } else {
            state = "ST_NG";
          }
          break;
        case "ST_VAL2":
          if ( isNumeric(present) ) {
            value2 = value2 * 10 + parseInt(present);
          } else if ( present === undefined ) {
            state = "ST_OK";
          } else {
            state = "ST_NG";
          }
          break;
      }
      position++;
    }

    return {"value1": value1, "operator": operator, "value2": value2, "status": state};
  }).then(printResult);
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
