/*
 * @Description:
 * @Autor: hl
 * @Date: 2022-07-11 15:18:31
 * @LastEditors: hl
 * @LastEditTime: 2022-07-12 15:29:15
 */
import router from "@/routers/router";
import NProgress from "@/config/nprogress";

//  路由拦截
router.beforeEach((to, from, next) => {
	// TODO 清除请求 权限判断 token 判断
	NProgress.start();
	console.log(to, from, next);
	return next();
});

router.afterEach(() => {
	// TODO  跳转完成后续
	NProgress.done();
});

export default router;
