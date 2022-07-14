/*
 * @Description:
 * @Autor: hl
 * @Date: 2022-07-06 17:19:33
 * @LastEditors: hl
 * @LastEditTime: 2022-07-14 16:47:13
 */
export namespace Table {
	export interface Pageable {
		pageNum: number;
		pageSize: number;
		total: number;
	}
	export interface TableStateProps {
		tableData: any[];
		searchShow: boolean;
		pageable: Pageable;
		searchParam: {
			[key: string]: any;
		};
		initSearchParam: {
			[key: string]: any;
		};
		totalParam: {
			[key: string]: any;
		};
		icon?: {
			[key: string]: any;
		};
	}
}

export namespace HandleData {
	export type MessageType = "" | "success" | "warning" | "info" | "error";
}

export interface EnumProps {
	label: string; // 选项框显示的文字
	value: any; // 选项框的值
	disabled?: boolean; // 是否禁用次选项
	tagType?: string; // 当 tag 为 true 时，此选择会指定 tag 显示类型
	children?: EnumProps[]; // 为树形选择时，可以通过 children 属性指定子选项
}

export type SearchType =
	| "text"
	| "select"
	| "multipleSelect"
	| "treeSelect"
	| "multipleTreeSelect"
	| "date"
	| "daterange"
	| "timerange"
	| "datetimerange"
	| "searchTool";

export type TypeProp = "index" | "selection" | "expand";

export type FixedProp = "left" | "right";

export type TableCellAlign = "left" | "center" | "right";

export interface ColumnProps {
	type: TypeProp; // index | selection | expand（特殊类型）
	prop: string; // 单元格数据（非特殊类型必填）
	label: string; //  单元格标题（非特殊类型必填）
	width: number | string; // 列宽
	isShow: boolean; // 是否显示
	fixed: FixedProp; // 固定列
	sortable: boolean;
	tag: boolean; // 是否是标签展示
	image: boolean; // 是否是图片展示
	search: boolean; // 是否为搜索项
	searchType: SearchType; // 搜索项类型
	initSearchParam: string | number | boolean | any[]; // 搜索项初始值
	enum: EnumProps[]; // 枚举类型（渲染值的字典）
	readerHeader: (param: any) => any; // 自定义表头
	align: TableCellAlign; // 显示位置。如果不配置，默认居中
	money: boolean; // 是否是金额展示
}
