/**
 * Let's make a calculator 🧮
 */

type Command = "add" | "substract" | "multiply" | "divide" | "remainder";

/** Hoisting
 *
 * var, let, const, function, function+, class : 호이스팅이 됨
 *
 * - var: 호이스팅 시 undefined로 변수 초기화
 * - let, const: 호이스팅 시 변수 초기화 X (error: not)
 *
 * 함수 선언문, 함수 표현식의 호이스팅 차이
 * - 함수 선언문: 호이스팅 됨 (사용 가능)
 * - 함수 표련식: 변수들의 호이스팅 규칙을 따르기 때문에 런타임에 값이 할당되기 전까지 사용 불가 (errer: not defined)
 *
 *
 * === 참고 ===
 *  함수 선언문  -> function add(a, b){ return a+b };
 *
 *  함수 표현식  -> const add = function(a, b){ return a+b };  // 함수 이름 생략 가능
 *            -> const add = (a, b) => a+b; // 화살표 함수
 *            -> const add = new Function('a', 'b', 'return a+b');  // Function 생성자 함수
 * ===========
 */

/* 
 const calculate = (command: Command, a: number, b: number): number => {
  if (command == "add") {
    return a + b;
  } else if (command == "substract") {
    return a - b;
  } else if (command == "multiply") {
    return a * b;
  } else if (command == "divide") {
    return a / b;
  } else if (command == "remainder") {
    return a % b;
  }
  return 0;
};
 */

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1

function calculate(command: Command, a: number, b: number): number {
  if (command == "add") {
    return a + b;
  } else if (command == "substract") {
    return a - b;
  } else if (command == "multiply") {
    return a * b;
  } else if (command == "divide") {
    return a / b;
  } else if (command == "remainder") {
    return a % b;
  }
  return 0;
}
