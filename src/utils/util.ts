/*
 * @Description:
 * @Autor: hl
 * @Date: 2022-07-12 09:37:42
 * @LastEditors: hl
 * @LastEditTime: 2022-07-12 09:39:45
 */

/**
 * @description 使用递归处理路由菜单，生成一维数组
 * @param {Array} menuList 所有菜单列表
 * @param {Array} newArr 菜单的一维数组
 * @return array
 */
export function handleRouter(routerList: Menu.MenuOptions[], newArr: string[] = []) {
	routerList.forEach((item: Menu.MenuOptions) => {
		typeof item === "object" && item.path && newArr.push(item.path);
		item.children && item.children.length > 0 && handleRouter(item.children, newArr);
	});

	return newArr;
}
