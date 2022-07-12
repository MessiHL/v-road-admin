/*
 * @Description: useSelection 表格多选操作
 * @Autor: hl
 * @Date: 2022-07-07 14:24:14
 * @LastEditors: hl
 * @LastEditTime: 2022-07-12 15:54:56
 */

import { ref, computed } from "vue";

export const useSelection = () => {
	// 是否选中
	const isSelected = ref<boolean>(false);
	// 一选中的数据集合
	const selectedList = ref([]);

	// 选中数据的所有id集合
	const selectedListIds = computed((kayName: string = "id"): string[] => {
		let ids: string[] = [];
		selectedList.value.forEach(item => {
			ids.push(item[kayName]);
		});

		return ids;
	});

	const getRowKeys = (row: { id: string }) => {
		return row.id;
	};

	const selectionChange = (rows: any) => {
		rows.length === 0 ? (isSelected.value = false) : (isSelected.value = true);
		selectedList.value = rows;
	};

	return {
		isSelected,
		selectedList,
		selectedListIds,
		getRowKeys,
		selectionChange
	};
};
