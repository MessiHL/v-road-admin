/*
 * @Description:
 * @Autor: hl
 * @Date: 2022-07-12 09:37:42
 * @LastEditors: hl
 * @LastEditTime: 2022-07-18 09:14:19
 */
import { isArray, isNumber } from "@/utils/is";
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
/**
 * @description 格式化表格单元格默认值
 * @param {String} cellValue 当前单元格值
 * @return string
 * */
export function defaultFormat(cellValue: any) {
	// 如果当前值为数组,使用 / 拼接（根据需求自定义）
	if (isArray(cellValue)) return cellValue.length ? cellValue.join(" / ") : "";
	return cellValue ?? "";
}

/**
 * @description 根据枚举列表查询当需要的数据
 * @param {String} cellValue 当前单元格值
 * @param {Array} enumData 枚举列表
 * @param {String} type 过滤类型（目前只有 tag）
 * @return string
 * */
export function filterEnum(cellValue: any, enumData: any[] = [], type?: string): string {
	let filterData = enumData.find(item => item.value === cellValue);
	if (type == "tag") return filterData?.tagType ? filterData.tagType : "";
	return filterData ? filterData.label : "";
}
/**
 * @description 根据枚举列表查询当需要的数据颜色
 * @param {String} cellValue 当前单元格值
 * @param {Array} enumData 枚举列表
 * @return string
 * */
export function filterEnumColor(cellValue: any, enumData: any[] = []): string {
	let fitlerData = enumData.find(item => item.value === cellValue);
	return fitlerData ? fitlerData.color : "";
}

/**
 * @description 金额格式化 （12345.6 => （12,345.6）
 * @param {any} cellValue 当前单元格值
 * @return string
 * */
export function formatMoney(cellValue: any) {
	if (isNumber(cellValue)) {
		// see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
		return (cellValue as Number).toLocaleString("zh", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
	} else {
		return cellValue;
	}
}
