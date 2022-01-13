        // 새로고침 자바


        var filter = "win16|win32|win64|mac|macintel"; 
        if ( navigator.platform ) { 
            if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) { 
                //mobile 
                
            } else { 
                //pc 
                $(function(){
                    $(window).resize(function (){
        
                    var width_size = window.outerWidth;
        
                    if (width_size=749.99) {
                        document.location.reload();
                    }
                })
                });
            } 
        }

     
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
           
        });
    });
    $(function(){
        $('.arrival-box .main-li li').click(function(){
            $('.arrival h2:nth-of-type(1)').text(this.innerHTML);
            $('.arrival-box').slideUp();
            $('.arrival h2:nth-of-type(2)').text("");
            $('.arrival').removeClass('click')
      
        });
    });


    // 모바일 버전
    if (matchMedia("screen and (max-width: 749.99px)").matches) {
        // 모바일 예매
        $(function () {
            $('.hide .Korean p').click(function () {
                $('.hide .Korean li').slideToggle();
                $('.hide .main-li li').not('.Korean li').slideUp();
            });
            $('.hide .Northeast_Asia p').click(function () {
                $('.hide .Northeast_Asia li').slideToggle();
                $('.hide .main-li li').not('.Northeast_Asia li').slideUp();
            });
            $('.hide .Southeast_Asia p').click(function () {
                $('.hide .Southeast_Asia li').slideToggle();
                $('.hide .main-li li').not('.Southeast_Asia li').slideUp();
            });
            $('.hide .Oceania p').click(function () {
                $('.hide .Oceania li').slideToggle();
                $('.hide .main-li li').not('.Oceania li').slideUp();
            });
            $('.hide .Americas p').click(function () {
                $('.hide .Americas li').slideToggle();
                $('.hide .main-li li').not('.Americas li').slideUp();
            });

        });



        // 매뉴창 생김,없어짐
        $(function(){
            $('.mobile-nav span').click(function(){
                $('.mobile-nav').animate({'marginLeft':'100%'},1000)
                $("html, body").removeClass('not_scroll');
            });
            $('#mobile-menu img[alt="hamburger"]').click(function(){
                $('.mobile-nav').animate({'marginLeft':'0'},1000)
                $("html, body").addClass('not_scroll');
            });
        });


        // 매뉴창 메인버튼 누르면 서브가 생기고 없어짐
        $(function(){
            $('.mobile-nav .reservation').click(function(){
                $('.mobile-nav .reservation').toggleClass('click');
                $('.mobile_butome').not('.reservation').removeClass('click')
                $('.mobile-reservation').fadeIn(0);
                $('.mobile-service').fadeOut(0);
                $('.mobile-Benefits').fadeOut(0);
                $('.mobile-point').fadeOut(0);
            });
            $('.mobile-nav .service').click(function(){
                $('.mobile-nav .service').toggleClass('click');
                $('.mobile_butome').not('.service').removeClass('click')
                $('.mobile-service').fadeIn(0);
                $('.mobile-reservation').fadeOut(0);
                $('.mobile-Benefits').fadeOut(0);
                $('.mobile-point').fadeOut(0);
            });
            $('.mobile-nav .Benefits').click(function(){
                $('.mobile-nav .Benefits').toggleClass('click');
                $('.mobile_butome').not('.Benefits').removeClass('click')
                $('.mobile-Benefits').fadeIn(0);
                $('.mobile-reservation').fadeOut(0);
                $('.mobile-service').fadeOut(0);
                $('.mobile-point').fadeOut(0);
            });
            $('.mobile-nav .point').click(function(){
                $('.mobile-nav .point').toggleClass('click');
                $('.mobile_butome').not('.point').removeClass('click')
                $('.mobile-point').fadeIn(0);
                $('.mobile-reservation').fadeOut(0);
                $('.mobile-Benefits').fadeOut(0);
                $('.mobile-service').fadeOut(0);
            });
        });

    }


 