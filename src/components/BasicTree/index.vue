<!--
 * @Description: 
 * @Autor: hl
 * @Date: 2022-07-20 09:13:09
 * @LastEditors: hl
 * @LastEditTime: 2022-07-21 15:32:50
-->
<template>
	<div class="basic-tree">
		<el-input v-if="regiester.filter" class="tree-filter" v-model="filterText"></el-input>
		<el-tree
			ref="refBasicTree"
			:data="treeData"
			:label="regiester.labelField"
			:show-checkbox="!!regiester.showCheckbox"
			:accordion="!!regiester.accordion"
			:render-after-expand="false"
			class="filter-tree"
			:filter-node-method="filterNode"
		/>
	</div>
</template>
<script setup lang="ts" name="BasicTree">
import { ref, watch } from "vue";
import { ElTree } from "element-plus";
import { useTree } from "./hooks/useTree";
interface treeConfig {
	data?: any; // {[]} data 数据源
	requestApi?: (params: any) => Promise<any>; // 请求表格数据的api
	parentIdField?: string; // 存储父节点id的字段名称
	labelField?: string; // 存储子节点显示文本的字段名称
	childrenField?: string; // 存储父子节点集合的字段名称
	showCheckbox?: Boolean; // 是否显示复选框
	filter?: Boolean; // 是否显示查询
	accordion?: Boolean; // 是否每次只打开一个同级树节点展开
}

const props = defineProps<{ regiester: treeConfig }>();
const { treeData, getTreeData } = useTree(props.regiester);
const filterText = ref("");
const refBasicTree = ref<InstanceType<typeof ElTree>>();

watch(filterText, val => {
	refBasicTree.value!.filter(val);
});
const filterNode = (value: string, data: any) => {
	if (value) {
		return data.label.includes(value);
	} else {
		return true;
	}
};

// 暴露给父组件的参数和方法
defineExpose({ refresh: getTreeData });
</script>
<style scoped lang="scss">
@import "./index.scss";
</style>
