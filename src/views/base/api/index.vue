<!--
 * @Description: 
 * @Autor: hl
 * @Date: 2022-07-18 10:52:16
 * @LastEditors: hl
 * @LastEditTime: 2022-07-19 15:49:11
-->
<template>
	<el-row :gutter="10">
		<el-col :span="2"><el-button @click="testGet">testGet</el-button></el-col>
		<el-col :span="2"><el-button @click="testYKT">getTestYKT</el-button></el-col>
	</el-row>
</template>
<script setup lang="ts" name="ApiTest">
import { getTest, getTestYKT } from "@/api/modules/apiTest";

const testGet = async () => {
	const d = await getTest({ id: "10201" });
	console.log(d);
};

const testYKT = async () => {
	const d = await getTestYKT({});
	console.log(`testYKT: ${d}`);
};
</script>
<style lang="scss"></style>
