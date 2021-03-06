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
            if ($(this).index() == 2) {
                $("html,body").animate({
                    scrollTop: 0
                }, 300);
            } else {
                $(this).addClass("active").siblings().removeClass('active');
                $(".right-function-popup-box").eq($(this).index()).addClass("right-function-popup-active").siblings().removeClass('right-function-popup-active');
                $(".right-function-box").animate({
                    left: 0
                }, 300);
            }
        })

        /*关闭右侧功能*/
        $(".right-function-popup-header i").click(function() {
            $(".right-function-box").animate({
                left: '-300px'
            }, 300, function() {
                $(".right-function-box a").removeClass('active');
            });
        })
    }

    var scrollToTop = function() {
        var windowHeight = $(window).height();
        var headerPosition = $(".header-wrap").offset().top;
        $(window).scroll(function() {
            if ($(this).scrollTop() > windowHeight) {
                $(".right-function-box a").eq(2).removeClass("hidden");
            } else {
                $(".right-function-box a").eq(2).addClass("hidden");
            }

            if ($(this).scrollTop() > headerPosition) {
                $(".header-wrap").css({
                    position: "fixed",
                    top: "0",
                    left: "0"
                })
            } else {
                $(".header-wrap").css({
                    position: "relative",
                })
            }

        })
    }

    /*------ 执行方法 ------*/
    $(function() {
        clickFunc();
        scrollToTop();
    });
}());