     // 이벤트
     function  Slide(){
        $('#event ul').stop().animate({'marginLeft':'-100%'},1000,function(){
            $('#event li:first').appendTo('#event ul');
            $('#event ul').css({marginLeft:0});
        });
    }
    setInterval(Slide,5000);
    
    // 예매
    $(function(){
        $('.depart').click(function(){
            $('.depart').toggleClass('click');
            $('.Ticketing-box').not('.depart').removeClass('click')
            $('.depart-box').slideToggle();
            $('.hide').not('.depart-box').slideUp();
        });
        $('.arrival').click(function(){
            $('.arrival').toggleClass('click');
            $('.Ticketing-box').not('.arrival').removeClass('click')
            $('.arrival-box').slideToggle();
            $('.hide').not('.arrival-box').slideUp();
        });
        $('.daytogo').click(function(){
            $('.daytogo').toggleClass('click');
            $('.Ticketing-box').not('.daytogo').removeClass('click')
            $('.daytogo-box').slideToggle();
            $('.hide').not('.daytogo-box').slideUp();
        });
        $('.comingday').click(function(){
            $('.comingday').toggleClass('click');
            $('.Ticketing-box').not('.comingday').removeClass('click')
            $('.comingday-box').slideToggle();
            $('.hide').not('.comingday-box').slideUp();
        });
    });

    // 가는날 달력
    var today = new Date();
    function buildCalendar(){
    var row = null
    var cnt = 0;
    var calendarTable = document.getElementById("calendar");
    var calendarTableTitle = document.getElementById("calendarTitle");
    calendarTableTitle.innerHTML = today.getFullYear()+"년"+(today.getMonth()+1)+"월";
    
    var firstDate = new Date(today.getFullYear(), today.getMonth(), 1);
    var lastDate = new Date(today.getFullYear(), today.getMonth()+1, 0);
    while(calendarTable.rows.length > 2){
        calendarTable.deleteRow(calendarTable.rows.length -1);
    }

    row = calendarTable.insertRow();
    for(i = 0; i < firstDate.getDay(); i++){
        cell = row.insertCell();
        cnt += 1;
    }

    row = calendarTable.insertRow();

    for(i = 1; i <= lastDate.getDate(); i++){
        cell = row.insertCell();
        cnt += 1;

        cell.setAttribute('id', i);
        cell.innerHTML = i;
        cell.align = "center";

        cell.onclick = function(){
            clickedYear = today.getFullYear();
            clickedMonth = ( 1 + today.getMonth() );
            clickedDate = this.getAttribute('id');

            clickedDate = clickedDate >= 10 ? clickedDate : '0' + clickedDate;
            clickedMonth = clickedMonth >= 10 ? clickedMonth : '0' + clickedMonth;
            clickedYMD = clickedYear + "-" + clickedMonth + "-" + clickedDate;

            opener.document.getElementById("date").value = clickedYMD;
            self.close();
        }

        if (cnt % 7 == 1) {
            cell.innerHTML =  i ;
        }

        if (cnt % 7 == 0){
            cell.innerHTML =  i ;
            row = calendar.insertRow();
        }
    }

    if(cnt % 7 != 0){
        for(i = 0; i < 7 - (cnt % 7); i++){
            cell = row.insertCell();
        }
    }
    // 달력 날자 클릭
    $(function(){
        $('#calendar td').click(function(){
            $('.daytogo h2:nth-of-type(1)').text(calendarTitle.innerHTML+this.innerHTML+"일");
            $('.daytogo-box').slideUp();
            $('.daytogo h2:nth-of-type(2)').text("");
            $('.daytogo').removeClass('click')
        });
    });
    }

    function prevCalendar(){
        today = new Date(today.getFullYear(), today.getMonth()-1, today.getDate());
        buildCalendar();
    }

    function nextCalendar(){
        today = new Date(today.getFullYear(), today.getMonth()+1, today.getDate());
        buildCalendar();
    }

    // 오는날 달력
    function zzz(){
    var row = null
    var cnt = 0;
    var calendarTable = document.getElementById("qq");
    var calendarTableTitle = document.getElementById("ww");
    calendarTableTitle.innerHTML = today.getFullYear()+"년"+(today.getMonth()+1)+"월";
    
    var firstDate = new Date(today.getFullYear(), today.getMonth(), 1);
    var lastDate = new Date(today.getFullYear(), today.getMonth()+1, 0);
    while(calendarTable.rows.length > 2){
        calendarTable.deleteRow(calendarTable.rows.length -1);
    }

    row = calendarTable.insertRow();
    for(i = 0; i < firstDate.getDay(); i++){
        cell = row.insertCell();
        cnt += 1;
    }

    row = calendarTable.insertRow();

    for(i = 1; i <= lastDate.getDate(); i++){
        cell = row.insertCell();
        cnt += 1;

        cell.setAttribute('class', i);
        cell.innerHTML = i;
        cell.align = "center";

        cell.onclick = function(){
            clickedYear = today.getFullYear();
            clickedMonth = ( 1 + today.getMonth() );
            clickedDate = this.getAttribute('class');

            clickedDate = clickedDate >= 10 ? clickedDate : '0' + clickedDate;
            clickedMonth = clickedMonth >= 10 ? clickedMonth : '0' + clickedMonth;
            clickedYMD = clickedYear + "-" + clickedMonth + "-" + clickedDate;

            opener.document.getElementById("date").value = clickedYMD;
            self.close();
        }

        if (cnt % 7 == 1) {
            cell.innerHTML =  i ;
        }

        if (cnt % 7 == 0){
            cell.innerHTML =  i ;
            row = qq.insertRow();
        }
    }

    if(cnt % 7 != 0){
        for(i = 0; i < 7 - (cnt % 7); i++){
            cell = row.insertCell();
        }
    }
    // 달력 날자 클릭
    $(function(){
        $('#qq td').click(function(){
            $('.comingday h2:nth-of-type(1)').text(calendarTitle.innerHTML+this.innerHTML+"일");
            $('.comingday-box').slideUp();
            $('.comingday h2:nth-of-type(2)').text("");
            $('.comingday').removeClass('click')
        });
    });

    }

    function ppp(){
        today = new Date(today.getFullYear(), today.getMonth()-1, today.getDate());
        zzz();
    }

    function nnn(){
        today = new Date(today.getFullYear(), today.getMonth()+1, today.getDate());
        zzz();
    }

    // 스토어
    $(function(){
        $('.food-button').click(function(){
            $('.souvenir').fadeOut(0);
            $('.food').fadeIn();
            $('.food-button').toggleClass('click')
            $('.souvenir-button').removeClass('click')
        });
        $('.souvenir-button').click(function(){
            $('.food').fadeOut(0);
            $('.souvenir').fadeIn();
            $('.souvenir-button').toggleClass('click')
            $('.food-button').removeClass('click')
        });
    });

    // 예매 버튼
    $(function(){
        $('.depart-box .main-li li').click(function(){
            $('.depart h2:nth-of-type(1)').text(this.innerHTML);
            $('.depart h2:nth-of-type(2)').text("");
            $('.depart-box').slideUp();
            $('.depart').removeClass('click')
            $('.depart-box .main-li li').slideUp();
        });
    });
    $(function(){
        $('.arrival-box .main-li li').click(function(){
            $('.arrival h2:nth-of-type(1)').text(this.innerHTML);
            $('.arrival-box').slideUp();
            $('.arrival h2:nth-of-type(2)').text("");
            $('.arrival').removeClass('click')
            $('.depart-box .main-li li').slideUp();
        });
    });

    
    $(function(){
        $('.hide .Korean p').click(function(){
            $('.hide .Korean li').slideToggle();
            $('.hide .main-li li').not('.Korean li').slideUp();
        });
        $('.hide .Northeast_Asia p').click(function(){
            $('.hide .Northeast_Asia li').slideToggle();
            $('.hide .main-li li').not('.Northeast_Asia li').slideUp();
        });
        $('.hide .Southeast_Asia p').click(function(){
            $('.hide .Southeast_Asia li').slideToggle();
            $('.hidex .main-li li').not('.Southeast_Asia li').slideUp();
        });
        $('.hide .Oceania p').click(function(){
            $('.hide .Oceania li').slideToggle();
            $('.hide .main-li li').not('.Oceania li').slideUp();
        });
        $('.hide .Americas p').click(function(){
            $('.hide .Americas li').slideToggle();
            $('.hide .main-li li').not('.Americas li').slideUp();
        });

    });