let option = {
    backgroundColor: "#031d33",
    xAxis: {
        show: false,
    },
    yAxis: [
        {
            type: "category",
            data: [""],
            axisLine: {
                show: false
            },
            axisTick: [
                {
                    show: false
                }
            ]
        }
    ],
    series: [
        {
            name: "率",
            type: "bar",
            zlevel: 1,
            itemStyle: {
                barBorderRadius: 30,
                color: "#00F3FA"
            },
            barWidth: 20,
            data: [10]
        },
        {
            name: "背景",
            type: "bar",
            barWidth: 20,
            barGap: "-100%",
            data: [20],
            itemStyle: {
                color: "#0E5763",
                barBorderRadius: 30
            }
        }
    ]
}
this.chartInstance1.setOption(option);
common.resizeEcharts("chart1", this.chartInstance1)