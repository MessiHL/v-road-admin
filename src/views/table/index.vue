<!--
 * @Description: 
 * @Autor: hl
 * @Date: 2022-07-12 14:39:38
 * @LastEditors: hl
 * @LastEditTime: 2022-07-14 16:00:33
-->
<template>
	<div class="table-box">
		<BasicTable ref="refBasicTable" :requestApi="getUserList" :initParam="initParam" :columns="columns">
			<template #tableHeader="scope">
				<!-- 表格 header 按钮 -->
				<el-button type="danger" :icon="Delete" plain :disabled="!scope.isSelected" @click="batchDelete(scope.ids)">
					批量删除用户
				</el-button>
			</template>
			<!-- Expand  表格展开-->
			<template #expand="scope">
				{{ scope.row }}
			</template>
			<!-- 行内编辑示例 -->
			<template #status="scope">
				<!-- 如果插槽的值为 el-switch，第一次加载会默认触发 switch 的 @change 方法，所有在外层包一个盒子，点击触发盒子 click 方法 -->
				<div @click="changeStatus(scope.row)">
					<el-switch
						:value="scope.row.status"
						:active-text="scope.row.status === 1 ? '启用' : '禁用'"
						:active-value="1"
						:inactive-value="0"
					/>
				</div>
			</template>
			<!-- 行内按钮 示例 -->
			<template #operation="scope">
				<el-button type="primary" link :icon="View" @click="openDrawer('查看', scope.row)">查看</el-button>
				<el-button type="primary" link :icon="EditPen" @click="openDrawer('编辑', scope.row)">编辑</el-button>
				<el-button type="primary" link :icon="Delete" @click="deleteAccount(scope.row)">删除</el-button>
			</template>
		</BasicTable>
	</div>
</template>
<script setup lang="ts" name="tableUseComponent">
import { ref, reactive } from "vue";
import { View, Delete, EditPen } from "@element-plus/icons-vue";
import { genderType } from "@/utils/serviceDict";
import BasicTable from "@/components/BasicTable/index.vue";

import { getUserList } from "@/api/modules/user";
const refBasicTable = ref();
const initParam = reactive({ type: 1 });

// 配置项
const columns: Partial<any>[] = [
	{
		type: "selection",
		width: 42,
		fixed: "left"
	},
	{
		type: "index",
		label: "序号",
		width: 60
	},
	{
		type: "expand",
		label: "明细",
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
		search: true,
		width: 200
	},
	{
		prop: "idCard",
		label: "身份证号",
		search: true,
		width: 200
	},
	{
		prop: "idCard",
		label: "身份证号",
		search: true,
		width: 200
	},
	{
		prop: "idCard",
		label: "身份证号",
		search: true,
		width: 200
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
		search: true,
		width: 360
	},
	{
		prop: "status",
		label: "用户状态",
		sortable: false,
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

// 批量删除
const batchDelete = (ids: string[]) => {
	console.log(ids);
	refBasicTable.value.refresh();
};

const openDrawer = (title: string, row: any) => {
	console.log(title, row.username);
};

const deleteAccount = (row: any) => {
	console.log(row.username);
};

const changeStatus = (row: any) => {
	row.status = row.status == 1 ? 0 : 1;
};
</script>
<style lang="scss"></style>
