//객체 생성 키 밸류값 
/*  <script>
        var person = {
            name: 'jocoding',
            sayHello: function() { console.log('hello'); }
        }
        console.log(person.name);
        person.sayHello();
    </script> */
  

/*    <script>
        //1. Date 객체 생성
        var now = new Date();
        //2. 연도를 가져오는 메서드 .getFullYear()
        console.log(now.getFullYear());
        //3. 월 정보를 가져오는 메서드 .getMonth() {0: 1월, 1: 2월, ... 10: 11월, 11: 12월}
        console.log(now.getMonth());
        //4. 일 정보를 가져오는 메서드 .getDate()
        console.log(now.getDate());
        //5. 1970년 1월 1일 00:00:00을 기준으로 흐른 시간을 밀리초로 표시하는 메서드 .getTime()
        console.log(now.getTime());
        //6. 특정 일의 Date 객체 생성
        var christmas = new Date('2020-12-25');
        console.log(christmas);
        //7. 특정 ms의 Date 객체 생성
        var ms = new Date(1000);
        console.log(ms); */

//사귄날 
/* <script>
        var now = new Date();
        var start = new Date('2020-06-30');

        var timeDiff = now.getTime() - start.getTime();
        var day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
        $('#love').text(day+'일째');
          console.log(day);
    </script>  */


//사귄날 + 발렌타인데이 오늘부터 얼마나 남았는가

     /*    var now = new Date();
        var start = new Date('2020-06-30');

        var timeDiff = now.getTime() - start.getTime();
        var day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
        $('#love').text(day + '일째');

        var valentine = new Date('2023-01-02');
        var timeDiff2 = valentine.getTime() - now.getTime();
        var day2 = Math.floor(timeDiff2 / (1000 * 60 * 60 * 24) + 1);
        $('#valentine').text(day2 + '일 남음'); */

//천일
/*  var ms = start.getTime() + 999 * (1000 * 60 * 60 * 24);
        var thousand = new Date(ms);
        var thousandDate = thousand.getFullYear() + '.' + (thousand.getMonth()+1) + '.' + thousand.getDate();
        $('#thousand-date').text(thousandDate); */

// 천일까지 얼마나 남음?
/*    var thousand = new Date(start.getTime() + 999 * (1000 * 60 * 60 * 24));
        var thousandDate = thousand.getFullYear() + '.' + (thousand.getMonth()+1) + '.' + thousand.getDate();
        $('#thousand-date').text(thousandDate);

        // thousand, now, getTime()
        var timeDiff3 = thousand.getTime() - now.getTime();
        var day3 = Math.floor(timeDiff3 / (1000 * 60 * 60 * 24) + 1);
        $('#thousand').text(day3 + '일 남음'); */