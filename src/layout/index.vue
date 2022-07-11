<!--
 * @Description: 
 * @Autor: hl
 * @Date: 2022-07-11 17:21:55
 * @LastEditors: hl
 * @LastEditTime: 2022-07-11 17:55:05
-->
<template>
	<el-container>
		<el-aside><Menu></Menu></el-aside>
		<el-container>
			<el-header> <Header></Header> <Tabs></Tabs> </el-header>
			<el-main>
				<section class="main-box">mainsection</section>
			</el-main>
			<el-footer><Footer></Footer></el-footer>
		</el-container>
	</el-container>
</template>
<script setup lang="ts" name="Layout">
import Menu from "./Menu/index.vue";
import Header from "./Header/index.vue";
import Tabs from "./Tabs/index.vue";
import Footer from "./Footer/index.vue";
</script>
<style lang="scss">
@import "./index.scss";
</style>
