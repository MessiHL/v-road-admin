<!--
 * @Description: 
 * @Autor: hl
 * @Date: 2022-07-21 11:01:25
 * @LastEditors: hl
 * @LastEditTime: 2022-07-21 15:55:04
-->
<template>
	<el-tree-select :data="treeData" multiple :render-after-expand="false" show-checkbox check-strictly check-on-click-node />
</template>
<script setup lang="ts" name="BasicTreeSelect">
import { useTree } from "./hooks/useTree";

interface SelectTreeProps {
	data?: any; // {[]} data 数据源
	requestApi?: (params: any) => Promise<any>; // 请求表格数据的api
	parentIdField?: string; // 存储父节点id的字段名称
	labelField?: string; // 存储子节点显示文本的字段名称
	childrenField?: string; // 存储父子节点集合的字段名称
	showCheckbox?: Boolean; // 是否显示复选框
	filter?: Boolean; // 是否显示查询
	accordion?: Boolean; // 是否每次只打开一个同级树节点展开
}
const props = defineProps<{ regiester: SelectTreeProps }>();
const { treeData, getTreeData } = useTree(props.regiester);

// 暴露给父组件的参数和方法
defineExpose({ refresh: getTreeData });
</script>
<style scoped lang="scss"></style>
