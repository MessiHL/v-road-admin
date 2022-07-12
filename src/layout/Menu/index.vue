<!--
 * @Description: 菜单
 * @Autor: hl
 * @Date: 2022-07-11 17:52:29
 * @LastEditors: hl
 * @LastEditTime: 2022-07-12 14:42:38
-->
<template>
	<div
		class="menu"
		:style="{ width: isCollapse ? '65px' : '220px' }"
		v-loading="loading"
		element-loading-text="Loading..."
		:element-loading-spinner="loadingSvg"
		element-loading-svg-view-box="-10, -10, 50, 50"
		element-loading-background="rgba(122, 122, 122, 0.01)"
	>
		<Logo :is-collapse="isCollapse"></Logo>
		<el-scrollbar>
			<el-menu
				:default-active="activeMenu"
				:router="true"
				:collapse="isCollapse"
				:collapse-transition="false"
				:unique-opend="true"
				background-color="#191a20"
				text-color="#bdbdc0"
				active-text-color="#fff"
			>
				<SubItem :menuList="menuList"></SubItem>
			</el-menu>
		</el-scrollbar>
	</div>
</template>
<script setup lang="ts" name="LayoutMenu">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { MenuStore } from "@/store/modules/menu";
import { AuthStore } from "@/store/modules/auth";
import { loadingSvg } from "@/utils/svg";
import { handleRouter } from "@/utils/util";
import Logo from "./components/Logo.vue";
import SubItem from "./components/SubItem.vue";

const route = useRoute();
const menuStore = MenuStore();
const authStore = AuthStore();
const loading = ref(false);

onMounted(() => {
	loading.value = true;
	try {
		// TODO 获取菜单
		const data = getTestData();
		const dynamicRouter = handleRouter(data);
		authStore.setAuthRouter(dynamicRouter);
		menuStore.setMenuList(data);
	} finally {
		loading.value = false;
	}
});

// 测试数据
const getTestData = () => {
	return [
		{
			icon: "home-filled",
			title: "首页",
			path: "/home/index"
		},
		{
			icon: "list",
			title: "表格",
			path: "/table",
			children: [
				{
					path: "/table/useComponent",
					title: "useComponent",
					icon: "table"
				}
			]
		},
		{
			icon: "list",
			title: "菜单嵌套",
			path: "/menu",
			children: [
				{
					path: "/menu/menu1",
					title: "菜单1",
					icon: "menu"
				},
				{
					path: "/menu/menu2",
					title: "菜单2",
					icon: "menu",
					children: [
						{
							path: "/menu/menu2/menu21",
							title: "菜单2-1",
							icon: "menu"
						},
						{
							path: "/menu/menu2/menu22",
							title: "菜单2-2",
							icon: "menu",
							children: [
								{
									path: "/menu/menu2/menu22/menu221",
									title: "菜单2-2-1",
									icon: "menu"
								},
								{
									path: "/menu/menu2/menu22/menu222",
									title: "菜单2-2-2",
									icon: "menu"
								}
							]
						},
						{
							path: "/menu/menu2/menu23",
							title: "菜单2-3",
							icon: "menu"
						}
					]
				},
				{
					path: "/menu/menu3",
					title: "菜单3",
					icon: "menu"
				}
			]
		},
		{
			icon: "warning-filled",
			title: "错误页面",
			path: "/error",
			children: [
				{
					path: "/404",
					title: "404页面",
					icon: "menu"
				},
				{
					path: "/403",
					title: "403页面",
					icon: "menu"
				},
				{
					path: "/500",
					title: "500页面",
					icon: "menu"
				}
			]
		}
	];
};

const activeMenu = computed((): string => route.path);
const isCollapse = computed((): boolean => menuStore.isCollapse);
const menuList = computed((): Menu.MenuOptions[] => menuStore.menuList);

// 宽度自适应
const screenWidth = ref<number>(0);
const listeningWidow = () => {
	window.onresize = () => {
		return () => {
			screenWidth.value = document.body.clientWidth;
			if (isCollapse.value === false && screenWidth.value < 1200) menuStore.setCollapse();
			if (isCollapse.value === true && screenWidth.value > 1200) menuStore.setCollapse();
		};
	};
};
listeningWidow();
</script>
<style scoped lang="scss">
@import "./index.scss";
</style>
