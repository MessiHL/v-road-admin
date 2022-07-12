<!--
 * @Description: 
 * @Autor: hl
 * @Date: 2022-07-11 17:51:56
 * @LastEditors: hl
 * @LastEditTime: 2022-07-12 10:20:50
-->
<template>
	<div class="header">
		<div class="header-lf flx-center">
			<CollapseIcon />
			<Breadcrumb />
		</div>
		<div class="header-ri flx-ceter">
			<Fullscreen></Fullscreen>
		</div>
	</div>
</template>
<script setup lang="ts" name="LayoutHeader">
import CollapseIcon from "./components/CollapseIcon.vue";
import Breadcrumb from "./components/Breadcrumb.vue";
import Fullscreen from "./components/Fullscreen.vue";
</script>
<style lang="scss">
@import "./index.scss";
</style>
