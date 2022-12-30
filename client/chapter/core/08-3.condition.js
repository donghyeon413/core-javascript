/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */


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

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

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





/* switch vs. if -------------------------------------------------------- */




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
console.log(result);



