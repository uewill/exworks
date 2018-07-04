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
            title: "客户案例",
            path: '首页<i>／</i>客户案例',
        },
        customerCaseDetail: {
            module: 3,
            name: 'customerCaseDetail',
            title: "客户案例详情",
            css: ['customerCase'],
            path: '首页<i>／</i>客户案例<i>／</i>详情',
        },
        serviceSuppot: {
            module: 4,
            name: 'serviceSuppot',
            title: "服务支持"
        },
        technicalClassify: {
            module: 4,
            name: 'technicalClassify',
            title: '技术支持',
            path: '首页<i>／</i>服务支持<i>／</i>技术支持',
        },
        afterSale: {
            module: 4,
            name: 'afterSale',
            title: '售后服务',
            path: '首页<i>／</i>服务支持<i>／</i>售后服务',
        }
    }
}