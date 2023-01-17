

/* readyState
0: uninitalized
1: loading
2: loaded
3:interative
4:complete
 */


// xhrData 함수 만들기 method, url

function xhrData(method,url){

  
  const xhr = new XMLHttpRequest();
  
  
  //비동기 통신 오픈
 

xhr.addEventListner('readystatechange',()=>{
  if(xhr.status >= 200 && xhr.status < 400){
    if(xhr.readyState ===4){
      console.log('통신 성공');
      console.log(JSON.parse(xhr.response));
    }
  }else{
    console.log('통신 실패');
  }
})

//서버에 요청
xhr.send(JSON.stringify());
}

xhrData('POST', 'https://jsonplaceholder.typicode.com/users', {
  "name": "kindtiger",
  "username": "seonbeom",
  "email": "tiger@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
});