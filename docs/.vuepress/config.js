module.exports = {
    locales:{
        '/': {
            lang: 'zh-CN',
            title: 'HTuoZhouReviewGuide',
            description: 'HTuoZhouReviewGuide'
        },
    },
    base: '/HTuoZhouReviewGuide/',
    head: [
        ["link", {rel: "icon", href: "/assets/img/logo.png"}]
    ],
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // 不要忘了安装 moment
                    const moment = require('moment')
                    moment.locale(lang)
                    return moment(new Date(timestamp)).utcOffset(8).format('YYYY-MM-DD HH:mm:ss')
                }
            }
        ],
        ['@vuepress/back-to-top'],
        ['@vuepress/nprogress'],
        ['@vuepress/active-header-links']
    ],
    themeConfig: {
        repo: 'HTuoZhou/HTuoZhouReviewGuide/',
        repoLabel: '查看源码',
        logo: '/assets/img/logo.png',
        sidebarDepth: 2,
        smoothScroll: true,
        nav: [
            { text: '首页', link: '/' },
            {
                text: '数据结构与算法',
                ariaLabel: '数据结构与算法',
                items: [
                    { text: '数据结构', link: '/dataStruct-algorithm/dataStruct/' },
                    { text: '算法', link: '/dataStruct-algorithm/algorithm/' }
                ]},
            { text: '设计模式', link: '/design-pattern/' },
            { text: '呱哇', link: '/java/' },
            { text: '呱哇虚拟机', link: '/jvm/' },
            {
                text: '微服务',
                ariaLabel: '微服务',
                items: [
                    { text: 'SpringBoot', link: '/micro-service/spring-boot/' },
                    { text: 'SpringCloud', link: '/micro-service/spring-cloud/' },
                    { text: 'SpringCloudAlibaba', link: '/micro-service/spring-cloud-alibaba/' }
                ]
            },
            { text: '虚拟化', link: '/virtualize/' },
            { text: '系统设计', link: '/system-design/' },
            { text: '开源推荐', link: '/open-recommend/' }
        ],
        sidebar: {
            '/dataStruct-algorithm/dataStruct/': [''],
            '/dataStruct-algorithm/algorithm/': [''],
            '/design-pattern/': [''],
            '/java/': [''],
            '/jvm/': [''],
            '/micro-service/spring-boot/': [''],
            '/micro-service/spring-cloud/': [''],
            '/micro-service/spring-cloud-alibaba/': [''],
            '/virtualize/': [''],
            '/system-design/': [''],
            '/open-recommend/': ['']
        },
        lastUpdated: '上一次更新时间',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！'
    }
}