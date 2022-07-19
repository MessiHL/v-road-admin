/*
 * @Description:
 * @Autor: hl
 * @Date: 2022-07-11 15:18:31
 * @LastEditors: hl
 * @LastEditTime: 2022-07-18 14:40:49
 */
import router from "@/routers/router";
import { HOME_URL } from "@/config";
import { AuthStore } from "@/store/modules/auth";
// import { GlobalStore } from "@/store";
import NProgress from "@/config/nprogress";

//  路由拦截
router.beforeEach((to, from, next) => {
	// TODO 清除请求 权限判断 token 判断
	NProgress.start();
	const authStore = AuthStore();
	// * Dynamic Router(动态路由，根据后端返回的菜单数据生成的一维数组)
	const dynamicRouter = authStore.dynamicRouter;
	// * Static Router(静态路由，必须配置首页地址，否则不能进首页获取菜单、按钮权限等数据)，获取数据的时候会loading，所有配置首页地址也没问题
	const staticRouter = [HOME_URL, "/403"];
	const routerList = dynamicRouter.concat(staticRouter);

	// * 判断是否有Token
	// const globalStore = GlobalStore();
	// if (!globalStore.token) {
	// 	next({
	// 		path: "/login"
	// 	});
	// 	NProgress.done();
	// 	return;
	// }

	// * 如果访问的地址没有在路由表中重定向到403页面
	if (routerList.indexOf(to.path) !== -1) return next();
	next({
		path: "/home/index" // 此处暂时定位至此
	});
});

router.afterEach(() => {
	// TODO  跳转完成后续
	NProgress.done();
});

export default router;
