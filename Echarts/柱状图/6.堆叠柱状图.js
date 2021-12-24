let option = {
    legend: {
        right: "0%",
        top: "20%",
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 10,
        textStyle: {
            color: "rgba(255,255,255,1)"
        },
        data: ["上周成交", "上周未成交", "本周成交", "本周未成交"]
    },
    xAxis: [
        {
            type: "category",
            axisLabel: {
                color: "#fff"
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "#152F7B"
                }
            },
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        }
    ],
    yAxis: [
        {
            type: "value",
            axisLabel: {
                color: "#fff",
                formatter: function (value) {
                    return value
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#152F7B"
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#152F7B"
                }
            }
        }
    ],
    series: [
        {
            name: "上周成交",
            type: "bar",
            stack: "yesterday",
            emphasis: {
                focus: "series"
            },
            itemStyle: {
                color: "FF646C"
            },
            data: [1, 2, 3, 4, 5, 6, 7]
        },
        {
            name: "上周未成交",
            type: "bar",
            stack: "yesterday",
            emphasis: {
                focus: "series"
            },
            itemStyle: {
                color: "#FFA253"
            },
            data: [1, 2, 3, 4, 5, 6, 7]
        },
        {
            name: "本周成交",
            type: "bar",
            stack: "today",
            emphasis: {
                focus: "series"
            },
            itemStyle: {
                color: "#00FFFF"
            },
            data: [1, 2, 3, 4, 5, 6, 7]
        },
        {
            name: "本周成交",
            type: "bar",
            stack: "today",
            emphasis: {
                focus: "series"
            },
            itemStyle: {
                color: "FF646C"
            },
            data: [1, 2, 3, 4, 5, 6, 7]
        },
        {
            name: "本周未成交",
            type: "bar",
            stack: "today",
            emphasis: {
                focus: "series"
            },
            itemStyle: {
                color: "FF646C"
            },
            data: [1, 2, 3, 4, 5, 6, 7]
        },
    ]
}
this.chartInstance1.setOption(option);
common.resizeEcharts("chart1", this.chartInstance1)