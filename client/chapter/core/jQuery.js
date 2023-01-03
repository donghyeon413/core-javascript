//jQeury 장점 1간결한 문법 2편리한 API 3크로스 브라우징
//code.jquery.com

/*     <textarea id="content">jQuery를 배워보자</textarea>
    <script
    src="https://code.jquery.com/jquery-3.5.1.js"
    integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
    crossorigin="anonymous"></script>
    <script>
        console.log($('#content').val());
    </script> */

//문법을 jQuery문법으로 변환시켜보기
/* <h1>jQuery 이벤트</h1>
    <button id="click" onclick="hello();">클릭</button>
    <script
  src="https://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  crossorigin="anonymous"></script>
    <script>
        function hello() {
            console.log('hello');
        }
 </script> */

/* <button id="click">클릭</button>
    <script
  src="https://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  crossorigin="anonymous"></script>
    <script>
        function hello() {
            console.log('hello');
        }
        $('#click').click(hello);
  </script> */

//익명함수 함수를 정의하지않고 바로 사용(호출)
{/* <script>
        $('#click').click(function(){
            console.log('hello');
        });
    </script> */}

//html 드론 침 발사
/* <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>스타크래프트</title>
    <style>
        .background {
            position: relative;
            background-image: url('background.png');
            background-size: 500px 330px;
            width: 500px;
            height: 330px;
        }
        #drone {
            position: absolute;
            width: 100px;
            height: 100px;
            top: 100px;
            left: 60px;
        }
        #bunker {
            position: absolute;
            width: 150px;
            height: 150px;
            top: 80px;
            right: 20px;
        }
        #spit {
            display: none;
            position: absolute;
            top: 140px;
            left: 150px;
            width: 50px;
            height: 30px;
            z-index: 2;
        }
    </style>
</head>
<body>
    <div class='background'>
        <img id='drone' src="drone.png" alt="drone">
        <img id='spit' src="spit.png" alt="spit">
        <img id='bunker' src="bunker.png" alt="bunker">
    </div>
    <script
  src="https://code.jquery.com/jquery-3.5.1.js"
  integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
  crossorigin="anonymous"></script>
    <script>
        //$() .click() 익명함수
        $('#drone').click(function(){
            console.log('침 발사');
        });
    </script>
</body>
</html> */


//.fadein() jQuery함수 이용해보기 침 나타내기
{/* <script>
$('#drone').click(function(){
    // $() .
    $('#spit').fadeIn();
});
</script> */}

//침 발사 목표물 이동 .animate() 함수 이용
/*   $('#drone').click(function(){
            $('#spit').fadeIn();
            $('#spit').animate({left: '+=250'});
        }); */

//.fadeout() 함수로 침 사라지게 + 침 다시 가져오게
{/* <script>
$('#drone').click(function(){
    $('#spit').fadeIn();
    $('#spit').animate({left: '+=250'});
    $('#spit').fadeOut();
    $('#spit').css({left: '150px'}); //침 원래 위치로 이동
});
</script> */}

// 침으로 hp 감소 시키는것 콜백함수로 시점 맞추기
/*    <script>
        var hp = 3;
        $('#drone').click(function(){
            $('#spit').fadeIn();
            $('#spit').animate({left: '+=250'});
            $('#spit').fadeOut(function(){
                hp = hp - 1;
                $('#hp').text('HP :' + hp);
            });
            $('#spit').css({left: '150px'});
        });
    </script> */

//hp 가 0이 되면 벙커가 사라짐
/*  <script>
        var hp = 3;
        $('#drone').click(function(){
            $('#spit').fadeIn();
            $('#spit').animate({left: '+=250'});
            $('#spit').fadeOut(function(){
                hp = hp - 1;
                $('#hp').text('HP: ' + hp);
                if(hp == 0) {
                    $('#bunker').fadeOut();
                }
            });
            $('#spit').css({left: '150px'});
        });
    </script> */
