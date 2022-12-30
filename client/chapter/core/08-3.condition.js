/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

<<<<<<< HEAD

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
		  DAWN       = '새벽';

let thisTime= LUNCH;


/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'
=======
const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = DAWN;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

switch (thisTime) {
  case MORNING: console.log('디스코드를 켠다.'); break;
  case LUNCH: console.log('점심을 맛있게 먹는다'); break;
  case DINNER: console.log('멘토링 수업 준비를 한다.'); break;
  case NIGHT: console.log('스터디 발표 준비를 한다.'); break;
  case LATE_NIGHT:
  case DAWN: console.log('꿈속에서 배웠던 코드를 생각한다.'); break;
}



if(thisTime === MORNING){
  console.log('디스코드를 켠다.');
}else if(thisTime === LUNCH){
  console.log('점심을 맛있게 먹는다');
}else if(thisTime === DINNER){
  console.log('멘토링 수업 준비를 한다.');
}else if(thisTime === NIGHT){
  console.log('스터디 발표 준비를 한다.');
}else if(thisTime === LATE_NIGHT || thisTime === DAWN){
  console.log('드림 코딩');
}




>>>>>>> 15d7fa3ffa6215f4e907e1d08063c26895b8d75a

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

<<<<<<< HEAD
// switch(thistime){
//   case 'MORNING':
//     alert("아침뉴스기사글읽는다.");
//     break;
//   case 'LUNCH':
//     alert('점심식당밥먹기');
//     break;
//   case 'DINNER':
//     alert('조깅')
//     break;
//   case 'NIGHT':
//     alert('친구전화수다')
//     break;
//   case 'LATE_NIGHT'||'DAWN'
//     alert("한밤중")
//     break;
//     console.log()??
// }




/* switch문 → if문 변환 --------------------------------------------------- */


// if(thistime == 'MORNING') {
//   alert("아침이다.");
// } else if {
//   (thistime == 'LUNCH') 
//   alert("점심이다.");
// }
//   else if{
//     (thistime == 'DINNER)
//   alert("저녁이다.");
// }
//   else if{ (thisTime =="DAWN")
//   alert( '한방중이다' );
// }
=======
/* switch문 → if문 변환 --------------------------------------------------- */



// console.log('디스코드를 켠다.');
// console.log('점심을 맛있게 먹는다');
// console.log('멘토링 수업 준비를 한다.');
// console.log('스터디 발표 준비를 한다.');
// console.log('꿈속에서 배웠던 코드를 생각한다.');








>>>>>>> 15d7fa3ffa6215f4e907e1d08063c26895b8d75a





/* switch vs. if -------------------------------------------------------- */




<<<<<<< HEAD
/* 0~6 의 값을 받는다 */

// Math.round(Math.random()*6) 정수 뽑는법


function getDay(dayValue) {
  switch (dayValue) {
    case 0:
      return "일";

    case 1:
      return "월";

    case 2:
      return "화";

    case 3:
      return "수";

    case 4:
      return "목";

    case 5:
      return "금";

    case 6:
      return "토";
  }
}

let result = getDay(4);
=======



// 0 ~ 6 의 값을 받는다.

// 0 = '일'
// 1 = '월'
// 2 = '화'
// 3 = '수'
// 4 = '목'
// 5 = '금'
// 6 = '토'



// 임의 숫자를 넣어서 무슨 요일 인지를 알려주는 함수를 만들어보자 



function getRandom(n){
  return Math.round(Math.random() * n)
}




function getDay(dayValue){

  switch (dayValue) {
    case 0: return '일';
    case 1: return '월';
    case 2: return '화';
    case 3: return '수';
    case 4: return '목';
    case 5: return '금';
    case 6: return '토';
  
  }
}


let result = getDay(getRandom(6));

>>>>>>> 15d7fa3ffa6215f4e907e1d08063c26895b8d75a
console.log(result);



<<<<<<< HEAD
=======




























>>>>>>> 15d7fa3ffa6215f4e907e1d08063c26895b8d75a
