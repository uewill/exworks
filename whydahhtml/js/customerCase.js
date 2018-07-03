/*
 * ===========================
 *
 * 首页 => customerCase
 * @author   : LiChaoJun
 * @datetime : 2018/07/03
 *
 * ===========================
 */
(function() {
    var clickFunc = function() {
        $(".filter-box ul li").click(function() {
            if (!$(this).hasClass("active")) {
                $(this).addClass("active").siblings().removeClass('active');
            }
        })
    }

    /*------ 执行方法 ------*/
    $(function() {
        clickFunc();
    });
}());