/*
 * ===========================
 *
 * 招商合作 => attractInvestment
 * @author   : LiChaoJun
 * @datetime : 2018/7/06
 *
 * ===========================
 */
(function() {
    var navInit = function() {
        var nav = $(".attract-investment-nav").offset().top;
        var projectAdvantage = $("#project-advantage").offset().top;
        var ecologicalSystem = $("#ecological-system").offset().top;
        // var productValue = $("#product-value").offset().top;
        // var productFunction = $("#product-function").offset().top;
        // var productAdvantage = $("#product-advantage").offset().top;
        // var productPrice = $("#product-price").offset().top;
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

            if ($(this).scrollTop() > projectAdvantage - 50) {
                $(".attract-investment-nav").find("li").removeClass("active").eq(0).addClass("active");
            }

            if ($(this).scrollTop() > ecologicalSystem - 50) {
                $(".attract-investment-nav").find("li").removeClass("active").eq(1).addClass("active");
            }

            // if ($(this).scrollTop() > productValue - 200) {
            //     $(".attract-investment-nav").find("li").removeClass("active").eq(2).addClass("active");
            // }

            // if ($(this).scrollTop() > productFunction - 200) {
            //     $(".attract-investment-nav").find("li").removeClass("active").eq(3).addClass("active");
            // }

            // if ($(this).scrollTop() > productAdvantage - 200) {
            //     $(".attract-investment-nav").find("li").removeClass("active").eq(4).addClass("active");
            // }

            // if ($(this).scrollTop() > productPrice - 200) {
            //     $(".attract-investment-nav").find("li").removeClass("active").eq(5).addClass("active");
            // }
        });
    }

    var navAnimate = function() {
        $(".attract-investment-nav").on("click", "li", function() {
            debugger;
            var id = "#" + $(this).attr("title");
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