/*
 * @Description:
 * @Autor: hl
 * @Date: 2022-07-20 09:16:28
 * @LastEditors: hl
 * @LastEditTime: 2022-07-20 09:19:49
 */

/**
 * @description 树形数据格式
 * */
export interface Tree {
	id: string;
	label: string;
	children?: Tree[];
}
