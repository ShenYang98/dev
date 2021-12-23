let option = {
    tooltip: {
        trigger: "axis",
        formatter: "{b} : {c}",
        axisPointer: {
            type: "shadow"
        }
    },
    xAxis: {
        data: [
            "脱保1年",
            "脱保2年",
            "脱保3年",
            "脱保4年",
            "脱保5年",
            "脱保5年以上",
        ],
        axisLine: {
            lineStyle: {
                color: "#087B82"
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
                color: "#B9F4F3"
            }
        }
    },
    yAxis: [
        {
            name:"单位：万人",
            nameTextStyle: {
                color: "#B9F4F3"
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#B9F4F3"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#087B82"
                }
            }
        }
    ],
    series: [
        {
            name: "a",
            z: 0,
            tooltip:{
                show:true
            },
            yAxisIndex: 0,
            type: "bar",
            barWidth:23,
            itemStyle: {
                color: new this.$echarts.graphic.LinearGradient(0,1,0,0,[
                    {
                        offset:0,
                        color:"#0B4EC3" //0%处的颜色
                    },
                    {
                        offset:0.6,
                        color:"#138CEB" //60%处的颜色
                    },
                    {
                        offset:1,
                        color:"#00D3E2" //100%处的颜色
                    }
                ],false)
            },
            data: [22,22,33,44,99,33],
            barGap: 0,         
        },
        {
            type: "bar",
            barWidth: 8,
            z: 0,
            yAxisIndex: 0,
            itemStyle: {
                color: new this.$echarts.graphic.LinearGradient(
                    0,1,0,0,
                    [
                        {
                            offset: 0,
                            
                        }
                    ]
                )
            }
        }
    ]
}