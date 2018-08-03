/*
 * ===========================
 *
 * 四大领域 => fourAreas
 * @author   : LiChaoJun
 * @datetime : 2018/08/03
 *
 * ===========================
 */
(function() {
    var clickFunc = function() {
        $(".config-list ul li").click(function() {
            if (!$(this).hasClass("active")) {
                $(this).addClass("active").siblings().removeClass("active");
                $(this).parent().parent().find("ol li").eq($(this).index()).addClass("active").siblings().removeClass("active");
            }
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

        $('.arrow-left').on('click', function(e) {
            e.preventDefault()
            bannerSwiper.swipePrev()
        })
        $('.arrow-right').on('click', function(e) {
            e.preventDefault()
            bannerSwiper.swipeNext()
        })
    }

    /*------ 执行方法 ------*/
    $(function() {
        clickFunc();
        bannerSwiperInit();
    });
}());