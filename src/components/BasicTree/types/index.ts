/*
 * @Description:
 * @Autor: hl
 * @Date: 2022-07-20 09:16:28
 * @LastEditors: hl
 * @LastEditTime: 2022-07-21 14:53:55
 */

/**
 * @description 树形数据格式
 * */
export interface Tree {
	id: string;
	label: string;
	children?: Tree[];
}

export interface TreeProps {
	data?: any[]; // {[]} data 数据源
	requestApi?: (params: any) => Promise<any>; // 请求表格数据的api
	parentIdField?: string; // 存储父节点id的字段名称
	labelField?: string; // 存储子节点显示文本的字段名称
	childrenField?: string; // 存储父子节点集合的字段名称
	showCheckbox?: Boolean; // 是否显示复选框
	filter?: Boolean; // 是否显示查询
	accordion?: Boolean; // 是否每次只打开一个同级树节点展开
}
export interface TreeStateProps {
	treeData: any[];
}
