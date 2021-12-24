let option = {
    tooltip: {
        show: true,
        trigger: "axis",
        backgroundColor: "rgba(1, 8, 63, .5",
        padding: 0,
        borderWidth: 0,
        textStyle: {
            color: "#fff"
        },
        axisPointer: {
            type: "shadow"
        },
        formatter: (params) => {
            if (!params.length) return "";
            let s = "<div class='tps'>" + params[0].axisValueLabel + "<br/>";
            for (const iterator of params) {
                // 如果是负数则反转
                let d = iterator.data < 0 ? -iterator.data : iterator.data;
                s += iterator.marker + iterator.seriesName + ":" + d + "万人" + "<br/>"
            }
            return s + "<div/>"
        }
    },
    legend: {
        data: ["男", "女"],
        right: "0",
        top: "0",
        itemWidth: 20,
        itemHeight: 10,
        itemGap: 30,
        textStyle: {
            color: "rgba(255, 255, 255, 1)"
        }
    },
    xAxis: [
        {
            type: "value",
            axisLabel: {
                formatter: (value) => {
                    // 负数取反
                    if (value < 0) return -value;
                    else return value
                },
                fontSize: 10,
                color: "#B9F4F3"
            },
            splitLine: {
                show: false
            }
        }
    ],
    yAxis: [
        {
            type: "category",
            axisTick: {
                show: false
            },
            offset: 10,
            data: ["0-5", "0-5", "0-5", "0-5", "0-5"],
            axisLabel: {
                color: "#B9F4F3",
                fontSize: 10,
                interval: 0,
                align: "center"
            },
            axisLine: {
                show: false
            }
        }
    ],
    series: [
        {
            name: "男",
            type: "bar",
            stack: "客户数",
            itemStyle: {
                color: "#B483FF"
            },
            data: [-1, -2, -3, -4, -5]
        },
        {
            name: "女",
            type: "bar",
            stack: "客户数",
            itemStyle: {
                color: "#15CDC1"
            },
            data: [1, 2, 3, 4, 5]
        }
    ]
}
this.chartInstance1.setOption(option);
common.resizeEcharts("chart1", this.chartInstance1)