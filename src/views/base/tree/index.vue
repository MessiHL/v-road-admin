<!--
 * @Description: 
 * @Autor: hl
 * @Date: 2022-07-15 09:30:39
 * @LastEditors: hl
 * @LastEditTime: 2022-07-20 14:24:13
-->
<template>
	<el-row :gutter="10">
		<el-col :span="6">
			<e-card class="basic-card">
				<BasicTree></BasicTree>
			</e-card>
		</el-col>
		<el-col :span="6"> el-col </el-col>
	</el-row>
</template>
<script setup lang="ts" name="TreeDemo">
import BasicTree from "@/components/BasicTree/index.vue";
</script>
<style lang="scss" scoped>
.el-row {
	height: 100%;
	overflow: auto;
	.basic-card {
		height: 100%;
	}
}
</style>
