/* eslint no-undef:'warn' */
/* eslint no-unused-vars: 'off' */


// 1. 인풋 밸류값 가져오기
// 2. 이벤트 핸들려 연결하기
// 3. 이벤트 기본동작 차단하기
// 4. 두 수의 합을 더해주기
// 5. 화면의 출력하기


// 동동현 한줄짜다 포기
// function calculator( n1, operator, n2 ){
//   let result = 0;
//   if(operator === '+'){
//     result = FirstNumber(n1) + SecondNumer(n2);
//   }
//   return String(result);
 
// }

//1. getnode 이어주고 찾기
//console.log( getNode('#firstNumber') );
//2. getNode 값 확인하고 값담기
const firstInput = getNode('#firstNumber');
const secondInput = getNode('#secondNumber');

//3.이벤트핸들러연결
const done = getNode("#done");
const result = getNode("#result");


function getInputValue(node){
  if(typeof node === 'string') node = getNode(node);
  //11. 다른 선택자 가져오면안되고 input만 가져와야해서 
  // tagName은 항상 대문자여서 대문자로 적어주기
  if(node.tagName !== 'INPUT') 
  refError('getInputValue 함수는 INPUT ELEMENT만 허용합니다.')
  // 9. 노드의 value값 가져옴 // 여기서 문자열로 +(node.value)
  // 받아버리면 바로 숫자가되지만 재사용성을 고려해서 숫자가 아닌 결과값에서
  // 나중에 형변환 하는것이 좋다?
  return node.value
}

// 화살표 함수로 단축
// const sum = (valueA,valueB) => valueA + valueB;
// 풀어서쓴거 아래
function sum(valueA,valueB){
  return valueA + valueB;
}

// = 안보이게 해주는녀석 노드텍스트컨텐트 공백처리해서
function clearContents(node){
  if(typeof node ==='string') node = getNode(node);
  node.textContent = '';
}

function handler(e){
  e.preventDefault();

  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue,secondValue);

  clearContents('.result');

  insertLast('.result',total)

}

function inputHanler(){
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue,secondValue);

  clearContents(result);
  insertLast(result,total);
  console.log(firstValue,secondValue)
}

done.addEventListener('click',handler)

firstInput.addEventListener('change',inputHanler)
secondInput.addEventListener('change',inputHanler)
