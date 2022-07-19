/*
 * @Description:
 * @Autor: hl
 * @Date: 2022-07-12 14:12:04
 * @LastEditors: hl
 * @LastEditTime: 2022-07-18 10:59:47
 */
import { RouteRecordRaw } from "vue-router";
import { Layout } from "@/routers/constant";

// menu模块(多级路由全部设置为二级路由，为了缓存页面，缺点：面包屑导航栏只能获取到最后一级)
const menuRouter: Array<RouteRecordRaw> = [
	{
		path: "/base",
		component: Layout,
		redirect: "/base/api/index",
		meta: {
			title: "http"
		},
		children: [
			{
				path: "/base/api/index",
				name: "ApiTest",
				component: () => import("@/views/base/api/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "test",
					key: "ApiTest"
				}
			}
		]
	}
];

export default menuRouter;
