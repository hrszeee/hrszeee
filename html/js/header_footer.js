$(document).ready(function(){
    
    /* ----- top button ----- */
    $('#top_btn button').click(function(){
        $('html,body').stop(true,true).animate({scrollTop:"0"},"easeOutQuart");
    });

    $(window).scroll(function(){

        /* 스크롤 값 확인 */
        $("#txt1").text($(this).scrollTop());

        let scroll = $(window).scrollTop();
        if(scroll > 10) {
            $(".header_wrap").css({"background":"#fff"});
            // $(".header").css({"background-color":"transparent"});
            // $(".menulist").css({"color":"#3e3a39"});
            // $(".nav_button li.num").css({
            //     "color":"#3e3a39","border":"1px solid #3e3a39"
            // });
            // $(".header .logo a").css({"background":"url('../img/logo.png')no-repeat center"});
        } else{
            $(".header_wrap").css("background" , "none");
            // $(".header").css({"background-color":"rgba(0,0,0,0.0)"});
            // $(".menulist").css({"color":"#fff"});
            // $(".nav_button li.num").css({
            //     "color":"#fff","border":"1px solid #fff"
            // });
            // $(".header .logo a").css({"background":"url('../img/logow.png')no-repeat center"});
        }
        
    });

});