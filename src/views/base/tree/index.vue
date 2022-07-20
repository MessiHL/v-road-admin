<!--
 * @Description: 
 * @Autor: hl
 * @Date: 2022-07-15 09:30:39
 * @LastEditors: hl
 * @LastEditTime: 2022-07-20 18:04:43
-->
<template>
	<el-row :gutter="20">
		<el-col :span="6">
			<e-card class="basic-card">
				<BasicTree :regiester="regiester1"></BasicTree>
			</e-card>
		</el-col>
		<el-col :span="6">
			<e-card class="basic-card">
				<BasicTree :regiester="regiester2" parentIdField="parent_id" labelField="name"></BasicTree>
			</e-card>
		</el-col>
	</el-row>
</template>
<script setup lang="ts" name="TreeDemo">
import BasicTree from "@/components/BasicTree/index.vue";

import { treeData1, traaData2 } from "@/mock/treeData";

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
</script>
<style lang="scss" scoped>
.el-col {
	height: 100%;
	overflow: auto;
	.basic-card {
		height: 100%;
	}
}
</style>
