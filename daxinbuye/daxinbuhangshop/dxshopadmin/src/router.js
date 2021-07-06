import { turn } from "core-js/fn/array";
import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            redirect: "login"
        },
        {
            path: "/login",
            name: "login",
            component: () =>
                import("./views/Login.vue")
        },
        {
            path: "/index",
            name: "index",
            component: () => import("./views/index/Index.vue"),
            children: [
                // 商品管理
                {
                    path: "/cates/index",
                    name: "CateIndex",
                    component: () => import("./views/cates/CateIndex.vue"),
                    children: [
                        {
                            path: "/cates/catelist",
                            name: "CateList",
                            component: () =>
                                import("./views/cates/CateList.vue")
                        },
                        {
                            path: "/cates/sortlist",
                            name: "SortList",
                            component: () =>
                                import("./views/cates/SortList.vue")
                        },
                        {
                            path: "/cates/detail",
                            name: "CateDetail",
                            component: () =>
                                import("./views/cates/CateDetail.vue")
                        },
                    ],
                },
                //营销管理
                {
                    path: "/markes/index",
                    name: "MarkeIndex",
                    component: () => import("./views/markes/MarkeIndex.vue"),
                    children: [
                        {
                            path: "/markes/list",
                            name: "MarkeList",
                            component: () => import("./views/markes/MarkeList.vue")
                        },
                        {
                            path: "/markes/boundcate",
                            name: "BoundCate",
                            component: () => import("./views/markes/BoundCate.vue")
                        },
                    ]
                },
                //企业管理
                {
                    path: "/company/index",
                    name: "CompanyIndex",
                    component: () => import("./views/company/CompanyIndex.vue"),
                    children: [
                        {
                            path: "/company/content",
                            name: "Company",
                            component: () => import("./views/company/Content.vue")
                        },
                    ]
                },
                //系统管理
                {
                    path: "/system/index",
                    name: "SystemIndex",
                    component: () => import("./views/system/SystemIndex.vue"),
                    children: [
                        {
                            path: "/system/users",
                            name: "Users",
                            component: () => import("./views/system/Users.vue")
                        },
                        {
                            path: "/system/workers",
                            name: "Workers",
                            component: () => import("./views/system/Workers.vue")
                        },
                    ]
                }
            ]
        }
    ]
});

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    if (to.path === '/login') return next()
    //获取token
    const tokenStr = window.localStorage.getItem('token')
    if (!tokenStr) return next('/login')
    next()
})

export default router;



