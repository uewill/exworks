/*
 * ===========================
 *
 * 解决方案详情 => solutionDetail
 * @author   : LiChaoJun
 * @datetime : 2018/07/10
 *
 * ===========================
 */
(function() {
    var clickFunc = function() {
        $(".right-introduce-box button").click(function() {
            if ($(".popup-wrap").css("display") == 'none') {
                $(".popup-wrap").fadeIn();
            }
        })

        $(".popup-header i").click(function() {
            if ($(".popup-wrap").css("display") == 'block') {
                $(".popup-wrap").fadeOut();
            }
        })
    }

    /*------ 执行方法 ------*/
    $(function() {
        clickFunc();
    });
}());