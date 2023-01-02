//DOM이란? Document Object Model
//웹 화면을 구성하는 html 코드를 쉽게 접근할 수 있는 모델

{/* <h1>자기소개</h1>
<textarea class="form-control" rows="3" id="jasoseol">저는 인성 문제가 없습니다.</textarea>
<script>
    let content = document.getElementById('jasoseol').value;
    console.log(content);
</script> */}

//.length 를 이용한 문자열의 길이 확인 (공백포함)
{/* <script>
        let content = document.getElementById('jasoseol').value;
        console.log(content.length)
        </script> */}

//200글자 현재 입력 span태그와 형변환 더하기태그
{/* <textarea class="form-control" rows="3" id="jasoseol">저는 인성 문제가 없습니다.</textarea>
<span id="count">(0/200)</span>
<script>
    var content = document.getElementById('jasoseol').value;
    document.getElementById('count').innerHTML = '(' + content.length + '/200)'; */}


//함수로 만들기
/* 
function counter() {
  var content = document.getElementById('jasoseol').value;
     document.getElementById('count').innerHTML = '(' + content.length + '/200)';
      };
  counter(); */
   
//함수를 텍스트 아레아에 추가

{/* <textarea onkeydown='counter();' class="form-control" rows="3" id="jasoseol">저는 인성 문제가 없습니다.</textarea>
    <span id="count">(0/200)</span>
    <script>
        function counter() {
            var content = document.getElementById('jasoseol').value;
            document.getElementById('count').innerHTML = '(' + content.length + '/200)';
        }
        counter(); */}

//.substring() 함수 이용해 200자 이후는 출력x 
//content.substring(0,200); 0이상 200미만(인덱스배열기준)

{/* <script>
function counter() {
    var content = document.getElementById('jasoseol').value;
    if (content.length > 200) {
        content = content.substring(0,200);
        document.getElementById('jasoseol').value = content;
    }
    document.getElementById('count').innerHTML = '(' + content.length + '/200)';
}
counter();
</script> */}

