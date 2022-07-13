/*
 * @Description:
 * @Autor: hl
 * @Date: 2022-07-06 17:18:06
 * @LastEditors: hl
 * @LastEditTime: 2022-07-13 09:56:30
 */
import { reactive, toRefs, onMounted, computed } from "vue";
import { Table } from "./../types/table";
export const useTable = (api: (params: any) => Promise<any>, initParam: object = {}, isPageable: boolean = true) => {
	const state = reactive<Table.TableStateProps>({
		// 表格数据
		tableData: [],
		// 是否展开更多搜索框
		searchShow: false,
		// 分页
		pageable: {
			pageNum: 1,
			pageSize: 20,
			total: 0
		},
		// 查询参数
		searchParam: {},
		// 初始化查询参数
		initSearchParam: {},
		// 总参数
		totalParam: {}
	});

	// 初始化的时候需要做的事情就是 设置表单查询默认值 && 获取表格数据(reset函数的作用刚好是这两个功能)
	onMounted(() => {
		reset();
	});
	const pageParam = computed({
		get: () => {
			return {
				pageNum: state.pageable.pageNum,
				pageSize: state.pageable.pageSize
			};
		},
		set: (newVal: any) => {
			console.log(newVal);
		}
	});

	//  获取表格数据
	const getTableList = async () => {
		try {
			//  先更新查询参数
			updateTotalParam();
			Object.assign(state.totalParam, initParam);
			const { data } = await api(state.totalParam);

			state.tableData = isPageable ? data.datalist : data;
			const { pageNum, pageSize, total } = data;
			isPageable && updatePageable({ pageNum, pageSize, total });
		} catch (error) {
			console.log(error);
		}
	};

	// 更新查询参数
	const updateTotalParam = () => {
		state.totalParam = {};
		// 处理查询参数，可以给查询参数加自定义前缀操作
		let nowSearchParam: { [propName: string]: any } = {};
		// 防止手动清空输入框携带参数（可以自定义查询参数前缀）
		for (let key in state.searchParam) {
			// * 某些情况下参数为 false/0 也应该携带参数
			if (state.searchParam[key] || state.searchParam[key] === false || state.searchParam[key] === 0) {
				nowSearchParam[key] = state.searchParam[key];
			}
		}

		Object.assign(state.totalParam, nowSearchParam, isPageable ? pageParam.value : {});
	};

	// 更新分页信息
	const updatePageable = (resPageable: Table.Pageable) => {
		Object.assign(state.pageable, resPageable);
	};

	// 查询
	const search = () => {
		state.pageable.pageNum = 1;
		getTableList();
	};

	// 表格数据重置
	const reset = () => {};

	//  每页条数改变
	const handleSizeChange = (val: number) => {
		state.pageable.pageSize = val;
		state.pageable.pageNum = 1;
		getTableList();
	};

	// 页面改变
	const handleCurrentChange = (val: number) => {
		state.pageable.pageNum = val;
		getTableList();
	};

	return {
		...toRefs(state),
		getTableList,
		search,
		reset,
		handleSizeChange,
		handleCurrentChange
	};
};
