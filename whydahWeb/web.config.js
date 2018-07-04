/**
 * [WEB_CONFIG 项目配置]
 * @Object 项目基本配置
 * PATH：环境变量
 */
exports.WEB_CONFIG = {
    /* 环境变量 */
    PATH: {
        src: "./src",
        live: "./live",
        dist: "./dist"
    },
    EJS: {
        index: {
            module: 0,
            name: 'index',
            title: "织布鸟",
            js: ['idangerous.swiper.min']
        },
        customerCase: {
            module: 3,
            name: 'customerCase',
            title: "织布鸟-客户案例",
        },
        customerCaseDetail: {
            module: 3,
            name: 'customerCaseDetail',
            title: "织布鸟-客户案例详情",
            css: ['customerCase']
        }
    }
}