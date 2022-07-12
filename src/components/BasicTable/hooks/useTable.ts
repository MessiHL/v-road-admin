/*
 * @Description:
 * @Autor: hl
 * @Date: 2022-07-06 17:18:06
 * @LastEditors: hl
 * @LastEditTime: 2022-07-12 16:13:18
 */
import { reactive, toRefs, onMounted, computed } from "vue";
import { Table } from "./../types/table";
export const useTable = (api: (params: any) => Promise<any>, initParam: object = {}, isPageable: boolean = true) => {
	const state = reactive<Table.TableStateProps>({
		// 表格数据
		tableData: [],
		// 是否展开更多搜索框
		searchShow: false,
		// 分页
		pageable: {
			pageNum: 1,
			pageSize: 50,
			total: 0
		},
		// 查询参数
		searchParam: {},
		// 初始化查询参数
		initSearchParam: {},
		// 总参数
		totalParam: {}
	});

	// 初始化的时候需要做的事情就是 设置表单查询默认值 && 获取表格数据(reset函数的作用刚好是这两个功能)
	onMounted(() => {
		reset();
	});
	const pageParam = computed({
		get: () => {
			return {
				pageNum: state.pageable.pageNum,
				pageSize: state.pageable.pageSize
			};
		},
		set: (newVal: any) => {
			console.log(newVal);
		}
	});

	const testData: any = {
		code: 200,
		msg: "成功",
		data: {
			datalist: [
				{
					id: "66380732484112937878",
					username: "康刚",
					gender: 1,
					age: 22,
					idCard: "66380732484112937878",
					email: "j.cdgwpmxml@kfywqg.mc",
					address: "贵州省 铜仁市",
					createTime: "2015-03-07 13:36:52",
					status: 0,
					avatar: "http://dummyimage.com/100x100/f2bf79&text=薛刚"
				},
				{
					id: "47635758736436981631",
					username: "彭平",
					gender: 2,
					age: 26,
					idCard: "47635758736436981631",
					email: "l.dxjivzx@tjcbjp.kz",
					address: "重庆 重庆市",
					createTime: "2019-04-06 05:28:59",
					status: 1,
					avatar: "http://dummyimage.com/100x100/9c79f2&text=龚军"
				},
				{
					id: "78955722111593047419",
					username: "许娜",
					gender: 2,
					age: 23,
					idCard: "78955722111593047419",
					email: "y.qwrhe@elqyv.tz",
					address: "河南省 周口市",
					createTime: "2001-04-30 23:20:54",
					status: 1,
					avatar: "http://dummyimage.com/100x100/79f279&text=夏洋"
				},
				{
					id: "85035773438413452662",
					username: "孔强",
					gender: 1,
					age: 18,
					idCard: "85035773438413452662",
					email: "o.cihsrq@hdyjeifo.an",
					address: "福建省 漳州市",
					createTime: "1990-12-20 15:01:26",
					status: 1,
					avatar: "http://dummyimage.com/100x100/f2799c&text=朱秀兰"
				},
				{
					id: "58436480491367066221",
					username: "任平",
					gender: 1,
					age: 26,
					idCard: "58436480491367066221",
					email: "l.kygyoqel@ootei.bf",
					address: "上海 上海市",
					createTime: "1996-09-30 05:14:39",
					status: 1,
					avatar: "http://dummyimage.com/100x100/79bff2&text=康平"
				},
				{
					id: "86478330373343116832",
					username: "孟刚",
					gender: 2,
					age: 23,
					idCard: "86478330373343116832",
					email: "s.qtzgwwuob@jvpdnpu.be",
					address: "新疆维吾尔自治区 和田地区",
					createTime: "2001-11-16 16:40:15",
					status: 0,
					avatar: "http://dummyimage.com/100x100/e3f279&text=马霞"
				},
				{
					id: "81874748873297864312",
					username: "郑勇",
					gender: 1,
					age: 24,
					idCard: "81874748873297864312",
					email: "v.lklyi@idphjxd.ev",
					address: "新疆维吾尔自治区 克孜勒苏柯尔克孜自治州",
					createTime: "2013-02-08 14:42:39",
					status: 1,
					avatar: "http://dummyimage.com/100x100/de79f2&text=潘秀英"
				},
				{
					id: "17970559935826451916",
					username: "雷敏",
					gender: 1,
					age: 20,
					idCard: "17970559935826451916",
					email: "l.qflkhce@wkqtsbn.mg",
					address: "香港特别行政区 九龙",
					createTime: "1994-10-24 13:35:17",
					status: 0,
					avatar: "http://dummyimage.com/100x100/79f2ba&text=张霞"
				},
				{
					id: "87856326443328158396",
					username: "龚明",
					gender: 2,
					age: 17,
					idCard: "87856326443328158396",
					email: "l.pzuvzdf@adnmorkyk.uk",
					address: "江西省 宜春市",
					createTime: "2015-07-26 22:42:00",
					status: 1,
					avatar: "http://dummyimage.com/100x100/f29779&text=方秀英"
				},
				{
					id: "36403135684354476172",
					username: "郭刚",
					gender: 1,
					age: 18,
					idCard: "36403135684354476172",
					email: "p.tlepo@tfq.gf",
					address: "台湾 基隆市",
					createTime: "1974-04-07 05:33:00",
					status: 0,
					avatar: "http://dummyimage.com/100x100/797ef2&text=锺娟"
				}
			],
			pageNum: 1,
			pageSize: 10,
			total: 2000
		}
	};

	//  获取表格数据
	const getTableList = () => {
		try {
			//  先更新查询参数
			updateTotalParam();
			Object.assign(state.totalParam, initParam);
			// TODO 通过API获取数据
			// const { data } = await api(state.totalParam);
			state.tableData = isPageable ? testData.data : testData;

			console.log(state.tableData, "state.tableData");

			const { pageNum, pageSize, total } = testData;
			isPageable && updatePageable({ pageNum, pageSize, total });
		} catch (error) {
			console.log(error);
		}
	};

	// 更新查询参数
	const updateTotalParam = () => {
		state.totalParam = {};
		// 处理查询参数，可以给查询参数加自定义前缀操作
		let nowSearchParam: { [propName: string]: any } = {};
		// 防止手动清空输入框携带参数（可以自定义查询参数前缀）
		for (let key in state.searchParam) {
			// * 某些情况下参数为 false/0 也应该携带参数
			if (state.searchParam[key] || state.searchParam[key] === false || state.searchParam[key] === 0) {
				nowSearchParam[key] = state.searchParam[key];
			}
		}
		Object.assign(state.totalParam, nowSearchParam, isPageable ? pageParam.value : {});
	};

	// 更新分页信息
	const updatePageable = (resPageable: Table.Pageable) => {
		Object.assign(state.pageable, resPageable);
	};

	// 查询
	const search = () => {
		state.pageable.pageNum = 1;
		getTableList();
	};

	// 表格数据重置
	const reset = () => {};

	//  每页条数改变
	const handleSizeChange = (val: number) => {
		state.pageable.pageSize = val;
		state.pageable.pageNum = 1;
		getTableList();
	};

	// 页面改变
	const handleCurrentChange = (val: number) => {
		state.pageable.pageNum = val;
		getTableList();
	};

	return {
		...toRefs(state),
		getTableList,
		search,
		reset,
		handleSizeChange,
		handleCurrentChange
	};
};
