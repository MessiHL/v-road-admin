<!--
 * @Description: 
 * @Autor: hl
 * @Date: 2022-07-12 14:39:38
 * @LastEditors: hl
 * @LastEditTime: 2022-07-13 14:10:30
-->
<template>
	<div class="table-box">
		<BasicTable ref="refBasicTable" :requestApi="getUserList" :initParam="initParam" :columns="columns"></BasicTable>
	</div>
</template>
<script setup lang="ts" name="tableUseComponent">
import { ref, reactive } from "vue";
import { genderType } from "@/utils/serviceDict";
import BasicTable from "@/components/BasicTable/index.vue";

import { getUserList } from "@/api/modules/user";
const refBasicTable = ref();
const initParam = reactive({ type: 1 });

// 配置项
const columns: Partial<any>[] = [
	{
		type: "selection",
		width: 80,
		fixed: "left"
	},
	{
		type: "index",
		label: "序号",
		width: 80
	},
	{
		prop: "username",
		label: "用户姓名",
		search: true,
		width: 135
	},
	{
		prop: "gender",
		label: "性别",
		width: "140",
		enum: genderType,
		search: true,
		sortable: true,
		searchType: "select"
	},
	{
		prop: "idCard",
		label: "身份证号",
		search: true
	},
	{
		prop: "createTime",
		label: "创建时间",
		width: 200,
		sortable: true,
		search: false,
		searchType: "datetimerange",
		initSearchParam: ["2022-04-05 00:00:00", "2022-05-10 23:59:59"]
	},
	{
		prop: "email",
		label: "邮箱",
		search: true
	},
	{
		prop: "address",
		label: "居住地址",
		search: true
	},
	{
		prop: "address",
		label: "居住地址",
		search: true
	},
	{
		prop: "address",
		label: "居住地址",
		search: true
	},
	{
		prop: "address",
		label: "居住地址",
		search: true
	},
	{
		prop: "address",
		label: "居住地址",
		search: true
	},
	{
		prop: "address",
		label: "居住居住地址地址",
		search: true
	},
	{
		prop: "status",
		label: "用户状态",
		sortable: true,
		width: 160
	},
	// {
	// 	prop: "avatar",
	// 	label: "头像",
	// 	width: 120,
	// 	image: true
	// },
	{
		prop: "operation",
		label: "操作",
		width: 330,
		fixed: "right"
	}
];
</script>
<style lang="scss"></style>
