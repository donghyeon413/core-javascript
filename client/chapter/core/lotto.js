//로또 생성기 공 1개 만들기 정수형으로 
/* let num = Math.random() * 45 + 1;
let ball1 = parseInt(num);
document.write(ball1);
 */

/* // 배열로 공 6개 넣기
let lotto =  [;
//lotto.push(6); 배열 마지막에 추가
document.write(lotto); */


//반복코드로 로또번호 6개
/* var lotto=[];
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
document.write(lotto); */

//반복문 for, while로 로또번호 생성 
//단점 중복출력 나올수 있음
/* var lotto=[];
for (var i = 0; i < 6; i++){
  lotto.push(parseInt(Math.random() * 45 + 1));
}
document.write(lotto); */

//중복출력 방지 조건문 if 사용
/* var lotto=[];
for (var i = 0; i < 6; i++){
  var num = parseInt(Math.random() * 45 + 1);
  if (lotto.indexOf(num) == -1){
    lotto.push(num)
  }
}
document.write(lotto) */

//while 문으로 로또 생성기
/* var lotto=[];
while(lotto.length < 6) {
  var num = parseInt(Math.random() * 45 + 1);
  if (lotto.indexOf(num) == -1){
    lotto.push(num);
  }
}
document.write(lotto); */

//.sort() ==> 배열 값 정렬로 로또번호 낮은순부터 식별
//하지만 .sort()만 쓰면 맨 앞자리 낮은순 정렬이라 [1,11,2,22,3,33] 과 같은 방식으로 정렬이 됨
//그렇다면 .sort((a, b)=>a-b) 를 사용 (오름차순 정렬) b-a (내림차순)

/* var lotto=[];

while(lotto.length < 6) {
  var num = parseInt(Math.random() * 45 + 1);
  if (lotto.indexOf(num) == -1){
    lotto.push(num);
    
  }
}
lotto.sort((a, b)=>a-b)
document.write(lotto); */









