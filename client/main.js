

// 1. 인풋 밸류값 가져오기
// 2. 이벤트 핸들려 연결하기
// 3. 이벤트 기본동작 차단하기
// 4. 두 수의 합을 더해주기
// 5. 화면의 출력하기

/* eslint no-undef:'warn' */

function calculator( n1, operator, n2 ){
  let result = 0;
  if(operator === '+'){
    result = FirstNumber(n1) + SecondNumer(n2);
  }
  return String(result);
 
}