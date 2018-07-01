/*
 * ===========================
 *
 * 首页 => index
 * @author   : LiChaoJun
 * @datetime : 2018/07/01
 *
 * ===========================
 */
(function() {
    var bannerSwiperInit = function() {
        var bannerSwiper = new Swiper('#js_banner', {
            loop: true,
            pagination: '.pagination',
            paginationClickable: true,
            preventLinks: false
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

    var solutionSwiperInit = function() {
        var solutionSwiper = new Swiper('#js_solution', {
            loop: true,
            pagination: '.solution-pagination',
            paginationClickable: true,
            preventLinks: false
        })
    }

    /*------ 执行方法 ------*/
    $(function() {
        bannerSwiperInit();
        solutionSwiperInit();
    });
}());