let option = {
    xAxis: {
        show: true,
        data: ["1张", "2张", "3张", "4张", "4张以上"],
        axisLabel: {
            color: "#B9F4F3"
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "087B82"
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#087B82"
            }
        }
    },
    yAxis: {
        name: "单位：万人",
        nameTextStyle:{
            color: "#B9F4F3"
        },
        axisLabel:{
            color: "#B9F4F3",
            position: "bottom"
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "087B82"
            }
        }
    },
    series: [
        {
            type: "bar",
            barWidth: 30,
            barCategoryGap: 200,
            itemStyle: {
                    normal:{
                    borderWidth: 1,
                    borderColor: "#18CEE2",
                    barBorderRadius: 28,
                    color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        { offset: 0, color: "#00E4D8"},
                        { offset: 1, color: "#0032FF"}
                    ])
                },
                emphasis: {
                    barBorderRadius: 8,
                    shadowBlur:18,
                    sadowColor:"rgba(218, 170, 58, 0.7"
                }
            },
            label: {
                show: true,
                color: "#fff"
            },
            data:[220, 182, 191, 234, 290]
        },
        {
            name: "a",
            tooltip: {
                show:false
            },
            type: "pictorialBar",
            itemStyle: {
                normal: {
                    color:new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        { offset: 0, color: "#2bc6dd"},
                        { offset: 1, color: "#18cde1"}
                    ])
                }
            },
            symbol: "circle",
            symbolSize:["26", "10"],
            symbolPosition: "end",
            data: [220, 182, 191, 234, 290],
            z: 3
        }
    ]
}
this.chartInstance1.setOption(option);
common.resizeEcharts("chart1", this.chartInstance1)