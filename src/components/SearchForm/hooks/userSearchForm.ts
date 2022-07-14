/*
 * @Description:
 * @Autor: hl
 * @Date: 2022-07-14 11:42:00
 * @LastEditors: hl
 * @LastEditTime: 2022-07-14 14:27:49
 */

import { ColumnProps } from "@/components/BasicTable/types/table";
import { EACH_LINE_SEARCH_ITEM_COUNT } from "@/config";

export const useSearchForm = () => {
	const setSearchTool = (columns: Partial<ColumnProps>[]) => {
		const seachTool: Partial<ColumnProps> = {
			searchType: "searchTool"
		};

		console.log(columns.length, EACH_LINE_SEARCH_ITEM_COUNT);

		if (columns.length - 1 < EACH_LINE_SEARCH_ITEM_COUNT) {
			columns.push(seachTool);
		} else {
			columns.splice(EACH_LINE_SEARCH_ITEM_COUNT - 1, 0, seachTool);
		}

		return columns;
	};

	return {
		setSearchTool
	};
};

//  每行查询条件显示的数量
