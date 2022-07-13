<!--
 * @Description: 
 * @Autor: hl
 * @Date: 2022-07-12 15:38:17
 * @LastEditors: hl
 * @LastEditTime: 2022-07-13 14:20:47
-->
<template>
	<div class="table-search" v-if="columns.length">
		<el-form ref="formRef" :model="searchParam" :inline="true">
			<el-row :gutter="10">
				<template v-for="item in searchList" :key="item.prop">
					<el-col :span="6">
						<el-form-item :label="`${item.label} :`">
							<SearchFormItem :item="item" :searchParam="searchParam"></SearchFormItem>
						</el-form-item>
					</el-col>
				</template>
			</el-row>
		</el-form>
		<!-- <div class="search-operation">
			<el-button type="primary" @click="search">查询</el-button>
			<el-button @click="reset">重置</el-button>
			<el-button type="primary" link class="search-isOpen" @click="searchShow = !searchShow" v-if="columns.length > maxLength">
				{{ searchShow ? "合并" : "展开" }}
				<el-icon class="el-icon--right">
					<component :is="searchShow ? ArrowUp : ArrowDown"></component>
				</el-icon>
			</el-button>
		</div> -->
	</div>
</template>

<script setup lang="ts" name="searchForm">
import { ref, computed, onMounted } from "vue";
import { ColumnProps } from "@/components/BasicTable/interface";
import SearchFormItem from "./components/SearchFormItem.vue";
// import { ArrowDown, ArrowUp } from "@element-plus/icons-vue";

interface BasicTableProps {
	columns: Partial<ColumnProps>[]; // 搜索配置列
	searchParam: any; // 搜索参数
	search: (params: any) => void; // 搜索方法
	reset: (params: any) => void; // 重置方法
}

// 默认值
const props = withDefaults(defineProps<BasicTableProps>(), {
	columns: () => [],
	searchParam: {}
});

const maxLength = ref<number>(4);
// const maxWidth = ref<number>(1260);
onMounted(() => {
	console.log("document.body.clientWidth~~:", document.body.clientWidth);
	// * 暂时只判断这两种情况（第四个搜索项为时间/日期范围 || 前三项存在时间/日期范围选择框）
	// * 后期通过 css 解决文本框自适应宽度变化，已经实现了像 antd 中 pro-table 一样的样式，但自我感觉不太好看，所以没采用😆
	// if (props.columns.length >= 4) {
	// 	props.columns[3].searchType === "datetimerange" || props.columns[3].searchType === "daterange"
	// 		? ((maxWidth.value = 945), (maxLength.value = 3))
	// 		: null;
	// 	props.columns.slice(0, 3).forEach(item => {
	// 		item.searchType === "datetimerange" || item.searchType === "daterange"
	// 			? ((maxWidth.value = 1135), (maxLength.value = 4))
	// 			: null;
	// 	});
	// }
});

// 是否展开搜索项
const searchShow = ref(true);

// 根据是否展开配置搜索项长度
const searchList = computed((): Partial<ColumnProps>[] => {
	if (searchShow.value) return props.columns;
	return props.columns.slice(0, maxLength.value);
});
</script>
