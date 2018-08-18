/*
 * ===========================
 *
 * 关于织布鸟 => aboutUS
 * @author   : LiChaoJun
 * @datetime : 2018/7/09
 *
 * ===========================
 */
(function() {
    var navInit = function() {
        var nav = $(".attract-investment-nav").offset().top;
        var companyIntroduction = $("#company-introduction").offset().top;
        var memorabilia = $("#memorabilia").offset().top;
        var number = $("#number").offset().top;
        // var brand = $("#brand").offset().top;
        var contactUs = $(".contact-us-box").offset().top;
        $(window).scroll(function() {
            if ($(this).scrollTop() > nav) {
                $(".attract-investment-nav").css({
                    position: "fixed",
                    top: "0",
                    left: "50%",
                    "margin-left": "-740px",
                })
            } else {
                $(".attract-investment-nav").css({
                    position: "absolute",
                    top: "110px",
                    left: "-140px",
                    "margin-left": "0px",
                })
            }

            if ($(this).scrollTop() > companyIntroduction - 50) {
                $(".attract-investment-nav").find("li").removeClass("active").eq(0).addClass("active");
            }

            if ($(this).scrollTop() > memorabilia - 50) {
                $(".attract-investment-nav").find("li").removeClass("active").eq(1).addClass("active");
            }

            if ($(this).scrollTop() > number - 50) {
                $(".attract-investment-nav").find("li").removeClass("active").eq(2).addClass("active");
            }

            // if ($(this).scrollTop() > brand - 50) {
            //     $(".attract-investment-nav").find("li").removeClass("active").eq(3).addClass("active");
            // }

            if ($(this).scrollTop() > contactUs - 50) {
                $(".attract-investment-nav").find("li").removeClass("active").eq(3).addClass("active");
            }
        });
    }

    var navAnimate = function() {
        $(".attract-investment-nav").on("click", "li", function() {
            var id;
            if ($(this).index() == 3) {
                id = "." + $(this).attr("title");
            } else {
                id = "#" + $(this).attr("title");
            }
            var offsetNum = $(id).offset().top;
            $("html,body").animate({
                scrollTop: offsetNum
            }, 500);
        })
    }

    /*------ 执行方法 ------*/
    $(function() {
        navInit();
        navAnimate();
    });
}());