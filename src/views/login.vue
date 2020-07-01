<template>
	<div class="chart map-container page-container">

	</div>
</template>
<script>
	import echarts from "echarts";
	import {
		getDZData
	} from '@/api/common.js'
	export default {
		name: "Dashboard",
		data() {
			return {

			};
		},
		created() {
			this.initData();
		},
		beforeDestroy() {},
		methods: {
			initData() {
				getDZData('/DZ.json').then(geoJson => {
					console.log('geoJson', geoJson)
					this.chart = echarts.init(this.$el);
					echarts.registerMap('DZ', geoJson);
					this.chart.setOption({
						title: {
							text: '达州',
							subtext: '人口密度数据来自Wikipedia',
							sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
						},
						tooltip: {
							trigger: 'item',
							formatter: '{b}<br/>{c} (单位)'
						},
						visualMap: {
							min: 800,
							max: 50000,
							text: ['High', 'Low'],
							realtime: false,
							calculable: true,
							inRange: {
								color: ['lightskyblue', 'yellow', 'orangered']
							}
						},
						series: [{
							name: '达州',
							type: 'map',
							mapType: 'DZ', // 自定义扩展图表类型
							label: {
								show: true
							},
							data: [{
									name: '万源市',
									value: 800
								},
								{
									name: '宣汉县',
									value: 15477.48
								},
								{
									name: '通川区',
									value: 31686.1
								},
								{
									name: '达川区',
									value: 50000
								},
								{
									name: '开江县',
									value: 6992.6
								},
								{
									name: '大竹县',
									value: 44045.49
								},
								{
									name: '渠县',
									value: 40689.64
								},
							],
						}]
					})
				})
			}
		}
	};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.map-container {
		width: 100%;
		height: 100%;
	}
</style>
}
</style>
