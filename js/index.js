$(function(){

   // menu
    $(".menu").click(function(){
        $(".menu_wrap").animate({"right":"0"},"fast");
    });

    $(".close").click(function(){
        $(".menu_wrap").animate({"right":"-100%"},"fast");
    });

    // submenu
    $(".m_gnb > li").click(function(){
        // 모든 메뉴 색 초기화
        $(".m_gnb > li").css("color","");
        // 클릭 메뉴 색만 변경
        $(this).css("color","#ef426f");
        $(this).children("ul").slideToggle();
    });

    // scrollTo
    $('.m_gnb > li > a, #gnb ul li a, .totop').click(function(e){
        $.scrollTo(this.hash || 0, 1500);
        e.preventDefault();
    });

    //totop
    $(window).scroll(function(){
        // 화면 높이
        let w_height = $(this).height();
        // 스크롤 높이
        let sc_num = $(this).scrollTop();
        
        if ( sc_num > w_height ){
            $(".totop").fadeIn(400);
        }else{
            $(".totop").fadeOut(400);
        }
    });
});