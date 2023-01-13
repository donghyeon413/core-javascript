//2.한꺼번에 가져오는 파일로 걸기 //getInputValue 경로가져올때 lib 안에있는 걸로 가져와야한다
import { jujeobData } from "./data/data.js";
import { clearContents, getInputValue, getNode, getRandom, insertLast, isNumericString } from "./lib/index.js";



console.log( isNumericString('123') );
// console.log ( isNaN('asdsa12331'));

//1. 주접떨기 input (id값은 모듈과 상관없이 콘솔에 적힘)
const submit = getNode('#submit');
const resultArea = getNode('.result');

function clickSubmitHandler(e){

  //주접떨기 버튼 누르면 새로고침되니까 새로고침막아주려고 
  e.preventDefault();
  //5. 인풋안에 입력한 인풋값가져오기 
  let name = getInputValue('#nameField');
  let list = jujeobData(name)
  let pick = list[getRandom(list.length-1)];

  if(!name){
    console.log('이름을 입력해주세요 !!');
    return
  }

  if(isNumericString(name)){
    console.log('제대로 된 이름을 입력해주세요.');
    return
  }


  clearContents(resultArea)
  insertLast(resultArea,pick)
}
submit.addEventListener('click',clickSubmitHandler);

