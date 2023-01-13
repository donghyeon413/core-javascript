import { getNode } from "./getNode"
import { addClass, removeClass } from "./css.js";


export function showAlert(node,text = '에러입니다.', timeout = 1500){

  if(typeof node === 'string') node = getNode(node);
  // 노드닷텍스트컨텐트 텍스트로 대체함
  node.textContent = text;

  addClass(node,'is-active');
  setTimeout(() => {
    // 일정 시간 지나면 리무비됨 
    removeClass(node,'is-active');
  }, timeout);

}


// set time out 은 스케쥴 관ㄹㅣ?!

showAlert('.alert','올바른 정보를 입력해주세요', 3000) //3000은 뭐지 ?, //올바른정보는 노드텍스크컨텐트 =텍스트 안으로