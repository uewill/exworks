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
        var model = $("#model").offset().top;
        var support = $("#support").offset().top;
        var processName = $("#process").offset().top;
        var caseName = $("#case").offset().top;
        var answerQuestions = $("#answer-questions").offset().top;
        var join = $("#join").offset().top;
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

            if ($(this).scrollTop() > projectAdvantage - 50) {
                $(".attract-investment-nav").find("li").removeClass("active").eq(0).addClass("active");
            }

            if ($(this).scrollTop() > ecologicalSystem - 50) {
                $(".attract-investment-nav").find("li").removeClass("active").eq(1).addClass("active");
            }

            if ($(this).scrollTop() > model - 50) {
                $(".attract-investment-nav").find("li").removeClass("active").eq(2).addClass("active");
            }

            if ($(this).scrollTop() > support - 50) {
                $(".attract-investment-nav").find("li").removeClass("active").eq(3).addClass("active");
            }

            if ($(this).scrollTop() > processName - 50) {
                $(".attract-investment-nav").find("li").removeClass("active").eq(4).addClass("active");
            }

            if ($(this).scrollTop() > caseName - 50) {
                $(".attract-investment-nav").find("li").removeClass("active").eq(5).addClass("active");
            }

            if ($(this).scrollTop() > answerQuestions - 50) {
                $(".attract-investment-nav").find("li").removeClass("active").eq(6).addClass("active");
            }

            if ($(this).scrollTop() > join - 50) {
                $(".attract-investment-nav").find("li").removeClass("active").eq(7).addClass("active");
            }

            if ($(this).scrollTop() > contactUs - 50) {
                $(".attract-investment-nav").find("li").removeClass("active").eq(8).addClass("active");
            }
        });
    }

    var navAnimate = function() {
        $(".attract-investment-nav").on("click", "li", function() {
            var id;
            if ($(this).index() == 8) {
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

    var bannerSwiperInit = function() {
        var bannerSwiper = new Swiper('#js_banner', {
            loop: true,
            pagination: '.pagination',
            paginationClickable: true,
            preventLinks: false,
            autoplay: 5000,
        })
    }

    /*------ 执行方法 ------*/
    $(function() {
        navInit();
        navAnimate();
        bannerSwiperInit();
    });
}());