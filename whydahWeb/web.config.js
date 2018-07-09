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
        },
        document: {
            module: 4,
            name: 'document',
            title: '技术支持',
            path: '首页<i>／</i>服务支持<i>／</i>技术支持',
        },
        train: {
            module: 4,
            name: 'train',
            title: '织布鸟培训',
            path: '首页<i>／</i>服务支持<i>／</i>织布鸟培训',
        },
        question: {
            module: 4,
            name: 'question',
            title: '技术支持',
            path: '首页<i>／</i>服务支持<i>／</i>技术支持',
            css: ['document'],
        },
        questionDetail: {
            module: 4,
            name: 'questionDetail',
            title: '技术支持',
            path: '首页<i>／</i>服务支持<i>／</i>技术支持<i>／</i>F&Q详情',
        },
        attractInvestment: {
            module: 5,
            name: 'attractInvestment',
            title: '招商合作',
            path: '首页<i>／</i>招商合作',
            js: ['idangerous.swiper.min']
        },
        mediaCenter: {
            module: 6,
            name: 'mediaCenter',
            title: '媒体中心',
            path: '首页<i>／</i>媒体中心',
            css: ['document'],
        },
        mediaCenterDetail: {
            module: 6,
            name: 'mediaCenterDetail',
            title: '媒体中心详情',
            path: '首页<i>／</i>媒体中心<i>／</i>详情',
        },
        aboutUS: {
            module: 7,
            name: 'aboutUS',
            title: '关于织布鸟',
            path: '首页<i>／</i>公司介绍',
        }
    }
}