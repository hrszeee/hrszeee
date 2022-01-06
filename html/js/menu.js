$(document).ready(function(){

    $(".c2-list>div:nth-child(1)").show();
    $(".c2-setup_btn ul li:nth-child(1) a").addClass('c2-sb-active');

	$(".c2-setup_btn ul li a").on('click',function(){
        
        $(".c2-setup_btn ul li a").removeClass('c2-sb-active');
		$(this).addClass('c2-sb-active');

		c2_num=$(this).parent('li').index()+1;

        $(".c2-list>div").hide();
        $(".c2-list>div:nth-of-type("+c2_num+")").stop(true,true).fadeIn(600,'easeOutCubic');

        return false; // a기능 차단

    });

});