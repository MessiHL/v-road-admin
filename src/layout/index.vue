<!--
 * @Description: 
 * @Autor: hl
 * @Date: 2022-07-11 17:21:55
 * @LastEditors: hl
 * @LastEditTime: 2022-07-14 15:37:44
-->
<template>
	<el-container>
		<el-aside><Menu></Menu></el-aside>
		<el-container>
			<el-header> <Header></Header> <Tabs></Tabs> </el-header>
			<el-main>
				<section class="main-box">
					<router-view v-slot="{ Component, route }">
						<transition appear name="fade-tarnsform" mode="out-in">
							<keep-alive :include="cacheRouter">
								<component :is="Component" :key="route.path"></component>
							</keep-alive>
						</transition>
					</router-view>
				</section>
			</el-main>
			<!-- <el-footer><Footer></Footer></el-footer> -->
		</el-container>
	</el-container>
</template>
<script setup lang="ts" name="Layout">
import Menu from "./Menu/index.vue";
import Header from "./Header/index.vue";
import Tabs from "./Tabs/index.vue";
// import Footer from "./Footer/index.vue";
import cacheRouter from "@/routers/cacheRouter";
</script>
<style lang="scss">
@import "./index.scss";
</style>
