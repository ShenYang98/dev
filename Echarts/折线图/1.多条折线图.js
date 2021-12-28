let option = {
    legend: {
        show: true,
        itemWidth: 16,
        itemHeight: 6,
        textStyle: {
            color: "#fff",
            fontSize: 10
        }
    },
    xAxis: {
        show: true,
        data: ["1月","2月","3月","4月","5月","6月"],
        axisLabel: {
            color: "#B9F1F4"
        },
        splitLine: {
            show:true,
            lineStyle: {
                color: "#087B82"
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
        type: "value",
        axisLabel: {
            color: "#B9F4F3",
            position: "bottom",
            formatter: "{value}%"
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#087B82"
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
    series: [
        {
            type: "line",
            name: "全险种",
            data: [1,2,3,4,5,6],
            itemStyle: {
                color: "#00E4DB"
            },
            smooth: true
        },
        {
            type: "line",
            name: [1,2,3,4,5,6],
            data: rate2,
            itemStyle: {
                color: "#FFD82A"
            },
            smooth: true
        },
    ]
}