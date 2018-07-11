/*
 * ===========================
 *
 * 公用JS => common
 * @author   : LiChaoJun
 * @datetime : 2018/07/11
 *
 * ===========================
 */
(function() {
    var clickFunc = function() {
        /*弹出右侧功能*/
        $(".right-function-box a").click(function() {
            if ($(this).index() == 3) {
                $("html,body").animate({
                    scrollTop: 0
                }, 300);
            } else {
                $(this).addClass("active").siblings().removeClass('active');
                $(".right-function-popup-box").eq($(this).index()).addClass("right-function-popup-active").siblings().removeClass('right-function-popup-active');
                $(".right-function-box").animate({
                    right: 0
                }, 300);
            }
        })

        /*关闭右侧功能*/
        $(".right-function-popup-header i").click(function() {
            $(".right-function-box").animate({
                right: '-300px'
            }, 300, function() {
                $(".right-function-box a").removeClass('active');
            });
        })
    }

    var scrollToTop = function() {
        var windowHeight = $(window).height();
        $(window).scroll(function() {
            if ($(this).scrollTop() > windowHeight) {
                $(".right-function-box a").eq(3).removeClass("hidden");
            } else {
                $(".right-function-box a").eq(3).addClass("hidden");
            }
        })
    }

    /*------ 执行方法 ------*/
    $(function() {
        clickFunc();
        scrollToTop();
    });
}());