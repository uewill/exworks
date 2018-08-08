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
        },
        downloadCenter: {
            module: 7,
            name: 'downloadCenter',
            title: '下载中心',
            path: '首页<i>／</i>下载中心',
            css: ['document'],
        },
        contactUS: {
            module: 7,
            name: 'contactUS',
            title: '联系我们',
            path: '首页<i>／</i>联系我们',
            address: '公司地址：成都市高新区天府二街368号绿地之窗写字楼B栋1101-1102号'
        },
        jobChance: {
            module: 7,
            name: 'jobChance',
            title: '就业机会',
            path: '首页<i>／</i>就业机会',
            css: ['document'],
        },
        jobChanceDetail: {
            module: 7,
            name: 'jobChanceDetail',
            title: '就业机会详情',
            path: '首页<i>／</i>就业机会<i>／</i>详情',
            css: ['document'],
        },
        siteMap: {
            module: 8,
            name: 'siteMap',
            title: '网站地图',
            path: '首页<i>／</i>网站地图',
        },
        siteOwner: {
            module: 8,
            name: 'siteOwner',
            title: '网站所有者信息',
            path: '首页<i>／</i>网站所有者信息',
        },
        privacy: {
            module: 8,
            name: 'privacy',
            title: '隐私说明',
            path: '首页<i>／</i>隐私说明',
            css: ['siteOwner'],
        },
        dutyAvowal: {
            module: 8,
            name: 'dutyAvowal',
            title: '责任声明',
            path: '首页<i>／</i>责任声明',
            css: ['siteOwner'],
        },
        solution: {
            module: 2,
            name: 'solution',
            title: "解决方案",
            path: '首页<i>／</i>解决方案',
            css: ['customerCase'],
        },
        solutionDetail: {
            module: 2,
            name: 'solutionDetail',
            title: "解决方案详情",
            path: '首页<i>／</i>解决方案<i>／</i>详情',
            css: ['customerCase'],
        },
        fourAreas: {
            module: 1,
            name: 'fourAreas',
            title: "四大领域",
            js: ['idangerous.swiper.min']
        },
        intelligentCommunity: {
            module: 1,
            name: 'intelligentCommunity',
            title: "智慧小区",
            path: '首页<i>／</i>四大领域<i>／</i>智慧小区',
        },
        smartHome: {
            module: 1,
            name: 'smartHome',
            title: "智能家居",
            path: '首页<i>／</i>四大领域<i>／</i>智能家居',
            css: ['intelligentCommunity'],
        },
        smartPlayer: {
            module: 1,
            name: 'smartPlayer',
            title: "智能影音",
            path: '首页<i>／</i>四大领域<i>／</i>智能影音',
            css: ['intelligentCommunity'],
        }
    }
}