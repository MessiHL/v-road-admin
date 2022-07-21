import { reactive, toRefs } from "vue";
import { TreeProps, TreeStateProps } from "./../types/index";
export const useTree = (config: TreeProps = {}) => {
	const state = reactive<TreeStateProps>({
		treeData: []
	});

	const getTreeData = async () => {
		let src: any = [];
		if (config.data && config.data.length > 0) {
			src = config.data;
		} else {
			if (config.requestApi) {
				const { data } = await config?.requestApi({});
				src = data;
			}
		}

		state.treeData = rebuildToTreeData(src, config.parentIdField, config.labelField, config.childrenField);
	};

	const rebuildToTreeData = (
		src: any[],
		parentIdField: string = "pid",
		labelField: string = "text",
		childrenField: string = "children"
	) => {
		if (src.length === 0) return src;
		let dist: any[] = [];
		let srcMap: any = new Map();
		src.forEach(item => (srcMap[item.id] = item));
		src.forEach(item => {
			let pNode = srcMap[item[parentIdField]];
			item.label = item[labelField];
			// 遍历原数据src，依据数据项的父id在map中查找，如果在map中能查到数据，则说明当前数据项属于子节点，否则为父节点
			if (pNode) {
				// 子节点
				if (!pNode[childrenField]) pNode[childrenField] = [];
				pNode[childrenField].push(item);
			} else {
				// 父节点
				dist.push(item);
			}
		});
		return dist;
	};
	return {
		...toRefs(state),
		getTreeData,
		rebuildToTreeData
	};
};
