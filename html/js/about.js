$(document).ready(function(){

    /* 연혁, 맛의 비밀 , 온족의 역사 */
    if($(this).scrollTop()>-1){
        $("#about_nav").css({"height":"60px","opacity":"1"},400,"easeOutCubic");
        $("#about_nav-tablet").css({"height":"50px","opacity":"1"},400,"easeOutCubic");
        $("#about_nav-mobile").css({"height":"60px","opacity":"1"},400,"easeOutCubic");
    }
    
    /* about_nav : 상단 서브 메뉴 a 효과 */
    var $root = $('html, body');

    $('.about_nav-wrap ul li> a').click(function() {

        $root.stop(true,true).animate({

            scrollTop: $( $.attr(this, 'href') ).offset().top

        }, 500, "easeInOutCubic");

        return false;

    });

    /* 스크롤 시 a 효과 */
    $(window).scroll(function(){

        if($(this).scrollTop()>=0){

        }else{
            
        }

    });
    /* // 스크롤 시 a 효과 */

    /* // about_nav : 상단 서브 메뉴 a 효과 */

    /* // 연혁, 맛의 비밀 , 온족의 역사 */
    

});