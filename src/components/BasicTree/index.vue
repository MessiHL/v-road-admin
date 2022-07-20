<!--
 * @Description: 
 * @Autor: hl
 * @Date: 2022-07-20 09:13:09
 * @LastEditors: hl
 * @LastEditTime: 2022-07-20 14:51:24
-->
<template>
	<div class="basic-tree">
		<el-input class="tree-filter" v-model="filterText"></el-input>
		<el-tree
			ref="refBasicTree"
			:data="treeData"
			show-checkbox
			accordion
			:render-after-expand="false"
			class="filter-tree"
			:filter-node-method="filterNode"
		/>
	</div>
</template>
<script setup lang="ts" name="BasicTree">
import { ref, reactive, watch } from "vue";
import { ElTree } from "element-plus";
import { rebuildAgencyTreeData } from "@/utils/util";
import { treeData1 } from "@/mock/treeData";

let treeData: any = reactive([]);
const filterText = ref("");
const refBasicTree = ref<InstanceType<typeof ElTree>>();

watch(filterText, val => {
	refBasicTree.value!.filter(val);
});

const getData = () => {
	treeData = rebuildAgencyTreeData(treeData1.data[0].children);
};

const filterNode = (value: string, data: any) => {
	if (value) {
		return data.label.includes(value);
	} else {
		return true;
	}
};

getData();
</script>
<style scoped lang="scss">
@import "./index.scss";
</style>
