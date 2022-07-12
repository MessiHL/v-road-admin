import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
/*
 * @Description:
 * @Autor: hl
 * @Date: 2022-07-11 15:19:51
 * @LastEditors: hl
 * @LastEditTime: 2022-07-12 09:52:33
 */
// * 导入所有router
const metaRouters = import.meta.globEager("./modules/*.ts");

// * 处理路由表
export const routerArray: RouteRecordRaw[] = [];
Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item]).forEach((key: any) => {
		routerArray.push(...metaRouters[item][key]);
	});
});

const routes: RouteRecordRaw[] = [
	{ path: "/", redirect: { name: "login" } },
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/login/index.vue"),
		meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login"
		}
	},
	...routerArray
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	strict: false,
	// 切换页面，滚动到最顶部
	scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router;
