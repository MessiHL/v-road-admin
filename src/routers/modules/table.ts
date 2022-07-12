/*
 * @Description:
 * @Autor: hl
 * @Date: 2022-07-12 14:34:52
 * @LastEditors: hl
 * @LastEditTime: 2022-07-12 14:51:47
 */
import { RouteRecordRaw } from "vue-router";
import { Layout } from "@/routers/constant";

const tableRouter: Array<RouteRecordRaw> = [
	{
		path: "/table",
		component: Layout,
		meta: {
			title: "表格"
		},
		children: [
			{
				path: "/table/useComponent",
				name: "useComponent",
				component: () => import("@/views/table/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "使用 Component",
					key: "useComponent"
				}
			}
		]
	}
];
export default tableRouter;
