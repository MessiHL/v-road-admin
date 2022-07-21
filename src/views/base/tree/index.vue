<!--
 * @Description: 
 * @Autor: hl
 * @Date: 2022-07-15 09:30:39
 * @LastEditors: hl
 * @LastEditTime: 2022-07-21 16:00:59
-->
<template>
	<el-row :gutter="20">
		<el-col :span="6">
			<BasicTree ref="refBasicTree1" :regiester="regiester1"></BasicTree>
		</el-col>
		<el-col :span="6">
			<BasicTree ref="refBasicTree2" :regiester="regiester2"></BasicTree>
		</el-col>
		<el-col :span="6">
			<BasicTreeSelect ref="refBasicTree3" :regiester="regiester3"></BasicTreeSelect>
		</el-col>
	</el-row>
</template>
<script setup lang="ts" name="TreeDemo">
import { ref, onMounted } from "vue";
import BasicTree from "@/components/BasicTree/index.vue";
import BasicTreeSelect from "@/components/BasicTree/BasicTreeSelect.vue";

import { treeData1, traaData2, treeSelectData } from "@/mock/treeData";
const refBasicTree1 = ref();
const refBasicTree2 = ref();
const refBasicTree3 = ref();
const regiester1 = {
	data: treeData1.data[0].children,
	labelField: "text",
	accordion: false,
	filter: true
};

const regiester2 = {
	data: traaData2.data,
	parentIdField: "parent_id",
	labelField: "name",
	showCheckbox: true
};

const regiester3 = {
	data: treeSelectData.data,
	parentIdField: "parent_id",
	labelField: "code_name",
	showCheckbox: true
};

onMounted(() => {
	//  数据初始化
	// refBasicTree1.value.refresh();
	// refBasicTree2.value.refresh();
	refBasicTree3.value.refresh();
});
</script>
<style lang="scss" scoped>
.el-col {
	height: 100%;
	overflow: auto;
}
</style>
